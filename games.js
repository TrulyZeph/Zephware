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
                showChangelog(); // auto show changelog
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
        title.style.textShadow = '0 0 5px #07D5F9, 0 0 10px #07D5F9, 0 0 15px #07D5F9, 0 0 20px #07D5F9';

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

        // Dropdown Menu
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

        dropdownMenu.appendChild(settingsBtn);
        dropdownMenu.appendChild(changelogBtn);

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

        buttonConfigs.forEach(config => {
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
                createBlur();

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

    function showSettings() {
        if (settingsPanel) settingsPanel.remove();
        createBlur();

        settingsPanel = document.createElement('div');
        settingsPanel.style.width = '600px';
        settingsPanel.style.height = '400px';
        settingsPanel.style.overflowY = 'scroll';
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

        const title = document.createElement('div');
        title.innerText = 'Settings';
        title.style.textAlign = 'center';
        title.style.fontSize = '24px';
        title.style.fontWeight = 'bold';
        title.style.textShadow = '0 0 5px #0766FF, 0 0 10px #0766FF, 0 0 1px #0766FF, 0 0 2px #0766FF, 0 0 3px #0766FF';
        settingsPanel.appendChild(title);

        const content = document.createElement('div');
        content.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-weight: bold; font-size: 16px;">Misc</span>
                <button onclick="this.closest('div').parentNode.remove(); (${removeBlur.toString()})();" 
                        style="background: transparent; border: none; color: #07d5f9; font-size: 16px; cursor: pointer;">✕</button>
            </div>
            <div style="font-size: 14px; color: #0766FF;">Coming Soon!</div>
            <p><strong style="font-size: 16px;">Keybinds</strong></p>
            <p style="color: #0766FF;">Ctrl + E | Hide<br /><br />More Soon...</p>
            <p><strong style="font-size: 16px;">Credits</strong></p>
            <p style="color: #0766FF;">Owner: trulyzeph</p>
            <div style="font-size: 10px; margin-top: 20px;">Zephware 2025 | <span style="font-size: 0.75rem">v0.55</span></div>
        `;
        settingsPanel.appendChild(content);

        document.body.appendChild(settingsPanel);
    }

    function createChangelogPanel() {
        changelogPanel = document.createElement('div');
        changelogPanel.style.width = '600px';
        changelogPanel.style.height = '400px';
        changelogPanel.style.overflowY = 'scroll';
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

        const title = document.createElement('div');
        title.innerText = 'Changelog';
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
            changelogPanel.remove();
            removeBlur();
        };
        changelogPanel.appendChild(closeBtn);

        const content = document.createElement('div');
        content.style.marginTop = '20px';
        content.innerHTML = '<p style="color: #0766FF;">• Initial launch of Zephware panels<br>• Added scrollable settings<br>• Blur effect enabled<br>• Dropdown for settings/changelog</p>';
        changelogPanel.appendChild(content);
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
