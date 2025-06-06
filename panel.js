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
  const options = ['Games', 'Unblockers', 'Soundboard', 'Blooket Hacks', 'Gimkit Hacks'];
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
      </div>
    `;
    document.body.appendChild(overlay);
    const input = overlay.querySelector('#zw-password-input');
    const submit = overlay.querySelector('#zw-password-submit');
    input.focus();
    function unlock() {
      overlay.remove();
      onSuccess();
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
          <li style="margin:8px 0;">Copy the code by clicking the copy button</li>
          <li style="margin:8px 0;">Set the code as the url for the bookmark</li>
          <li style="margin:8px 0;">Hit save</li>
          <li style="margin:8px 0;">Try it out!</li>
        </ol>
        <div style="display:flex;justify-content:center;gap:12px;align-items:center;">
          <button id="zw-copy-btn" style="font-family:'Fredoka',sans-serif;min-width:80px;">Copy</button>
          <button id="zw-instructions-close" style="font-family:'Fredoka',sans-serif;min-width:80px;">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    const copyBtn = overlay.querySelector('#zw-copy-btn');
    copyBtn.onclick = async () => {
      const originalText = copyBtn.textContent;
      try {
        const resp = await fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/blooket/blooket.js');
        const text = await resp.text();
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = originalText; }, 3000);
      } catch (e) {
        copyBtn.textContent = 'Failed!';
        setTimeout(() => { copyBtn.textContent = originalText; }, 3000);
      }
    };
    overlay.querySelector('#zw-instructions-close').onclick = () => overlay.remove();
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
    } else if (val === 'blooket hacks' || val === 'gimkit hacks') {
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
  `;
  document.head.appendChild(style);
})();
