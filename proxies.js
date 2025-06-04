(function () {
  if (!document.getElementById('fredoka-font-link')) {
    const link = document.createElement('link');
    link.id = 'fredoka-font-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka&display=swap';
    document.head.appendChild(link);
  }

  const dogeLinks = [
    "kahoot.albert.ixl.masteryconnect.104.243.38.142.backname.io",
    "renrendane.laviewddns.com"
  ];

  const spaceLinks = [
    "https://buy.wine-software.com/"
  ];

  const style = document.createElement('style');
  style.textContent = `
    .overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.75);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: sans-serif;
    }

    .overlay-box {
      background: rgba(17, 17, 17, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 32px;
      max-width: 520px;
      width: 90%;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      transform: scale(0.95);
      opacity: 1;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      font-family: 'Fredoka', sans-serif;
      color: #01AEFD;
      margin: 0;
      letter-spacing: -0.5px;
    }

    .overlay select, .overlay button {
      font-size: 1.2em;
      font-family: 'Fredoka', sans-serif;
      padding: 0.5em 1em;
      margin: 0.5em;
      margin-top: 0px;
      margin-left: 0px;
      border: none;
      border-radius: 10px;
    }

    .overlay select {
      background-color: #333;
      color: white;
    }

    .overlay button {
      background-color: #01AEFD;
      color: white;
      font-weight: bold;
      font-family: 'Fredoka', sans-serif;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const box = document.createElement('div');
  box.className = 'overlay-box';

  const header = document.createElement('div');
  header.className = 'header';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Select Unblocker';

  header.appendChild(title);

  const dropdown = document.createElement('select');
  const options = ['doge', 'Space'];
  options.forEach(name => {
    const option = document.createElement('option');
    option.value = name.toLowerCase();
    option.textContent = name;
    dropdown.appendChild(option);
  });

  const button = document.createElement('button');
  button.textContent = 'Go';

  button.onclick = () => {
    const selectedVal = dropdown.value;
    const links = selectedVal === 'doge' ? dogeLinks : spaceLinks;
    const selectedLink = links[Math.floor(Math.random() * links.length)];

    document.head.innerHTML = '';
    document.body.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';

    const iframe = document.createElement('iframe');
    iframe.src = selectedLink;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    iframe.allowFullscreen = true;

    document.body.appendChild(iframe);
  };

  box.appendChild(header);
  box.appendChild(dropdown);
  box.appendChild(button);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
})();
