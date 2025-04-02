javascript:(function() {
  let iframe = null;
  let panel = null;
  let buttonConfigs = [];

  function loadGameList() {
      fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/main/gamelist.json')
          .then(response => response.json())
          .then(data => {
              buttonConfigs = data;
              createPanel();
          })
          .catch(error => {
              console.error('Error loading game list:', error);
              alert('Failed to load the game list.');
          });
  }

  function createTitleBar() {
      var titleBarContainer = document.createElement('div');
      titleBarContainer.style.display = 'flex';
      titleBarContainer.style.justifyContent = 'center';
      titleBarContainer.style.alignItems = 'center';
      titleBarContainer.style.position = 'absolute';
      titleBarContainer.style.top = '20px';
      titleBarContainer.style.marginLeft = '-20px';
      titleBarContainer.style.width = '100%';

      var titleBar = document.createElement('div');
      titleBar.style.padding = '5px 65px';
      titleBar.style.background = '#017AD5';
      titleBar.style.borderRadius = '10px';
      titleBar.style.boxShadow = '0 0 25px #038FF9';
      titleBar.style.fontFamily = 'Verdana';
      titleBar.style.fontWeight = 'bold';
      titleBar.style.color = '#07D5F9';
      titleBar.style.fontSize = '24px';
      titleBar.style.textShadow = '0 0 5px #07D5F9, 0 0 10px #07D5F9, 0 0 15px #07D5F9, 0 0 20px #07D5F9';
      titleBar.innerText = 'Zephware';

      titleBarContainer.appendChild(titleBar);
      return titleBarContainer;
  }

  function createPanel() {
      const panelElement = document.createElement('div');
      panelElement.style.width = '600px';
      panelElement.style.height = '400px';
      panelElement.style.overflowY = 'scroll';
      panelElement.style.overflow = 'hidden';
      panelElement.style.borderRadius = '20px';
      panelElement.style.boxShadow = '0 0 20px #0766FF';
      panelElement.style.zIndex = 9999;
      panelElement.style.position = 'fixed';
      panelElement.style.top = '50%';
      panelElement.style.left = '50%';
      panelElement.style.transform = 'translate(-50%, -50%)';
      panelElement.style.background = 'linear-gradient(135deg, #2C2A2A, #171212)';
      panelElement.style.fontFamily = 'Verdana, sans-serif';
      panelElement.style.color = '#07D5F9';
      panelElement.style.padding = '20px';

      const titleBar = createTitleBar();
      panelElement.appendChild(titleBar);

      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
      container.style.justifyContent = 'space-around';
      container.style.alignItems = 'center';
      container.style.gap = '20px';
      container.style.marginTop = '60px';

      buttonConfigs.forEach(config => {
          const button = document.createElement('button');
          button.style.width = '80px';
          button.style.height = '80px';
          button.style.fontSize = '16px';
          button.style.background = 'linear-gradient(45deg, #038FF9, #00C5FF)';
          button.style.color = '#07D5F9';
          button.style.border = 'none';
          button.style.borderRadius = '15px';
          button.style.cursor = 'pointer';
          button.style.padding = '0';

          const img = document.createElement('img');
          img.src = config.image;
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.borderRadius = '15px';
          button.appendChild(img);

          button.addEventListener('click', function() {
              panelElement.remove();

              iframe = document.createElement('iframe');
              iframe.src = config.url;
              iframe.style.width = '1000px';
              iframe.style.height = '600px';
              iframe.style.border = 'none';
              iframe.style.borderRadius = '15px';
              iframe.style.display = 'block';
              iframe.style.margin = '20px auto';
              iframe.style.boxShadow = '0 0 20px #038FF9';
              document.body.appendChild(iframe);
          });

          container.appendChild(button);
      });

      panelElement.appendChild(container);
      document.body.appendChild(panelElement);

      return panelElement;
  }

  loadGameList();

  function toggleFrames(event) {
      if (event.key === 'e' && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();

          if (panel) {
              panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
          }

          if (iframe) {
              iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
          }
      }
  }

  document.addEventListener('keydown', toggleFrames);
})();
