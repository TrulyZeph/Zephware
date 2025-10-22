javascript:(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyBM8PsYtRud5ZKI7MdQxJeOYTQ2YLBMA0M",
    authDomain: "zephware-messages.firebaseapp.com",
    databaseURL: "https://zephware-messages-default-rtdb.firebaseio.com",
    projectId: "zephware-messages",
    storageBucket: "zephware-messages.firebasestorage.app",
    messagingSenderId: "649260131467",
    appId: "1:649260131467:web:7447ca7512a6ab3a81a08e",
    measurementId: "G-HRF3TYZT57"
  };

  const s = document.createElement('script');
  s.src = "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js";
  s.onload = () => {
    const d = document.createElement('script');
    d.src = "https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js";
    d.onload = initApp;
    document.head.appendChild(d);
  };
  document.head.appendChild(s);

  function initApp() {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap');
      * { font-family:'Fredoka',sans-serif; box-sizing:border-box; }
      .container {
        position: fixed; inset: 0;
        background: #0a0a0a; display:flex; align-items:center; justify-content:center; flex-direction:column;
        color:white; z-index:99999;
      }
      .login, .chat {
        background: #121212; border-radius:15px; padding:20px; width:400px; max-width:90%; text-align:center;
        position:relative; overflow:hidden;
      }
      @keyframes gradmove {
        0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}
      }
      .header {
        display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:15px;
      }
      .header img { width:60px; height:60px; }
      .header h1 {
        background:linear-gradient(to bottom,#01AEFD,#015AFD);
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        font-weight:bold; margin:0;
      }
      input,button {
        border:none; border-radius:8px; padding:10px;
      }
      input { width:90%; margin-top:10px; text-align:center; }
      button {
        background:linear-gradient(to bottom,#01AEFD,#015AFD);
        color:white; font-weight:bold; cursor:pointer; margin-top:10px;
      }
      .messages {
        height:300px; overflow-y:auto; text-align:left; padding:10px; background:#1a1a1a; border-radius:10px; margin-bottom:10px;
      }
      .message { margin-bottom:5px; word-wrap:break-word; }
      .input-row {
        display:flex; align-items:center; justify-content:center; gap:8px;
      }
      .input-row input { flex:1; }
      .upload-preview {
        max-height:120px; margin:5px 0; display:none;
      }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
      <div class="login">
        <div class="header">
          <img src="https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/assets/Zephware.png">
          <h1>Zephware</h1>
        </div>
        <input id="user" placeholder="Username">
        <input id="pass" placeholder="Password" type="password">
        <div class="color-picker">
          <input type="color" id="colorPick" value="#ff0000">
          <input type="text" id="colorHex" value="#ff0000" maxlength="7">
        </div>
        <button id="loginBtn">Login / Register</button>
      </div>
    `;
    document.body.appendChild(container);

    const colorPick = container.querySelector('#colorPick');
    const colorHex = container.querySelector('#colorHex');
    colorPick.addEventListener('input',()=>colorHex.value=colorPick.value);
    colorHex.addEventListener('input',()=>{if(/^#([0-9A-F]{3}){1,2}$/i.test(colorHex.value))colorPick.value=colorHex.value;});

    container.querySelector('#loginBtn').onclick = async () => {
      const username = container.querySelector('#user').value.trim();
      const password = container.querySelector('#pass').value.trim();
      const color = colorHex.value.trim();
      if(!username||!password) return alert("Please enter username and password.");

      const userRef=db.ref('users/'+username);
      try {
        const snap=await userRef.get();
        if(snap.exists()){
          const data=snap.val();
          if(data.password!==password) return alert("Wrong password!");
          startChat(username,data.color||color);
        }else{
          await userRef.set({password,color});
          startChat(username,color);
        }
      } catch(err){ alert("Connection error."); console.error(err); }
    };

    function startChat(username,color){
      container.innerHTML=`
        <div class="chat">
          <div class="header">
            <img src="https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/assets/Zephware.png">
            <h1>Zephware</h1>
          </div>
          <div class="messages" id="messages"></div>
          <img class="upload-preview" id="preview">
          <div class="input-row">
            <input id="msgBox" placeholder="Type your message...">
            <button id="uploadBtn">+</button>
          </div>
          <div style="display:flex;gap:8px;margin-top:8px;align-items:center;">
            <input type="color" id="colorPickerChat" value="${color}" style="width:48px;padding:6px;border-radius:8px;">
            <input type="text" id="colorHexChat" value="${color}" maxlength="7" style="width:90px;padding:6px;border-radius:8px;background:#0f0f0f;color:#fff;border:none;">
            <button id="setColorBtn">Set Color</button>
          </div>
          <input type="file" id="fileInput" accept="image/*" style="display:none">
        </div>
      `;
      const msgBox=container.querySelector('#msgBox');
      const messagesDiv=container.querySelector('#messages');
      const fileInput=container.querySelector('#fileInput');
      let preview=container.querySelector('#preview');
      const chatRef=db.ref('chat');

      const colorPickerChat = container.querySelector('#colorPickerChat');
      const colorHexChat = container.querySelector('#colorHexChat');
      const setColorBtn = container.querySelector('#setColorBtn');
      colorPickerChat.addEventListener('input', ()=> colorHexChat.value = colorPickerChat.value);
      colorHexChat.addEventListener('input', ()=> { if(/^#([0-9A-F]{3}){1,2}$/i.test(colorHexChat.value)) colorPickerChat.value = colorHexChat.value; });
      setColorBtn.onclick = async ()=>{
         const newColor = (colorPickerChat.value || colorHexChat.value).trim();
         if(!newColor) return alert('invalid color');
         try{
            await db.ref('users/'+username+'/color').set(newColor);
            color = newColor;
            alert('Color updated');
         }catch(e){ console.error('color update failed',e); alert('Color update failed'); }
      };

      let previewData=null;

      msgBox.addEventListener('keypress',e=>{
        if(e.key==='Enter'&&msgBox.value.trim()){
          const text=msgBox.value.trim();

          if(username==='Administrator'&&text.startsWith('/ban ')){
            const target=text.split(' ')[1];
            if(target){
              db.ref('users/'+target).remove();
              db.ref('chat').once('value',snap=>{
                snap.forEach(s=>{
                  if(s.val().user===target) db.ref('chat/'+s.key).remove();
                });
              });
              appendMsg({user:'System',color:'#f00',text:`${target} has been banned.`});
            }
            msgBox.value='';
            return;
          }

          chatRef.push({user:username,color,text, image:previewData||null,time:Date.now()});
          msgBox.value='';
          previewData=null;
          if(preview){ try{ preview.src=''; preview.style.display='none'; }catch(e){} }
        }
      });

      container.querySelector('#uploadBtn').onclick=()=>fileInput.click();
      fileInput.accept = 'image/*,video/*';
      fileInput.onchange=async e=>{
        const file=e.target.files[0];
        if(file) previewFile(file);
      };

      document.addEventListener('paste', e => {
      const item = e.clipboardData && e.clipboardData.items[0];
      if (item) {
         if (item.type.startsWith('image/') || item.type.startsWith('video/')) {
            const file = item.getAsFile();
            previewFile(file);
         }
      }
      });

      function previewFile(file) {
      const MAX_MB = 5;
      const MAX_W = 160;
      const MAX_H = 120;

      if (file.size > MAX_MB * 1024 * 1024) {
         alert(`File too large! Must be under ${MAX_MB} MB.`);
         return;
      }

      const reader = new FileReader();
      reader.onload = ev => {
         const result = ev.target.result;
         if(preview) preview.style.display = 'block';
         previewData = result;

         if (file.type && file.type.startsWith('video/')) {
            const vid = document.createElement('video');
            vid.controls = true;
            vid.src = result;
            vid.style.maxWidth = MAX_W + 'px';
            vid.style.maxHeight = MAX_H + 'px';
            vid.style.borderRadius = '8px';
            vid.id = 'preview';
            if(preview && preview.parentNode) preview.parentNode.replaceChild(vid, preview);
            preview = vid;
         } else {
            const img = document.createElement('img');
            img.src = result;
            img.id = 'preview';
            img.className = 'upload-preview';
            img.style.maxWidth = MAX_W + 'px';
            img.style.maxHeight = MAX_H + 'px';
            img.style.borderRadius = '8px';
            if(preview && preview.parentNode) preview.parentNode.replaceChild(img, preview);
            preview = img;
         }
      };
      reader.readAsDataURL(file);
      }

      function appendMsg(m) {
      const div = document.createElement('div');
      div.className = 'message';
      div.innerHTML = `<b style="color:${m.color}">${m.user}:</b> ${m.text || ''}`;
      
      if (m.image) {
         if (m.image.startsWith('data:video')) {
            const vid = document.createElement('video');
            vid.src = m.image;
            vid.controls = true;
            vid.style.maxWidth = '320px';
            vid.style.maxHeight = '240px';
            vid.style.borderRadius = '8px';
            vid.style.display = 'block';
            vid.style.marginTop = '4px';
            div.appendChild(vid);
         } else {
            const img = document.createElement('img');
            img.src = m.image;
            img.style.maxWidth = '320px';
            img.style.maxHeight = '240px';
            img.style.borderRadius = '8px';
            img.style.display = 'block';
            img.style.marginTop = '4px';
            div.appendChild(img);
         }
      }

      messagesDiv.appendChild(div);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
      }

      chatRef.on('child_added',snap=>appendMsg(snap.val()));
    }
  }
})();