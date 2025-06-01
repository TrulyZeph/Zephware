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
      top: 19.5em;  /* a bit below the header */
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
      top: 26em;  /* below desc */
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
      box-shadow: 0 0 5pxrgba(0, 0, 0, 0.6);
      background-color:rgb(42, 42, 42); /* changed to gray */
      cursor: pointer;
      width: 180px; /* made shorter */
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
      box-shadow: 0 0 10px #01AEFD99;
      transition: none; /* removed hover effect */
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
        width: auto; /* let it scale on small screens */
      }
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
  coverBox.style.height = '10vh';
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
  const options = ['Games', 'Unblockers', 'Blooket Hacks (WIP)', 'Gimkit Hacks (WIP)'];
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

button.addEventListener('click', () => {
  if (select.value.toLowerCase() === 'games') {
    document.head.innerHTML = '';
    document.body.innerHTML = '';

    fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/games.js')
      .then(response => response.text())
      .then(scriptContent => {
        const script = document.createElement('script');
        script.innerHTML = scriptContent;
        document.body.appendChild(script);
      })
      .catch(error => {
        console.error('Failed to load Games.', error);
        alert('Failed, Try Again.');
      });
  }
});
    select.onchange = () => {
        if (select.value === 'blooket hacks (wip)') {
        button.textContent = 'WIP';
        button.disabled = true;
        } else if (select.value === 'gimkit hacks (wip)') {
        button.textContent = 'WIP';
        button.disabled = true;
        } else {
        button.textContent = 'Go';
        button.disabled = false;
        }
    };

  document.body.appendChild(inputArea);
})();
