javascript: (function() {
    var guiWidth = 600,
        guiHeight = 375,
        borderRadius = 20,
        guiDiv = document.createElement('div');

    guiDiv.style.position = 'fixed';
    guiDiv.style.top = '50%';
    guiDiv.style.left = '50%';
    guiDiv.style.transform = 'translate(-50%,-50%)';
    guiDiv.style.width = guiWidth + 'px';
    guiDiv.style.height = guiHeight + 'px';
    guiDiv.style.borderRadius = borderRadius + 'px';
    guiDiv.style.overflow = 'hidden';
    guiDiv.style.boxShadow = '0 0 20px #0766FF';
    guiDiv.style.zIndex = 9999;
    guiDiv.style.background = 'linear-gradient(135deg, #2C2A2A, #171212)';
    guiDiv.style.textAlign = 'center';
    guiDiv.style.fontFamily = 'Verdana,sans-serif';

    var d = document.createElement('div');
    d.style.position = 'fixed';
    d.style.top = '50%';
    d.style.left = '50%';
    d.style.transform = 'translate(-50%,-50%)';
    d.style.width = '600px';
    d.style.height = '375px';
    d.style.background = 'linear-gradient(135deg, #2C2A2A, #171212)';
    d.style.borderRadius = '20px';
    d.style.boxShadow = '0 0 100px #038FF9';
    d.style.display = 'flex';
    d.style.flexDirection = 'column';
    d.style.overflow = 'hidden';
    d.style.zIndex = '9999';
    d.style.fontFamily = 'Verdana';
    d.style.fontWeight = 'bold';

    var titleBarContainer = document.createElement('div');
    titleBarContainer.style.display = 'flex';
    titleBarContainer.style.justifyContent = 'center';
    titleBarContainer.style.alignItems = 'center';
    titleBarContainer.style.marginTop = '20px';

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
    titleBar.style.position = 'absolute';
    titleBar.style.left = 'calc(50% + 75px)';
    titleBar.style.top = 'calc(50% - 150px)';
    titleBar.style.transform = 'translate(-50%, -50%)';

    var container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flex = '1';

    var sidebar = document.createElement('div');
    sidebar.style.width = '150px';
    sidebar.style.height = 'calc(100% - -75px)';
    sidebar.style.background = '#017AD5';
    sidebar.style.display = 'flex';
    sidebar.style.flexDirection = 'column';
    sidebar.style.justifyContent = 'center';
    sidebar.style.alignItems = 'center';
    sidebar.style.borderRadius = '15px';
    sidebar.style.boxShadow = '0 0 20px #038FF9';
    sidebar.style.margin = '-65px 0';
    sidebar.style.marginLeft = '0px';
    sidebar.style.position = 'relative';
    sidebar.style.fontFamily = 'Verdana';
    sidebar.style.fontWeight = 'bold';

    var content = document.createElement('div');
    content.style.flex = '1';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';
    content.style.fontFamily = 'Verdana';
    content.style.fontWeight = 'bold';
    content.style.color = 'white';
    content.style.fontSize = '24px';

    var title = document.createElement('div');
    title.innerText = 'Zephware';
    title.style.marginBottom = '20px';
    content.appendChild(title);

    function loadPage(p, text) {
        title.innerText = text;
    }

    var buttons = ["Blooket", "Gimkit", "Games", "Unblocker", "Extras"];
    for (let i = 0; i < buttons.length; i++) {
        let btn = document.createElement('button');
        btn.innerText = buttons[i];
        btn.style.width = '100px';
        btn.style.height = '50px';
        btn.style.margin = '10px';
        btn.style.padding = '10px';
        btn.style.background = 'linear-gradient(45deg, #038FF9, #00C5FF)';
        btn.style.color = '#07D5F9';
        btn.style.border = 'none';
        btn.style.borderRadius = '10px';
        btn.style.cursor = 'pointer';
        btn.style.fontFamily = 'Verdana';
        btn.style.fontWeight = 'bold';
        btn.style.position = 'absolute';
        btn.style.left = '20px';
        btn.style.top = (60 + i * 65) + 'px';
        btn.onclick = function() {
            loadPage(i + 1, buttons[i]);
        };
        sidebar.appendChild(btn);
    }

    titleBarContainer.appendChild(titleBar);
    d.appendChild(titleBarContainer);
    container.appendChild(sidebar);
    container.appendChild(content);
    d.appendChild(container);
    document.body.appendChild(d);
})();
