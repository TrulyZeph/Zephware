javascript:(function () {
    let iframe = null;
    let panel = null;
    let blurLayer = null;
    let settingsPanel = null;
    let changelogPanel = null;
    let dropdownMenu = null;
    let sidebar = null;
    let buttonConfigs = [];
    let animatedStyleSheet;
    let area;
    const version = 'v1.15';
    createChangelogPanel();

    function loadGameList() {
        fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/gamelist.json')
            .then(response => response.json())
            .then(data => {
                buttonConfigs = data;
                createPanel();
                showChangelog();
                createDropdownMenu();
            })
            .catch(error => {
                console.error('Error loading game list:', error);
                alert('Error, Try Again.');
            });
    }

    const toggle = document.createElement('style');
    toggle.innerHTML = `
	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 24px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #444;
		transition: .4s;
		border-radius: 24px;
		box-shadow: 0 0 5px #0766FF;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 18px;
		width: 18px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		transition: .4s;
		border-radius: 50%;
	}

	.switch input:checked + .slider {
		background-color: #0766FF;
	}

	.switch input:checked + .slider:before {
		transform: translateX(26px);
	}
`;

    const sidebarStyle = document.createElement('style');
    sidebarStyle.innerHTML = `
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 30%;
		max-width: 300px;
		background: linear-gradient(145deg, #001F3F, #000F20);
		border-right: 2px solid #0766FF;
		box-shadow: 0 0 20px #0766FF;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: transform 0.4s ease;
		z-index: 10;
	}

	.sidebar-visible {
		transform: translateX(0);
	}

	.sidebar-hidden {
		transform: translateX(-100%);
	}

	.sidebar-btn {
		background: transparent;
		font-family: Verdana, sans-serif;
		font-weight: bold;
		color: #0766FF;
		border: none;
		font-size: 28px;
		cursor: pointer;
		margin: 8px 0;
	}

	.sidebar-divider {
		height: 2px;
		width: 80%;
		margin: 10px auto;
		background: linear-gradient(to right, rgba(7, 102, 255, 0.2) 0%, rgba(7, 102, 255, 1) 50%, rgba(7, 102, 255, 0.2) 100%);
		background-size: 200% 100%;
		background-position: 0% 50%;
		animation: glowFlow 3s linear infinite;
	}

	@keyframes glowFlow {
		0% { background-position: 0% 50%; }
		100% { background-position: 100% 50%; }
	}
`;
document.head.appendChild(sidebarStyle);

var fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css?family=Exo:400,700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const fontStyle = document.createElement("style");
fontStyle.type = "text/css";
fontStyle.innerText = `
   * {
      font-family: 'Exo', sans-serif;
      font-weight: 700;
   }
`;
document.head.appendChild(fontStyle);
document.head.appendChild(toggle);

function enableAnimatedBackground() {

	animatedStyleSheet = document.createElement("style");
	animatedStyleSheet.type = "text/css";
	animatedStyleSheet.innerText = `
		.area {
			background: linear-gradient(135deg, #2C2A2A, #171212);
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: -1;
		}
		.circles {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.circles li {
			position: absolute;
			display: block;
			list-style: none;
			width: 20px;
			height: 20px;
			background: rgba(2, 112, 255, 0.2);
			animation: animate 25s linear infinite;
			bottom: -150px;
		}
		.circles li:nth-child(1) { left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
		.circles li:nth-child(2) { left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; }
		.circles li:nth-child(3) { left: 70%; width: 20px; height: 20px; animation-delay: 4s; }
		.circles li:nth-child(4) { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
		.circles li:nth-child(5) { left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
		.circles li:nth-child(6) { left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
		.circles li:nth-child(7) { left: 35%; width: 150px; height: 150px; animation-delay: 7s; }
		.circles li:nth-child(8) { left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; }
		.circles li:nth-child(9) { left: 20%; width: 15px; height: 15px; animation-delay: 2s; animation-duration: 35s; }
		.circles li:nth-child(10) { left: 85%; width: 150px; height: 150px; animation-delay: 0s; animation-duration: 11s; }

		@keyframes animate {
			0% {
				transform: translateY(0) rotate(0deg);
				opacity: 1;
				border-radius: 0;
			}
			100% {
				transform: translateY(-1000px) rotate(720deg);
				opacity: 0;
				border-radius: 50%;
			}
		}
	`;
	document.head.appendChild(animatedStyleSheet);

	area = document.createElement('div');
	area.className = 'area';

	const circles = document.createElement('ul');
	circles.className = 'circles';

	for (let i = 0; i < 10; i++) {
		const li = document.createElement('li');
		circles.appendChild(li);
	}

	area.appendChild(circles);
	document.body.appendChild(area);
}

function disableAnimatedBackground() {
	if (animatedStyleSheet) {
		animatedStyleSheet.remove();
		animatedStyleSheet = null;
	}
	if (area) {
		area.remove();
		area = null;
	}
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
        if (!sidebar) createSidebar();
        panel.appendChild(sidebar);
        toggleSidebar();

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
        dropdownBtn.style.left = '15px';
        dropdownBtn.style.fontSize = '30px';
        dropdownBtn.style.background = 'transparent';
        dropdownBtn.style.border = 'none';
        dropdownBtn.style.cursor = 'pointer';
        dropdownBtn.style.color = '#0766FF';
        dropdownBtn.style.textShadow = '0 0 5px #0766FF, 0 0 10px #0766FF, 0 0 1px #0766FF, 0 0 2px #0766FF, 0 0 3px #0766FF';
        dropdownBtn.id = 'dropdownbtn';

        dropdownBtn.onclick = () => {
	        if (!sidebar) {
		        createSidebar();
	        } else {
		        const isHidden = sidebar.classList.contains('sidebar-hidden');
		        toggleSidebar(isHidden);
	        }
        };

        panel.appendChild(dropdownBtn);
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
     
                 iframe = document.createElement('iframe');
                 iframe.src = config.url;
                 iframe.style.width = '1050px';
                 iframe.style.height = '700px';
                 iframe.style.border = 'none';
                 iframe.style.borderRadius = '15px';
                 iframe.style.display = 'block';
                 iframe.style.margin = '20px auto';
                 iframe.style.boxShadow = '0 0 20px #038FF9';
                 iframe.style.zIndex = 2;
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
            blurLayer.style.zIndex = '3';
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
        <div id="misc-section"></div>
        <h3>Keybinds</h3>
        <p style="color: #0766FF;">Ctrl + E | Hide<br>Ctrl + M | Menu<br>More Soon...</p>
        <h3>Credits</h3>
        <p style="color: #0766FF;">Owner: trulyzeph</p>
        <div style="text-align: center; font-size: 10px; margin-top: 60px;">
        Zephware 2025 | <span style="font-size: 0.75rem;">${version}</span>
        </div>
`;

        settingsPanel.appendChild(content);
        const miscSection = content.querySelector('#misc-section');


        const toggleContainer = document.createElement('div');
        toggleContainer.style.display = 'flex';
        toggleContainer.style.alignItems = 'center';
        toggleContainer.style.justifyContent = 'space-between';
        toggleContainer.style.margin = '10px 0';

        const toggleLabel = document.createElement('span');
        toggleLabel.innerText = 'Enable Background';
        toggleLabel.style.fontSize = '16px';
        toggleLabel.style.color = '#0766FF';

        const toggleSwitch = document.createElement('label');
        toggleSwitch.className = 'switch';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const slider = document.createElement('span');
        slider.className = 'slider';

        checkbox.onchange = () => {
        	if (checkbox.checked) {
        enableAnimatedBackground()
	        } else {
        disableAnimatedBackground()
	        }
        };

toggleSwitch.appendChild(checkbox);
toggleSwitch.appendChild(slider);
toggleContainer.appendChild(toggleLabel);
toggleContainer.appendChild(toggleSwitch);
miscSection.appendChild(toggleContainer);


        document.body.appendChild(settingsPanel);
    }


    function createDropdownMenu() {
	if (dropdownMenu) {
		dropdownMenu.style.visibility = dropdownMenu.style.visibility === 'hidden' ? 'visible' : 'hidden';
		return dropdownMenu;
	}

	dropdownMenu = document.createElement('div');
	dropdownMenu.style.position = 'fixed';
	dropdownMenu.style.top = '30%';
	dropdownMenu.style.left = '42%';
	dropdownMenu.style.background = '#1a1a1a';
	dropdownMenu.style.width = '300px';
	dropdownMenu.style.height = '350px';
	dropdownMenu.style.border = '1px solid #0766FF';
	dropdownMenu.style.borderRadius = '8px';
    dropdownMenu.style.display = 'flex';
    dropdownMenu.style.flexDirection = 'column';
    dropdownMenu.style.justifyContent = 'center';
    dropdownMenu.style.alignItems = 'center';
	dropdownMenu.style.boxShadow = '0 0 10px #0766FF';
	dropdownMenu.style.visibility = 'hidden';
    dropdownMenu.style.zIndex = '5';
	dropdownMenu.id = 'dropdownmenu';

	const settingsBtn = document.createElement('button');
	settingsBtn.innerText = 'Settings';
	settingsBtn.style.background = 'transparent';
    settingsBtn.style.fontFamily = 'Verdana, sans-serif';
    settingsBtn.style.fontWeight = 'bold';
	settingsBtn.style.color = '#0766FF';
	settingsBtn.style.border = 'none';
	settingsBtn.style.fontSize = '32px';
	settingsBtn.style.cursor = 'pointer';
	settingsBtn.onclick = () => {
		showSettings();
		dropdownMenu.style.visibility = 'hidden';
	};

	const changelogBtn = document.createElement('button');
	changelogBtn.innerText = 'Changelog';
	changelogBtn.style.background = 'transparent';
    changelogBtn.style.fontFamily = 'Verdana, sans-serif';
    changelogBtn.style.fontWeight = 'bold';
	changelogBtn.style.color = '#0766FF';
	changelogBtn.style.border = 'none';
	changelogBtn.style.fontSize = '32px';
	changelogBtn.style.cursor = 'pointer';
	changelogBtn.onclick = () => {
		showChangelog();
		dropdownMenu.style.visibility = 'hidden';
	};

	const hideBtn = document.createElement('button');
	hideBtn.innerText = 'Hide';
	hideBtn.style.background = 'transparent';
    hideBtn.style.fontFamily = 'Verdana, sans-serif';
    hideBtn.style.fontWeight = 'bold';
	hideBtn.style.color = '#0766FF';
	hideBtn.style.border = 'none';
	hideBtn.style.fontSize = '32px';
	hideBtn.style.cursor = 'pointer';
	hideBtn.onclick = () => {
		if (panel) panel.style.display = 'none';
		if (iframe) iframe.style.display = 'none';
		dropdownMenu.style.visibility = 'hidden';
        removeBlur();
	};

	const closeBtn = document.createElement('button');
	closeBtn.innerText = 'Exit';
	closeBtn.style.background = 'transparent';
    closeBtn.style.fontFamily = 'Verdana, sans-serif';
    closeBtn.style.fontWeight = 'bold';
	closeBtn.style.color = '#ff0000';
	closeBtn.style.border = 'none';
	closeBtn.style.fontSize = '32px';
	closeBtn.style.cursor = 'pointer';
	closeBtn.onclick = () => {
		panel?.remove();
		iframe?.remove();
		changelogPanel?.remove();
		settingsPanel?.remove();
		dropdownMenu?.remove();
		dropdownBtn?.remove();
		removeBlur();
	};

	const homeBtn = document.createElement('button');
	homeBtn.innerText = 'Home';
	homeBtn.style.background = 'transparent';
    homeBtn.style.fontFamily = 'Verdana, sans-serif';
    homeBtn.style.fontWeight = 'bold';
	homeBtn.style.color = '#0766FF';
	homeBtn.style.border = 'none';
	homeBtn.style.fontSize = '32px';
	homeBtn.style.cursor = 'pointer';
	homeBtn.style.textAlign = 'center';
	homeBtn.onclick = () => {
		if (document.getElementById('panel') == null) {
			createPanel();
			iframe?.remove();
            removeBlur();
            dropdownMenu.style.visibility = 'hidden';
		}
	};

	function createSeparator() {
		const line = document.createElement('div');
    	line.style.height = '2px';
	    line.style.width = '80%';
    	line.style.margin = '10px auto';
	    line.style.background = 'linear-gradient(to right, transparent, #0766FF, transparent)';
    	line.style.backgroundSize = '200% auto';
    	line.style.animation = 'moveGradient 3s linear infinite';
	    return line;
	}

	dropdownMenu.appendChild(homeBtn);
    dropdownMenu.appendChild(createSeparator());
	dropdownMenu.appendChild(changelogBtn);
    dropdownMenu.appendChild(createSeparator());
	dropdownMenu.appendChild(settingsBtn);
	dropdownMenu.appendChild(createSeparator());	
    dropdownMenu.appendChild(hideBtn);
	dropdownMenu.appendChild(createSeparator());	
    dropdownMenu.appendChild(closeBtn);

	document.body.appendChild(dropdownMenu);
	return dropdownMenu;
    }

	const style = document.createElement('style');
	style.innerHTML = `
		@keyframes pulseLine {
			0% {
				transform: scaleX(0);
				opacity: 0.2;
			}
			50% {
				transform: scaleX(1);
				opacity: 0.6;
			}
			100% {
				transform: scaleX(0);
				opacity: 0.2;
			}
		}
	`;
	document.head.appendChild(style);

    function createSidebar() {
	if (sidebar) {
		const isHidden = sidebar.classList.contains('sidebar-hidden');
		sidebar.classList.toggle('sidebar-hidden', !isHidden);
		sidebar.classList.toggle('sidebar-visible', isHidden);
		isHidden ? createBlur() : removeBlur();
		return sidebar;
	}

	sidebar = document.createElement('div');
	sidebar.id = 'sidebar';
	sidebar.className = 'sidebar sidebar-visible';
    sidebar.style.zIndex = '5';

	const randomBtn = document.createElement('button');
	randomBtn.innerText = 'Random';
	randomBtn.className = 'sidebar-btn';
	randomBtn.onclick = () => {
		const randomGame = games[Math.floor(Math.random() * games.length)];
		iframe?.remove();
		createIframe(randomGame.url);
		toggleSidebar(false);
	};

	const changelogBtn = document.createElement('button');
	changelogBtn.innerText = 'Changelog';
	changelogBtn.className = 'sidebar-btn';
	changelogBtn.onclick = () => {
		showChangelog();
		toggleSidebar(false);
	};

	const settingsBtn = document.createElement('button');
	settingsBtn.innerText = 'Settings';
	settingsBtn.className = 'sidebar-btn';
	settingsBtn.onclick = () => {
		showSettings();
		toggleSidebar(false);
	};

	const closeBtn = document.createElement('button');
	closeBtn.innerText = 'Close';
	closeBtn.className = 'sidebar-btn';
	closeBtn.onclick = () => toggleSidebar(false);

	const exitBtn = document.createElement('button');
	exitBtn.innerText = 'Exit';
	exitBtn.className = 'sidebar-btn';
	exitBtn.style.color = '#FF0000';
	exitBtn.onclick = () => {
		panel?.remove();
		iframe?.remove();
		changelogPanel?.remove();
		settingsPanel?.remove();
		sidebar?.remove();
		dropdownBtn?.remove();
		removeBlur();
	};

	function createDivider() {
		const divider = document.createElement('div');
		divider.className = 'sidebar-divider';
		return divider;
	}

	sidebar.appendChild(randomBtn);
	sidebar.appendChild(createDivider());
	sidebar.appendChild(changelogBtn);
	sidebar.appendChild(createDivider());
	sidebar.appendChild(settingsBtn);
	sidebar.appendChild(createDivider());
	sidebar.appendChild(closeBtn);
	sidebar.appendChild(createDivider());
	sidebar.appendChild(exitBtn);

	document.body.appendChild(sidebar);
	createBlur();
	return sidebar;
    }

    function toggleSidebar(show) {
	    if (!sidebar) return;
	    sidebar.classList.toggle('sidebar-visible', show);
	    sidebar.classList.toggle('sidebar-hidden', !show);
	    show ? createBlur() : removeBlur();
    }


    function createChangelogPanel() {
        changelogPanel = document.createElement('div');
        changelogPanel.style.width = '300px';
        changelogPanel.style.height = '350px';
        changelogPanel.style.overflowY = 'scroll';
        changelogPanel.style.overflow = 'auto';
        changelogPanel.style.borderRadius = '20px';
        changelogPanel.style.boxShadow = '0 0 20px #0766FF';
        changelogPanel.style.position = 'absolute';
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

    function toggleMenu(event) {
    if (event.key === 'm' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        
        if (!dropdownMenu) return;
        if (iframe) dropdownMenu.style.visibility = dropdownMenu.style.visibility === 'hidden' ? 'visible' : 'hidden';
        if (iframe) if (!blurLayer) createBlur(); else removeBlur();
    }
}

    document.addEventListener('keydown', toggleFrames);
    document.addEventListener('keydown', toggleMenu);
    loadGameList();
})();
/* 
add disguise (fake background) -- customizable through settings
add tab disguise
add escape button
add console
*/
