javascript:(function(){
	const STORAGE_PREFIX = 'zeph_msg_history_';
	const ROOM_KEY = 'zeph_msg_room';
	const DEFAULT_ROOM = 'Main';

	const nav = document.querySelector(".sgy-tabbed-navigation");
	if(!nav) return alert('Make sure you are on Schoology (Recent Activity page).');
	if(!document.getElementById('msgs-tab')){
		const li = document.createElement("li");
		li.id = "msgs-tab";
		const a = document.createElement("a");
		a.href = "javascript:void(0)";
		a.textContent = "Messages";
		li.appendChild(a);
		nav.appendChild(li);

		const tabs = document.querySelectorAll('.sgy-tabbed-navigation > li');
		li.onclick = () => {
			li.classList.add('active');
			li.setAttribute('aria-current','true');
			tabs.forEach(tab=>{
				if(tab.id !== "msgs-tab"){
					tab.classList.remove('active');
					tab.setAttribute('aria-current','false');
				}
			});
			activateMessagesTab();
		};
	}

	function activateMessagesTab(){
		const container = document.getElementById('home-feed-container');
		if(!container) return alert('Run on Schoology Recent Activity page.');
		container.innerHTML = '';
		initMessagingUI(container);
	}

	function initMessagingUI(container){
		const user = detectUser();
		let room = localStorage.getItem(ROOM_KEY) || DEFAULT_ROOM;
		let bc = null;
		let pendingFiles = [];
		let feedEl = null;
		let scrollContainer = null;

		const style = document.createElement('style');
		style.textContent = `
		  #zwb-file-preview img{max-width:60px;max-height:60px;border-radius:4px;margin-right:6px;cursor:pointer}
		  #zwb-msg-actions{display:flex;gap:6px;align-items:center}
		`;
		document.head.appendChild(style);

		renderUI();
		setupTransports();
		refreshMessages();
		autoScrollToBottom();

		function renderUI(){
			container.innerHTML = `
			 <div id="edge-filters" class="sEdgeFilterProcessed">
			   <label style="font-size:12px;color:#555;margin-right:8px">Name Format:</label>
			   <select id="zwb-name-format">
				 <option>First Last</option>
				 <option>First L.</option>
				 <option>F. Last</option>
				 <option>Last</option>
				 <option>First</option>
			   </select>
			 </div>

			 <h2>Messages</h2>

			 <div id="smart-box" class="sHome-processed">
			   <div class="smart-box">
				 <div class="smart-box-mid">
				   <div class="create-type">Room:</div>
				   <span id="room-name" style="margin-left:auto;font-size:12px;color:#555;cursor:pointer;">
					 Room: ${escapeHtml(room)}
				   </span>
				   <div id="smart-box-messages"></div>
				   <div id="smart-box-content">
					 <div id="smart-box-tab-content-0" class="smart-box-tab-content"></div>
				   </div>
				 </div>
			   </div>
			 </div>

			 <div class="feed" id="zwb-feed-wrap" style="max-height:520px;overflow:auto;">
			   <div class="item-list">
				 <ul class="s-edge-feed" id="zwb-msg-feed"></ul>
			   </div>
			 </div>

			 <div style="margin-top:10px; display:flex; flex-direction:column;">
			   <div style="display:flex; gap:8px; align-items:flex-start;">
				 <div style="flex:1;">
				   <textarea id="zwb-textarea" placeholder="Write a message..." style="width:100%;margin-top:10px;min-height:70px;"></textarea>
				   <div id="zwb-file-preview" style="margin-top:6px; font-size:12px;color:#333;"></div>
				 </div>
				 <div style="display:flex; flex-direction:column; gap:6px;">
				   <div id="zwb-msg-actions">
					 <button id="zwb-send" class="sgy-button">Send</button>
					 <label for="zwb-img-upload-hidden" id="zwb-choose-btn" class="sgy-button" style="cursor:pointer;">Choose File</label>
					 <button id="zwb-clear" class="sgy-button" title="Clear chat (local)">Clear</button>
				   </div>
				   <input type="file" id="zwb-img-upload-hidden" accept="image/*" multiple style="display:none;">
				 </div>
			   </div>
			 </div>
			`;

			// bind
			document.getElementById('room-name').onclick = () => {
				const r = prompt("Enter room name:", room);
				if(!r) return;
				room = r;
				localStorage.setItem(ROOM_KEY, r);
				document.getElementById('room-name').textContent = ' Room: ' + r;
				// re-init broadcast channel to new room
				if(bc) try{ bc.close(); }catch(e){}
				setupTransports();
				refreshMessages();
				autoScrollToBottom();
			};

			document.getElementById('zwb-send').onclick = sendMessage;
			document.getElementById('zwb-img-upload-hidden').onchange = handleFileSelect;
			document.getElementById('zwb-clear').onclick = clearChat;

			// Enter => send, Shift+Enter => newline
			const ta = document.getElementById('zwb-textarea');
			ta.addEventListener('keydown', function(e){
				if(e.key === 'Enter' && !e.shiftKey){
					e.preventDefault();
					sendMessage();
				}
			});

			feedEl = document.getElementById('zwb-msg-feed');
			scrollContainer = document.getElementById('zwb-feed-wrap') || feedEl.parentElement;
		}

		async function handleFileSelect(e){
			const files = Array.from(e.target.files || []);
			if(!files.length) return;
			pendingFiles = pendingFiles.concat(files);
			updateFilePreview();
			e.target.value = '';
		}

		function updateFilePreview(){
			const preview = document.getElementById('zwb-file-preview');
			preview.innerHTML = '';
			if(!pendingFiles.length) return;
			const info = document.createElement('div');
			info.textContent = `${pendingFiles.length} file(s) attached`;
			preview.appendChild(info);
			const thumbs = document.createElement('div');
			thumbs.style.marginTop = '6px';
			thumbs.style.display = 'flex';
			thumbs.style.alignItems = 'center';
			pendingFiles.slice(0,8).forEach((f, idx)=>{
				const img = document.createElement('img');
				const url = URL.createObjectURL(f);
				img.src = url;
				img.dataset.url = url;
				img.dataset.idx = idx;
				img.title = 'Click to remove';
				img.onclick = function(){
					const i = parseInt(this.dataset.idx,10);
					const removed = pendingFiles.splice(i,1);
					try{ URL.revokeObjectURL(this.dataset.url); }catch(e){}
					updateFilePreview();
				};
				thumbs.appendChild(img);
			});
			preview.appendChild(thumbs);
		}

		function processFilesToDataURLs(files){
			return Promise.all(files.map(f=>{
				return new Promise((res, rej)=>{
					const r = new FileReader();
					r.onload = ()=>res(r.result);
					r.onerror = ()=>rej();
					r.readAsDataURL(f);
				});
			}));
		}

		function autoScrollToBottom(){
			if(!scrollContainer) return;
			try{ scrollContainer.scrollTop = scrollContainer.scrollHeight; }catch(e){}
		}

		function sendMessage(){
			const ta = document.getElementById('zwb-textarea');
			const txtRaw = ta.value;
			const txt = txtRaw.trim();
			const nameFmt = document.getElementById('zwb-name-format').value;
			// handle pending files first (convert to data URLs)
			if(pendingFiles.length){
				const files = pendingFiles.slice();
				processFilesToDataURLs(files).then(urls=>{
					const safeText = escapeHtml(txt).replace(/\n/g,'<br>');
					const imgsHtml = urls.map(u=>`<img src="${u}" style="max-width:360px;border-radius:4px;">`).join('<br>');
					const combined = (safeText? safeText + '<br>' : '') + imgsHtml;
					const msg = buildMessage(combined, nameFmt, true);
					appendMessage(msg, true);
					saveMessage(msg);
					broadcastMessage(msg);
					// cleanup
					pendingFiles.forEach(f=>{
						// no object URLs left since we used FileReader, but revoke previews if any
					});
					pendingFiles = [];
					updateFilePreview();
					ta.value = '';
					autoScrollToBottom();
				}).catch(()=>{});
				return;
			}
			if(!txt) return;
			const isHtml = /<img\s/i.test(txt);
			const msg = buildMessage(isHtml ? txt : escapeHtml(txt), nameFmt, isHtml);
			appendMessage(msg, true);
			saveMessage(msg);
			broadcastMessage(msg);
			ta.value = '';
			autoScrollToBottom();
		}

		function escapeHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
		function uid(){ return 'm_' + Math.random().toString(36).slice(2,9); }
		function nowISO(){ return (new Date()).toISOString(); }

		function buildMessage(text, nameFormat, isHtml){
			const from = formatUser(nameFormat);
			return {
				id: uid(),
				from: { id: from.id, rawName: from.rawName, displayName: from.displayName, avatar: from.avatar },
				text: isHtml ? text : escapeHtml(text),
				ts: nowISO(),
				room: room
			};
		}

		function formatUser(fmt){
			const u = user;
			const parts = (u.rawName||'').split(' ').filter(Boolean);
			const first = parts[0]||'';
			const last = parts[parts.length-1]||'';
			if(fmt==='First Last') return { ...u, displayName: u.rawName };
			if(fmt==='Last') return { ...u, displayName: last };
			if(fmt==='First') return { ...u, displayName: first };
			if(fmt==='First L.') return { ...u, displayName: `${first} ${last? (last[0]+'.') : ''}`.trim() };
			if(fmt==='F. Last') return { ...u, displayName: `${first? (first[0]+'. ') : ''}${last}`.trim() };
			return { ...u, displayName: u.rawName };
		}

		function saveMessage(msg){
			try{
				const key = STORAGE_PREFIX + room;
				const raw = localStorage.getItem(key);
				const arr = raw ? JSON.parse(raw) : [];
				// keep deduplication by id
				if(!arr.find(x=>x.id===msg.id)) arr.push(msg);
				if(arr.length > 2000) arr.splice(0, arr.length - 2000);
				localStorage.setItem(key, JSON.stringify(arr));
			}catch(e){}
		}

		function loadHistory(){
			try{
				const raw = localStorage.getItem(STORAGE_PREFIX + room);
				return raw ? JSON.parse(raw) : [];
			}catch(e){ return []; }
		}

		function historyHas(id){
			const arr = loadHistory();
			return arr.some(x=>x.id === id);
		}

		function refreshMessages(){
			if(!feedEl) return;
			feedEl.innerHTML = '';
			const hist = loadHistory();
			hist.forEach(m=>{ if(!document.getElementById(m.id)) appendMessage(m,false); });
			autoScrollToBottom();
		}

		function appendMessage(msg, local){
			if(!feedEl) return;
			// skip if already in DOM
			if(document.getElementById(msg.id)) return;
			// skip teacher names if wanted (preserved from previous script)
			if((msg.from && (msg.from.rawName||'').toLowerCase().includes('teacher'))) return;

			const avatar = msg.from.avatar || '';
			const profileId = (msg.from.id || '').replace(/^user_/, '') || '';
			const displayName = escapeHtml(msg.from.displayName || msg.from.rawName || 'Anonymous');

			const li = document.createElement('li');
			li.id = msg.id;
			li.setAttribute('timestamp', Math.floor(Date.parse(msg.ts || nowISO())/1000).toString());
			li.className = 'first';

			li.innerHTML = `
<div class="s-edge-type-update-post sUpdate-processed">
  <div class="edge-item">
    <div class="edge-left">
      <div class="picture">
        <div class="profile-picture-wrapper">
          <div class="profile-picture">
            ${profileId? `<a href="/user/${profileId}" title="${displayName}" class="sExtlink-processed">` : ''}
              <img src="${escapeHtml(avatar)}" alt="${displayName}" title="" class="imagecache imagecache-profile_sm">
            ${profileId? `</a>` : ''}
          </div>
        </div>
      </div>
    </div>
    <div class="edge-main-wrapper">
      <span class="edge-sentence">
        <div class="edge-sentence-actions"></div>
        <div class="update-sentence-inner">
          <span class="long-username">
            ${profileId? `<a href="/user/${profileId}" title="View user profile." class="sExtlink-processed">${displayName}</a>` : `${displayName}`}
          </span>
          <span class="update-body s-rte">${msg.text}</span>
        </div>
      </span>
      <span class="edge-main"><div class="post-body"></div></span>
      <div class="edge-footer">
        <div class="created"><span class="small gray">${new Date(msg.ts).toLocaleString()}</span></div>
      </div>
    </div>
  </div>
</div>`;

			feedEl.appendChild(li);
			// save if remote message not yet saved
			if(!historyHas(msg.id)) saveMessage(msg);
			if(local) autoScrollToBottom();
		}

		function setupTransports(){
			try{
				if(bc) try{ bc.close(); }catch(e){}
				if('BroadcastChannel' in window){
					bc = new BroadcastChannel('zwb_channel_' + room);
					bc.onmessage = ev=>{
						const msg = ev.data;
						if(!msg || msg.room !== room) return;
						// ignore our own messages if already present
						if(msg.from && msg.from.id === user.id) return;
						if(historyHas(msg.id)) return;
						appendMessage(msg, false);
						saveMessage(msg);
					};
				}
			}catch(e){}
		}

		function broadcastMessage(msg){
			try{ if(bc) bc.postMessage(msg); }catch(e){}
		}

		function clearChat(){
			if(!confirm('Clear local chat history for this room?')) return;
			localStorage.removeItem(STORAGE_PREFIX + room);
			if(feedEl) feedEl.innerHTML = '';
		}
	}

	function detectUser(){
		try{
			const menu = document.querySelector('[data-sgy-sitenav="header-my-account-menu"]');
			const imgEl = menu ? menu.querySelector('img') : null;
			const nameEl = menu ? (menu.querySelector('.util-max-width-twenty-characters-2pOJU') || menu.querySelector('.LGaPf')) : null;
			const id = extractUserIdFromProfileLink(menu) || ('user_anon_' + Math.random().toString(36).slice(2,8));
			const rawName = nameEl ? nameEl.textContent.trim() : 'Anonymous';
			const avatar = imgEl ? imgEl.src : '';
			return { id, rawName, displayName: rawName, avatar };
		}catch(e){
			return { id:'user_anon', rawName:'Anonymous', displayName:'Anonymous', avatar:'' };
		}
	}

	function extractUserIdFromProfileLink(menu){
		if(!menu) return null;
		const a = menu.querySelector('a[href*="/user/"]');
		const m = a ? a.getAttribute('href').match(/\/user\/(\d+)/) : null;
		return m ? ('user_' + m[1]) : null;
	}
})();