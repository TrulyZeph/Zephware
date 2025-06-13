javascript:(function(){
  if (!document.getElementById('fredoka-font-link')) {
    const link = document.createElement('link');
    link.id = 'fredoka-font-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka&display=swap';
    document.head.appendChild(link);
  }

  const style = document.createElement('style');
  style.textContent = `
    ::selection{background-color: salmon; color: white;}

    .parallax > use{
      animation:move-forever 12s linear infinite;
    }
    .parallax > use:nth-child(1){animation-delay:-2s;}
    .parallax > use:nth-child(2){animation-delay:-2s; animation-duration:5s}
    .parallax > use:nth-child(3){animation-delay:-4s; animation-duration:3s}

    @keyframes move-forever{
      0%{transform: translate(-90px , 0%)}
      100%{transform: translate(85px , 0%)}
    }

    .editorial {
      display: block;
      width: 100%;
      height: 10em;
      max-height: 100vh;
      margin: 0;
      position: fixed;
      bottom: 10vh;
      left: 0;
      z-index: 10;
    }

    body {
      background-color: #234;
      margin: 0;    
      max-height: 100vh;
      overflow: hidden;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100vh;
    }

    .header {
      position: fixed;
      top: 4em;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 4em;
      font-weight: bold;
      font-family: 'Fredoka', sans-serif;
      background: linear-gradient(to bottom, #01AEFD, #015AFD);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      padding: 0.5em 0;
      user-select: none;
      z-index: 100;
    }
    
    .description {
      position: fixed;
      top: 19.5em;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 1.2em;
      color: #bbb;
      font-weight: 400;
      font-style: italic;
      font-family: 'Fredoka', sans-serif;
      user-select: none;
      z-index: 100;
    }

    .input-area {
      position: fixed;
      top: 26em;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      color: #000000;
      gap: 0.5em;
      z-index: 100;
    }

    .input-area .label-text {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.4em;
      color: #ddd;
      font-weight: 500;
      user-select: none;
      white-space: nowrap;
    }

    .input-area select {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.2em;
      font-weight: 500;
      color: #01AEFD;
      padding: 0.3em 0.6em;
      border: none;
      border-radius: 5px;
      outline: none;
      background-color:rgb(42, 42, 42);
      cursor: pointer;
      width: 180px;
    }

    .input-area button {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.2em;
      padding: 0.4em 1em;
      border: none;
      border-radius: 5px;
      background: linear-gradient(to bottom, #01AEFD, #015AFD);
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: none;
    }

    @media (max-width:50em){
      .description {
        font-size: 3vw;
      }
      .input-area .label-text {
        font-size: 5vw;
      }
      .header {
        font-size: 6vw;
      }
      .input-area select, .input-area button {
        font-size: 3.5vw;
        width: auto;
      }
    }
    #zw-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.75);
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #zw-overlay-box {
      background: rgba(17, 17, 17, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 32px;
      max-width: 520px;
      width: 90%;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      text-align: center;
    }
    #zw-overlay-box h1 {
      font-size: 24px;
      color: #01AEFD;
      margin-bottom: 16px;
    }
    #zw-overlay-box p {
      color: white;
      margin-bottom: 24px;
    }
    #zw-overlay-box button {
      font-size: 16px;
      font-family: 'Fredoka', sans-serif;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      background-color: #01AEFD;
      color: white;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const oldSVG = document.querySelector('svg.editorial');
  if(oldSVG) oldSVG.remove();
  const oldContent = document.querySelector('div.content');
  if(oldContent) oldContent.remove();
  const oldHeader = document.querySelector('div.header');
  if(oldHeader) oldHeader.remove();
  const oldDesc = document.querySelector('div.description');
  if(oldDesc) oldDesc.remove();
  const oldInputArea = document.querySelector('div.input-area');
  if(oldInputArea) oldInputArea.remove();

  const svgNS = "http://www.w3.org/2000/svg";
  const xlinkNS = "http://www.w3.org/1999/xlink";
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'editorial');
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('xmlns:xlink', xlinkNS);
  svg.setAttribute('viewBox', '0 24 150 28');
  svg.setAttribute('preserveAspectRatio', 'none');

  const defs = document.createElementNS(svgNS, 'defs');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('id', 'gentle-wave');
  path.setAttribute('d', `M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z`);
  defs.appendChild(path);
  svg.appendChild(defs);

  const g = document.createElementNS(svgNS, 'g');
  g.setAttribute('class', 'parallax');

  const colors = ['#63baff','#3ea7f7','#298ee0'];
  const ys = ['0','3','6'];
  for(let i=0; i<3; i++){
    const use = document.createElementNS(svgNS, 'use');
    use.setAttributeNS(xlinkNS, 'xlink:href', '#gentle-wave');
    use.setAttribute('x', '50');
    use.setAttribute('y', ys[i]);
    use.setAttribute('fill', colors[i]);
    g.appendChild(use);
  }
  svg.appendChild(g);
  document.body.appendChild(svg);

  const coverBox = document.createElement('div');
  coverBox.style.position = 'fixed';
  coverBox.style.left = '0';
  coverBox.style.right = '0';
  coverBox.style.bottom = '0';
  coverBox.style.height = '11vh';
  coverBox.style.backgroundColor = '#298ee0';
  coverBox.style.zIndex = '5';
  document.body.appendChild(coverBox);

  const content = document.createElement('div');
  content.className = 'content';
  document.body.appendChild(content);

  const header = document.createElement('div');
  header.className = 'header';
  header.textContent = 'Zephware';
  document.body.appendChild(header);

  const description = document.createElement('div');
  description.className = 'description';
  description.textContent = 'The Ultimate Bookmarklet';
  document.body.appendChild(description);

  const inputArea = document.createElement('div');
  inputArea.className = 'input-area';

  const labelText = document.createElement('div');
  labelText.className = 'label-text';
  labelText.textContent = 'I wish to access';
  inputArea.appendChild(labelText);

  const select = document.createElement('select');
  const options = ['Games', 'Unblockers', 'Soundboard', 'Learning Tools', 'Blooket Hacks', 'Gimkit Hacks'];
  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.toLowerCase();
    option.textContent = opt;
    select.appendChild(option);
  });
  inputArea.appendChild(select);

  const button = document.createElement('button');
  button.textContent = 'Go';
  inputArea.appendChild(button);

  const newsPages = [
  {
    title: "What's New?",
    desc: "v1.0.3",
    images: [
      { src: "https://wallpaperaccess.com/full/7225605.jpg", alt: "Update GIF" }
    ],
    changes: [
      { text: "Blooket Hacks Update!", desc: "More friendly for those whose keyboard doesn't work" },
      { text: "Added News Panel", desc: "This helps you know what was added and what's coming next" },
    ]
  },
  {
    title: "What'd I Miss?",
    desc: "v1.0.2",
    images: [
      { src: "https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/assets/updates/ZephwareBlooket.png", alt: "Previous Update" }
    ],
    changes: [
      { text: "Blooket Hacks Have Released!", desc: "" },
    ]
  },
  {
    title: "What's Next?",
    desc: "v1.0.4 : Releasing 1st Day of 25-26 School Year",
    images: [
      { src: "https://placehold.co/560x160/222/fff.png?text=Coming+Soon", alt: "Coming Soon" }
    ],
    changes: [
      { text: "More Games!", desc: "UI Rework, All Game Icons Fixed, More Games" },
      { text: "New Core: Learning Tools", desc: "IXL Hacks, AI, Study Helper, Marker Tool, Ect." },
      { text: "More & Fixed Unblockers", desc: "More Unblockers, Unblocked, Fast, Working" },
      { text: "Zephware Website", desc: "You can access Zephware via website" },
      { text: "Gimkit Hacks", desc: "Finally Released" },
      { text: "Student Library", desc: "???" }
    ]
  }
];

showNewsPanel();

function showNewsPanel() {
  let pageIdx = 0;
  let imgIdx = 0;

  const old = document.getElementById('zw-news-overlay');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'zw-news-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.75)';
  overlay.style.zIndex = '100000';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.fontFamily = "'Fredoka', sans-serif";

  const panel = document.createElement('div');
  panel.style.width = '600px';
  panel.style.height = '400px';
  panel.style.background = 'rgba(17,17,17,0.97)';
  panel.style.borderRadius = '24px';
  panel.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
  panel.style.display = 'flex';
  panel.style.flexDirection = 'column';
  panel.style.alignItems = 'center';
  panel.style.position = 'relative';
  panel.style.padding = '32px 24px 24px 24px';
  panel.style.textAlign = 'center';
  panel.style.overflow = 'hidden';

  const panelContent = document.createElement('div');
  panelContent.style.flex = '1';
  panelContent.style.overflowY = 'auto';
  panelContent.style.width = '100%';
  panelContent.style.display = 'flex';
  panelContent.style.flexDirection = 'column';
  panelContent.style.alignItems = 'center';
  panelContent.style.scrollbarWidth = 'none';
  panelContent.style.msOverflowStyle = 'none';
  panelContent.style.overflowX = 'hidden';
  panelContent.classList.add('zw-hide-scrollbar');

  const navRow = document.createElement('div');
  navRow.style.display = 'flex';
  navRow.style.alignItems = 'center';
  navRow.style.justifyContent = 'center';
  navRow.style.width = '100%';
  navRow.style.marginBottom = '12px';

  const leftArrow = document.createElement('span');
  leftArrow.textContent = '<';
  leftArrow.style.fontSize = '2em';
  leftArrow.style.cursor = 'pointer';
  leftArrow.style.userSelect = 'none';
  leftArrow.style.marginRight = '8px';
  leftArrow.style.color = '#01AEFD';
  leftArrow.title = 'Previous';

  const rightArrow = document.createElement('span');
  rightArrow.textContent = '>';
  rightArrow.style.fontSize = '2em';
  rightArrow.style.cursor = 'pointer';
  rightArrow.style.userSelect = 'none';
  rightArrow.style.marginLeft = '8px';
  rightArrow.style.color = '#01AEFD';
  rightArrow.title = 'Next';

  const title = document.createElement('span');
  title.style.fontSize = '2em';
  title.style.fontWeight = 'bold';
  title.style.color = '#01AEFD';
  title.style.fontFamily = "'Fredoka', sans-serif";
  navRow.appendChild(leftArrow);
  navRow.appendChild(title);
  navRow.appendChild(rightArrow);

  const pageDesc = document.createElement('div');
  pageDesc.style.fontSize = '1.05em';
  pageDesc.style.color = '#aaa';
  pageDesc.style.margin = '2px 0 10px 0';
  pageDesc.style.minHeight = '1.2em';
  pageDesc.style.fontFamily = "'Fredoka', sans-serif";

  const imgWrap = document.createElement('div');
  imgWrap.style.width = '100%';
  imgWrap.style.height = '240px';
  imgWrap.style.display = 'flex';
  imgWrap.style.justifyContent = 'center';
  imgWrap.style.alignItems = 'center';
  imgWrap.style.margin = '0 0 18px 0';
  imgWrap.style.borderRadius = '32px';
  imgWrap.style.position = 'relative';
  imgWrap.style.background = 'rgba(40,40,40,0.18)';
  imgWrap.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
  imgWrap.style.padding = '0';
  imgWrap.style.overflow = 'hidden';

  const img = document.createElement('img');
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.style.borderRadius = '32px';
  img.style.display = 'block';
  img.style.margin = '0';
  img.style.padding = '0';
  img.draggable = false;
  imgWrap.appendChild(img);

  let startX = null;
  imgWrap.addEventListener('touchstart', e => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
  });
  imgWrap.addEventListener('touchend', e => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const imgs = newsPages[pageIdx].images;
    if (endX - startX > 40) {
      imgIdx = (imgIdx - 1 + imgs.length) % imgs.length;
      render();
    } else if (startX - endX > 40) {
      imgIdx = (imgIdx + 1) % imgs.length;
      render();
    }
    startX = null;
  });

  let dragStartX = null;
  imgWrap.addEventListener('mousedown', e => {
    dragStartX = e.clientX;
    document.body.style.userSelect = 'none';
  });
  imgWrap.addEventListener('mouseup', e => {
    if (dragStartX === null) return;
    const dragEndX = e.clientX;
    const imgs = newsPages[pageIdx].images;
    if (dragEndX - dragStartX > 40) {
      imgIdx = (imgIdx - 1 + imgs.length) % imgs.length;
      render();
    } else if (dragStartX - dragEndX > 40) {
      imgIdx = (imgIdx + 1) % imgs.length;
      render();
    }
    dragStartX = null;
    document.body.style.userSelect = '';
  });

  const changesList = document.createElement('ul');
  changesList.style.listStyle = 'none';
  changesList.style.padding = '0';
  changesList.style.margin = '0';
  changesList.style.width = '100%';
  changesList.style.textAlign = 'left';
  changesList.style.marginTop = '18px';
  changesList.style.color = '#fff';
  changesList.style.fontSize = '1.18em';
  changesList.style.fontFamily = "'Fredoka', sans-serif";

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.title = 'Close';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '18px';
  closeBtn.style.right = '24px';
  closeBtn.style.background = '#e74c3c';
  closeBtn.style.color = '#fff';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '8px';
  closeBtn.style.fontSize = '20px';
  closeBtn.style.width = '36px';
  closeBtn.style.height = '36px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.zIndex = '2';

  closeBtn.onclick = () => {
    overlay.remove();
    document.body.appendChild(inputArea);
  };

  function render() {
    title.textContent = newsPages[pageIdx].title;
    if (newsPages[pageIdx].desc && newsPages[pageIdx].desc.trim()) {
      pageDesc.textContent = newsPages[pageIdx].desc;
      pageDesc.style.display = '';
    } else {
      pageDesc.textContent = '';
      pageDesc.style.display = 'none';
    }
    const imgs = newsPages[pageIdx].images;
    imgIdx = (imgIdx + imgs.length) % imgs.length;
    img.src = imgs[imgIdx].src;
    img.alt = imgs[imgIdx].alt || '';
    changesList.innerHTML = '';
    newsPages[pageIdx].changes.forEach(change => {
      const li = document.createElement('li');
      li.style.marginBottom = change.desc ? '10px' : '6px';
      li.style.display = 'flex';
      li.style.flexDirection = 'column';
      li.style.gap = '2px';

      const main = document.createElement('span');
      main.textContent = '• ' + change.text;
      main.style.fontWeight = '500';
      main.style.fontSize = '1.08em';
      main.style.color = '#fff';

      li.appendChild(main);

      if (change.desc && change.desc.trim()) {
        const desc = document.createElement('span');
        desc.textContent = change.desc;
        desc.style.fontSize = '0.95em';
        desc.style.color = '#aaa';
        desc.style.marginLeft = '18px';
        li.appendChild(desc);
      }
      changesList.appendChild(li);
    });
  }

  rightArrow.onclick = () => {
    pageIdx = (pageIdx - 1 + newsPages.length ) % newsPages.length;
    imgIdx = 0;
    render();
  };
  leftArrow.onclick = () => {
    pageIdx = (pageIdx + 1) % newsPages.length;
    imgIdx = 0;
    render();
  };

  overlay.tabIndex = 0;
  overlay.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') leftArrow.onclick();
    if (e.key === 'ArrowRight') rightArrow.onclick();
    if (e.key === 'Escape') overlay.remove();
  });

  panelContent.appendChild(navRow);
  panelContent.appendChild(pageDesc);
  panelContent.appendChild(imgWrap);
  panelContent.appendChild(changesList);
  panel.appendChild(panelContent);
  panel.appendChild(closeBtn);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  render();
  overlay.focus();
 }

  let lockedTabs = { 'blooket hacks': true };

  function showPasswordOverlay(onSuccess) {
    const old = document.getElementById('zw-overlay');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id = 'zw-overlay';
    overlay.style.zIndex = '99999';
    overlay.style.fontFamily = "'Fredoka', sans-serif";
    overlay.innerHTML = `
      <div id="zw-overlay-box" style="font-family:'Fredoka',sans-serif;">
        <h1>Password Required</h1>
        <p>Enter the password to access this section.</p>
        <input id="zw-password-input" type="password" placeholder="Password" style="font-size:16px;padding:8px 12px;border-radius:8px;border:1px solid #444;width:80%;margin-bottom:16px;outline:none;font-family:'Fredoka',sans-serif;" />
        <br>
        <button id="zw-password-submit" style="font-family:'Fredoka',sans-serif;">Submit</button>
        <div id="zw-password-error" style="color:#ff5555;margin-top:10px;display:none;">Incorrect password.</div>
      </div>
    `;
    document.body.appendChild(overlay);
    const input = overlay.querySelector('#zw-password-input');
    const submit = overlay.querySelector('#zw-password-submit');
    const error = overlay.querySelector('#zw-password-error');
    input.focus();
    function unlock() {
      if (input.value === "happysummer") {
        overlay.remove();
        onSuccess();
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
      }
    }
    submit.onclick = unlock;
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') unlock();
    });
  }

  function showInstructionsOverlay() {
    const old = document.getElementById('zw-overlay');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id = 'zw-overlay';
    overlay.style.zIndex = '99999';
    overlay.style.fontFamily = "'Fredoka', sans-serif";
    overlay.innerHTML = `
      <div id="zw-overlay-box" style="font-family:'Fredoka',sans-serif;">
        <h1>Instructions</h1>
        <ol id="zw-instructions-list" style="text-align:center;margin:0 0 24px 0;padding-left:0;font-size:16px;list-style-position:inside;color:#fff;">
          <li style="margin:8px 0;">Create a bookmark</li>
          <li style="margin:8px 0;">Click the "Copy" button below</li>
          <li style="margin:8px 0;">Do Cmd + C</li>
          <li style="margin:8px 0;">Set the code as the url for the bookmark</li>
          <li style="margin:8px 0;">Hit save</li>
          <li style="margin:8px 0;">Try it out!</li>
        </ol>
        <div style="display:flex;justify-content:center;gap:12px;align-items:center;">
          <button id="zw-highlight-btn" style="font-family:'Fredoka',sans-serif;min-width:80px;">Copy</button>
          <button id="zw-instructions-close" style="font-family:'Fredoka',sans-serif;min-width:80px;">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/blooket/min.js')
      .then(res => res.text())
      .then(code => {
        const pre = document.createElement('pre');
        pre.textContent = code;
        pre.style.position = 'fixed';
        pre.style.opacity = '0';
        pre.style.pointerEvents = 'none';
        pre.style.userSelect = 'text';
        pre.style.zIndex = '-1';
        pre.id = 'zw-invisible-code';
        document.body.appendChild(pre);

        overlay.querySelector('#zw-highlight-btn').onclick = () => {
          const range = document.createRange();
          range.selectNodeContents(pre);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        };
      });

    overlay.querySelector('#zw-instructions-close').onclick = () => {
      overlay.remove();
      const pre = document.getElementById('zw-invisible-code');
      if (pre) pre.remove();
    };
  }

  function setButtonStatus(status) {
    const gradientOpen = 'linear-gradient(to bottom, #01AEFD, #015AFD)';
    const gradientWIP = 'linear-gradient(to bottom, #002D62, #001B44)';
    switch (status.toLowerCase()) {
      case 'wip':
        button.textContent = 'WIP';
        button.disabled = true;
        button.style.background = gradientWIP;
        break;
      case 'locked':
        button.textContent = 'Go';
        button.disabled = false;
        button.style.background = gradientOpen;
        break;
      case 'open':
      default:
        button.textContent = 'Go';
        button.disabled = false;
        button.style.background = gradientOpen;
        break;
    }
  }

  button.addEventListener('click', () => {
    const val = select.value.toLowerCase();
    if (lockedTabs[val]) {
      showPasswordOverlay(() => showInstructionsOverlay());
      return;
    }
    if (val === 'games' || val === 'unblockers' || val === 'soundboard') {
      document.head.innerHTML = '';
      document.body.innerHTML = '';
      let file;
      if (val === 'games') file = 'games.js';
      else if (val === 'unblockers') file = 'proxies.js';
      else if (val === 'soundboard') file = 'library.js';
      fetch(`https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/${file}`)
        .then(response => response.text())
        .then(scriptContent => {
          const script = document.createElement('script');
          script.innerHTML = scriptContent;
          document.body.appendChild(script);
        })
        .catch(error => {
          console.error(`Failed to load ${file}.`, error);
          alert('Failed, Try Again.');
        });
    }
  });

  select.onchange = () => {
    const val = select.value.toLowerCase();
    if (lockedTabs[val]) {
      setButtonStatus('locked');
    } else if (val === 'gimkit hacks' || val === 'learning tools') {
      setButtonStatus('wip');
    } else {
      setButtonStatus('open');
    }
  };

  document.body.appendChild(inputArea);
})();

(function() {
  const style = document.createElement('style');
  style.textContent = `
    body, #zw-overlay, #zw-overlay *, .header, .description, .input-area, .input-area *, .content, .label-text, select, button {
      font-family: 'Fredoka', sans-serif !important;
    }
    #zw-overlay {
      z-index: 99999 !important;
      font-family: 'Fredoka', sans-serif !important;
    }
    #zw-overlay-box {
      font-family: 'Fredoka', sans-serif !important;
    }
    .zw-hide-scrollbar::-webkit-scrollbar { display: none; }
    .zw-hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;
  document.head.appendChild(style);
})();
