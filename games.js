javascript:(function () {
    let iframe = null;
    let panel = null;
    let blurLayer = null;
    let settingsPanel = null;
    let changelogPanel = null;
    let buttonConfigs = [];

    function loadGameList() {
        fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/main/gamelist.json')
            .then(response => response.json())
            .then(data => {
                buttonConfigs = data;
                createPanel();
                createChangelogPanel();
                showChangelog();
            })
            .catch(error => {
                console.error('Error loading game list:', error);
                alert('Failed to load the game list.');
            });
    }

    function createTitleBar() {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.position = 'absolute';
        container.style.top = '20px';
        container.style.marginLeft = '-20px';
        container.style.width = '100%';
  
        const title = document.createElement('div');
        title.innerText = 'Zephware';
        title.style.padding = '5px 65px';
        title.style.background = '#017AD5';
        title.style.borderRadius = '10px';
        title.style.boxShadow = '0 0 25px #038FF9';
        title.style.fontFamily = 'Verdana';
        title.style.fontWeight = 'bold';
        title.style.color = '#07D5F9';
        title.style.fontSize = '24px';
        title.style.textAlign = 'center';
        title.style.textShadow = '0 0 5px #07D5F9, 0 0 10px #07D5F9, 0 0 1px #07D5F9, 0 0 2px #07D5F9, 0 0 3px #07D5F9';
  
        container.appendChild(title);
        return container;
     }    

    function createPanel() {
        panel = document.createElement('div');
        panel.style.width = '600px';
        panel.style.height = '400px';
        panel.style.overflowY = 'scroll';
        panel.style.borderRadius = '20px';
        panel.style.boxShadow = '0 0 20px #0766FF';
        panel.style.zIndex = 9999;
        panel.style.position = 'fixed';
        panel.style.top = '50%';
        panel.style.left = '50%';
        panel.style.transform = 'translate(-50%, -50%)';
        panel.style.background = 'linear-gradient(135deg, #2C2A2A, #171212)';
        panel.style.fontFamily = 'Verdana, sans-serif';
        panel.style.color = '#07D5F9';
        panel.style.padding = '20px';
        panel.className = 'custom-scroll-panel';

        const style = document.createElement('style');
        style.textContent = `
            .custom-scroll-panel {
                scrollbar-width: none;
                -ms-overflow-style: none;
            }
            .custom-scroll-panel::-webkit-scrollbar {
                display: none;
            }
        `;
        document.head.appendChild(style);

        const titleBar = createTitleBar();
        panel.appendChild(titleBar);

        const searchBar = document.createElement('input');
        searchBar.type = 'text';
        searchBar.placeholder = 'Search';
        searchBar.style.width = '70%';
        searchBar.style.marginTop = '55px';
        searchBar.style.marginBottom = '-50px';
        searchBar.style.padding = '10px';
        searchBar.style.borderRadius = '10px';
        searchBar.style.border = 'none';
        searchBar.style.fontSize = '14px';
        searchBar.style.boxShadow = '0 0 10px #0766FF';
        searchBar.style.outline = 'none';
        searchBar.style.background = '#111';
        searchBar.style.color = '#07D5F9';
        searchBar.style.display = 'block';
        searchBar.style.marginLeft = 'auto';
        searchBar.style.marginRight = 'auto';

        searchBar.addEventListener('input', () => {
            const query = searchBar.value.toLowerCase();
            filteredConfigs = buttonConfigs.filter(config =>
               config.label && config.label.toLowerCase().includes(query)
            );
            renderButtons(filteredConfigs);
         });
         

        panel.appendChild(searchBar);


        const dropdownBtn = document.createElement('button');
        dropdownBtn.innerText = '☰';
        dropdownBtn.style.position = 'absolute';
        dropdownBtn.style.top = '25px';
        dropdownBtn.style.right = '30px';
        dropdownBtn.style.fontSize = '20px';
        dropdownBtn.style.background = 'transparent';
        dropdownBtn.style.border = 'none';
        dropdownBtn.style.cursor = 'pointer';
        dropdownBtn.style.color = '#0766FF';
        dropdownBtn.style.textShadow = '0 0 5px #0766FF, 0 0 10px #0766FF, 0 0 1px #0766FF, 0 0 2px #0766FF, 0 0 3px #0766FF';

        const dropdownMenu = document.createElement('div');
        dropdownMenu.style.position = 'absolute';
        dropdownMenu.style.top = '50px';
        dropdownMenu.style.right = '30px';
        dropdownMenu.style.background = '#1a1a1a';
        dropdownMenu.style.border = '1px solid #0766FF';
        dropdownMenu.style.borderRadius = '8px';
        dropdownMenu.style.padding = '5px';
        dropdownMenu.style.display = 'none';
        dropdownMenu.style.flexDirection = 'column';
        dropdownMenu.style.boxShadow = '0 0 10px #0766FF';

        const settingsBtn = document.createElement('button');
        settingsBtn.innerText = 'Settings';
        settingsBtn.style.background = 'transparent';
        settingsBtn.style.color = '#0766FF';
        settingsBtn.style.border = 'none';
        settingsBtn.style.fontSize = '14px';
        settingsBtn.style.cursor = 'pointer';
        settingsBtn.onclick = () => {
            showSettings();
            dropdownMenu.style.display = 'none';
        };

        const changelogBtn = document.createElement('button');
        changelogBtn.innerText = 'Changelog';
        changelogBtn.style.background = 'transparent';
        changelogBtn.style.color = '#0766FF';
        changelogBtn.style.border = 'none';
        changelogBtn.style.fontSize = '14px';
        changelogBtn.style.cursor = 'pointer';
        changelogBtn.onclick = () => {
            showChangelog();
            dropdownMenu.style.display = 'none';
        };
        dropdownMenu.appendChild(changelogBtn);
        dropdownMenu.appendChild(settingsBtn);

        dropdownBtn.onclick = () => {
            dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'flex' : 'none';
        };

        panel.appendChild(dropdownBtn);
        panel.appendChild(dropdownMenu);
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'space-around';
        container.style.alignItems = 'center';
        container.style.gap = '20px';
        container.style.marginTop = '60px';
        
        let filteredConfigs = buttonConfigs.slice();
        renderButtons(filteredConfigs);

        function renderButtons(configs) {
           container.innerHTML = '';
           configs.forEach(config => {
              const button = document.createElement('button');
              button.style.width = '80px';
              button.style.height = '100px';
              button.style.fontSize = '16px';
              button.style.background = 'linear-gradient(45deg, #038FF9, #00C5FF)';
              button.style.color = '#07D5F9';
              button.style.border = 'none';
              button.style.borderRadius = '15px';
              button.style.cursor = 'pointer';
              button.style.padding = '0';
              button.style.display = 'flex';
              button.style.flexDirection = 'column';
              button.style.alignItems = 'center';
              button.style.justifyContent = 'flex-start';
     
              const img = document.createElement('img');
              img.src = config.image;
              img.style.width = '80px';
              img.style.height = '80px';
              img.style.borderTopLeftRadius = '15px';
              img.style.borderTopRightRadius = '15px';
              button.appendChild(img);
     
              const label = document.createElement('div');
              label.innerText = config.label || '';
              label.style.fontSize = '10px';
              label.style.color = '#FFFFFF';
              label.style.textAlign = 'center';
              label.style.padding = '2px 4px';
              label.style.width = '100%';
              label.style.background = 'rgba(0, 0, 0, 0.4)';
              label.style.borderBottomLeftRadius = '15px';
              label.style.borderBottomRightRadius = '15px';
              button.appendChild(label);
     
              button.addEventListener('click', () => {
                 panel.remove();
                 dropdownMenu.remove();
     
                 iframe = document.createElement('iframe');
                 iframe.src = config.url;
                 iframe.style.width = '1050px';
                 iframe.style.height = '700px';
                 iframe.style.border = 'none';
                 iframe.style.borderRadius = '15px';
                 iframe.style.display = 'block';
                 iframe.style.margin = '20px auto';
                 iframe.style.boxShadow = '0 0 20px #038FF9';
                 document.body.appendChild(iframe);
              });
     
              container.appendChild(button);
           });
        }     

        panel.appendChild(container);
        document.body.appendChild(panel);
    }

    function createBlur() {
        if (!blurLayer) {
            blurLayer = document.createElement('div');
            blurLayer.style.position = 'fixed';
            blurLayer.style.top = 0;
            blurLayer.style.left = 0;
            blurLayer.style.width = '100vw';
            blurLayer.style.height = '100vh';
            blurLayer.style.backdropFilter = 'blur(5px)';
            blurLayer.style.zIndex = 9998;
            document.body.appendChild(blurLayer);
        }
    }

    function removeBlur() {
        if (blurLayer) {
            blurLayer.remove();
            blurLayer = null;
        }
    }

    function createSettingsPanel() {
        settingsPanel = document.createElement('div');
        settingsPanel.style.width = '300px';
        settingsPanel.style.height = '350px';
        settingsPanel.style.overflowY = 'scroll';
        settingsPanel.style.overflow = 'auto';
        settingsPanel.style.borderRadius = '20px';
        settingsPanel.style.boxShadow = '0 0 20px #0766FF';
        settingsPanel.style.position = 'fixed';
        settingsPanel.style.top = '50%';
        settingsPanel.style.left = '50%';
        settingsPanel.style.transform = 'translate(-50%, -50%)';
        settingsPanel.style.background = 'linear-gradient(135deg, #2C2A2A, #171212)';
        settingsPanel.style.fontFamily = 'Verdana, sans-serif';
        settingsPanel.style.color = '#0766FF';
        settingsPanel.style.padding = '20px';
        settingsPanel.style.zIndex = 10000;
        settingsPanel.className = 'custom-scroll-panel';

        const closeBtn = document.createElement('button');
        closeBtn.innerText = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '15px';
        closeBtn.style.background = 'transparent';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#0766FF';
        closeBtn.style.fontSize = '16px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => {
            settingsPanel.remove();
            removeBlur();
        };
        settingsPanel.appendChild(closeBtn);

        const title = document.createElement('div');
        title.innerText = 'Settings';
        title.style.textAlign = 'center';
        title.style.fontSize = '24px';
        title.style.fontWeight = 'bold';
        title.style.textShadow = '0 0 5px #0766FF, 0 0 10px #0766FF, 0 0 1px #0766FF, 0 0 2px #0766FF, 0 0 3px #0766FF';
        settingsPanel.appendChild(title);

        const content = document.createElement('div');
        content.innerHTML = `
  <h3>Misc</h3>
  <p style="color: #0766FF;">Coming Soon!</p>
  <h3>Keybinds</h3>
  <p style="color: #0766FF;">Ctrl + E | Hide<br>More Soon...</p>
  <h3>Credits</h3>
  <p style="color: #0766FF;">Owner: trulyzeph</p>
  <div style="text-align: center; font-size: 10px; margin-top: 60px;">
    Zephware 2025 | <span style="font-size: 0.75rem;">v0.6</span>
  </div>
`;

        settingsPanel.appendChild(content);

        document.body.appendChild(settingsPanel);
    }

    function createChangelogPanel() {
        changelogPanel = document.createElement('div');
        changelogPanel.style.width = '300px';
        changelogPanel.style.height = '350px';
        changelogPanel.style.overflowY = 'scroll';
        changelogPanel.style.overflow = 'auto';
        changelogPanel.style.borderRadius = '20px';
        changelogPanel.style.boxShadow = '0 0 20px #0766FF';
        changelogPanel.style.position = 'fixed';
        changelogPanel.style.top = '50%';
        changelogPanel.style.left = '50%';
        changelogPanel.style.transform = 'translate(-50%, -50%)';
        changelogPanel.style.background = 'linear-gradient(135deg, #2C2A2A, #171212)';
        changelogPanel.style.fontFamily = 'Verdana, sans-serif';
        changelogPanel.style.color = '#0766FF';
        changelogPanel.style.padding = '20px';
        changelogPanel.style.zIndex = 10000;
        changelogPanel.className = 'custom-scroll-panel';

        const title = document.createElement('div');
        title.innerText = 'Change Log';
        title.style.textAlign = 'center';
        title.style.fontSize = '24px';
        title.style.fontWeight = 'bold';
        title.style.textShadow = '0 0 5px #0766FF, 0 0 10px #0766FF, 0 0 1px #0766FF, 0 0 2px #0766FF, 0 0 3px #0766FF';
        changelogPanel.appendChild(title);

        const closeBtn = document.createElement('button');
        closeBtn.innerText = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '15px';
        closeBtn.style.background = 'transparent';
        closeBtn.style.border = 'none';
        closeBtn.style.color = '#0766FF';
        closeBtn.style.fontSize = '16px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => {
            changelogPanel.remove()
            removeBlur();
        };
        changelogPanel.appendChild(closeBtn);

        const content = document.createElement('div');
        content.style.marginTop = '20px';
        content.innerHTML = `
  <div style="color: #0766FF;">
    <h3 style="text-decoration: underline; font-size: 18px;">4/10/25 | Version 0.6 Beta</h3>
    <ul style="margin-left: -15px;">
      <li>Added Change Log Panel</li>
      <li>Added Settings Panel</li>
      <li>Added Search Bar</li>
      <li>Dropdown for settings/changelog</li>
      <li>Slight UI Tweak </li>
      <li>Added Version Counter</li>
      <li>Added more game images</li>
    </ul>
    
    <h3 style="text-decoration: underline; font-size: 18px;">Next Update: v0.7 Beta</h3>
    <ul style="margin-left: -15px;">
      <li>Hide Panel in Menu</li>
      <li>Close Panel in Menu</li>
    </ul>

    <h3 style="text-decoration: underline; font-size: 18px;">Upcoming: (Version 1)</h3>
    <h4 style="margin-top: -10px;">Official Release!</h4>
    <ul style="margin-left: -15px;">
      <li>All game images added</li>
      <li>All game names fixed</li>
      <li>and more!</li>
    </ul>

    <h3 style="text-decoration: underline; font-size: 18px;">Upcoming: v1.1</h3>
    <ul style="margin-left: -15px;">
      <li>GUI Update</li>
    </ul>
  </div>
`;

        changelogPanel.appendChild(content);
    }
    function showSettings() {
        if (changelogPanel) changelogPanel.remove();
        createSettingsPanel();
        createBlur();
        document.body.appendChild(settingsPanel);
    }
    function showChangelog() {
        if (changelogPanel) changelogPanel.remove();
        createChangelogPanel();
        createBlur();
        document.body.appendChild(changelogPanel);
    }

    function toggleFrames(event) {
        if (event.key === 'e' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
            if (iframe) iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
        }
    }

    document.addEventListener('keydown', toggleFrames);
    loadGameList();
})();
