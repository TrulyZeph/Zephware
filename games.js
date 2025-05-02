javascript:(function () {
    let iframe = null;
    let panel = null;
    let blurLayer = null;
    let settingsPanel = null;
    let changelogPanel = null;
    let buttonConfigs = [];
    const version = 'v0.7';
    createChangelogPanel();

    function loadGameList() {
        fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/gamelist.json')
            .then(response => response.json())
            .then(data => {
                buttonConfigs = data;
                createPanel();
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
        title.innerHTML = `Zephware <sup style="font-size: 0.75rem">${version}</sup>`;
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
        panel.style.zIndex = 1;
        panel.style.position = 'fixed';
        panel.style.top = '50%';
        panel.style.left = '50%';
        panel.style.transform = 'translate(-50%, -50%)';
        panel.style.background = 'linear-gradient(135deg, #2C2A2A, #171212)';
        panel.style.fontFamily = 'Verdana, sans-serif';
        panel.style.color = '#07D5F9';
        panel.style.padding = '20px';
        panel.className = 'custom-scroll-panel';
        panel.id = 'panel';

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
        dropdownBtn.style.top = '15px';
        dropdownBtn.style.right = '15px';
        dropdownBtn.style.fontSize = '30px';
        dropdownBtn.style.background = 'transparent';
        dropdownBtn.style.border = 'none';
        dropdownBtn.style.cursor = 'pointer';
        dropdownBtn.style.color = '#0766FF';
        dropdownBtn.style.textShadow = '0 0 5px #0766FF, 0 0 10px #0766FF, 0 0 1px #0766FF, 0 0 2px #0766FF, 0 0 3px #0766FF';

        const dropdownMenu = document.createElement('div');
        dropdownMenu.style.position = 'absolute';
        dropdownMenu.style.top = '50px';
        dropdownMenu.style.right = '10px';
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

        const hideBtn = document.createElement('button');
        hideBtn.innerText = 'Hide';
        hideBtn.style.background = 'transparent';
        hideBtn.style.color = '#0766FF';
        hideBtn.style.border = 'none';
        hideBtn.style.fontSize = '14px';
        hideBtn.style.cursor = 'pointer';
        hideBtn.onclick = () => {
            if (panel) panel.style.display = 'none';
            if (iframe) iframe.style.display = 'none';
            dropdownMenu.style.display = 'none';
            dropdownBtn.style.display = 'none';
        };

        const closeBtn = document.createElement('button');
        closeBtn.innerText = 'Close';
        closeBtn.style.background = 'transparent';
        closeBtn.style.color = '#ff0000';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '14px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => {
            panel?.remove();
            iframe?.remove();
            changelogPanel?.remove();
            settingsPanel?.remove();
            dropdownMenu?.remove();
            removeBlur();
        };
        const homeBtn = document.createElement('button');
        homeBtn.innerText = 'Home';
        homeBtn.style.background = 'transparent';
        homeBtn.style.color = '#0766FF';
        homeBtn.style.border = 'none';
        homeBtn.style.fontSize = '14px';
        homeBtn.style.cursor = 'pointer';
        homeBtn.style.textAlign = 'center';
        homeBtn.onclick = () => {
            if (document.getElementById('panel') == null) {
                createPanel();
                iframe?.remove();
                dropdownMenu?.remove();
                dropdownBtn?.remove();
            }
         };

        dropdownMenu.appendChild(homeBtn);
        dropdownMenu.appendChild(changelogBtn);
        dropdownMenu.appendChild(settingsBtn);
        dropdownMenu.appendChild(hideBtn);
        dropdownMenu.appendChild(closeBtn);

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
                 document.body.appendChild(dropdownBtn);
                 document.body.appendChild(dropdownMenu);
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
            blurLayer.style.zIndex = 3;
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
        settingsPanel.style.zIndex = 5;
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
        Zephware 2025 | <span style="font-size: 0.75rem;">${version}</span>
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
        changelogPanel.style.zIndex = 5;
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
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => {
            changelogPanel.remove()
            removeBlur();
        };

        changelogPanel.appendChild(closeBtn);

        const content = document.createElement('div');
        content.style.marginTop = '20px';
        content.innerHTML = `
  <div id="changelog-container"">
  </div>
`;
        fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/data/updates.json')
          .then(response => response.json())
          .then(data => renderChangelog(data))
          .catch(error => console.error('Error fetching changelog data:', error));
      
        function renderChangelog(data) {
          const changelogContainer = document.getElementById('changelog-container');
      
          data.forEach(update => {
            const updateDiv = document.createElement('div');
            updateDiv.classList.add('update-entry');
      
            const title = document.createElement('h3');
            title.style.textDecoration = 'underline';
            title.style.fontSize = '18px';
            title.textContent = update.title;
            title.style.textAlign = 'center';
      
            const version = document.createElement('h5');
            version.style.marginTop = '-10px';
            version.textContent = `${update.version}: ${update.date}`;
            version.style.textAlign = 'center';
      
            const changeList = document.createElement('ul');
            changeList.style.marginLeft = '-15px';
            changeList.style.marginTop = '-15px';
      
            update.changes.forEach(change => {
              const listItem = document.createElement('li');
              listItem.textContent = change;
              changeList.appendChild(listItem);
            });
      
            updateDiv.appendChild(title);
            updateDiv.appendChild(version);
            updateDiv.appendChild(changeList);
      
            changelogContainer.appendChild(updateDiv);
          });
        }

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
