javascript:(function() {
    var guiWidth = 600,
        guiHeight = 375,
        borderRadius = 20,
        guiDiv = document.createElement('div');

    var password = 'password';
    var panelVisible = true;

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
    guiDiv.style.fontFamily = 'Verdana, sans-serif';

    var title = document.createElement('div');
    title.style.position = 'absolute';
    title.style.left = '50%';
    title.style.top = '125px';
    title.style.transform = 'translateX(-50%)';
    title.style.fontSize = '30px';
    title.style.fontWeight = 'bold';
    title.style.color = '#0766FF';
    title.style.whiteSpace = 'nowrap';
    title.style.textShadow = '0 0 5px #0766FF, 0 0 10px #0766FF, 0 0 1px #0766FF, 0 0 2px #0766FF, 0 0 3px #0766FF';
    title.innerText = 'ZephWare';

    var inputBox = document.createElement('input');
    inputBox.style.position = 'absolute';
    inputBox.style.left = '50%';
    inputBox.style.top = '170px';
    inputBox.style.transform = 'translateX(-50%)';
    inputBox.style.width = '300px';
    inputBox.style.height = '35px';
    inputBox.style.border = '2px solid #0766FF';
    inputBox.style.borderRadius = '15px';
    inputBox.style.background = 'transparent';
    inputBox.style.color = '#0766FF';
    inputBox.style.fontSize = '18px';
    inputBox.style.fontFamily = 'Verdana';
    inputBox.style.paddingLeft = '10px';
    inputBox.style.outline = 'none';
    inputBox.style.textAlign = 'center';
    inputBox.placeholder = 'Enter your code';
    inputBox.type = 'password';

    inputBox.addEventListener('focus', function() {
        inputBox.style.color = '#3D3636';
    });

    inputBox.addEventListener('blur', function() {
        inputBox.style.color = '#0766FF';
    });

    var description = document.createElement('div');
    description.style.position = 'absolute';
    description.style.left = '50%';
    description.style.top = '220px';
    description.style.transform = 'translateX(-50%)';
    description.style.fontSize = '11px';
    description.style.fontWeight = 'bold';
    description.style.color = '#3D3636';
    description.innerText = 'ZephWare requires a password to hide from GoGuardian';

    function checkPassword() {
        if (inputBox.value === password) {
            closePanel();
            loadZephPanel();
        } else {
            alert('Wrong password. Try again.');
        }
    }

    function loadZephPanel() {
        var url = 'https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/games.js';

        fetch(url)
            .then(response => response.text())
            .then(scriptContent => {
                var scriptElement = document.createElement('script');
                scriptElement.innerHTML = scriptContent;
                document.body.appendChild(scriptElement);
            })
            .catch(error => {
                console.error('Error fetching panel code:', error);
                alert('Failed to load the panel. Please try again later.');
            });
    }

    function closePanel() {
        if (guiDiv.parentNode) {
            guiDiv.parentNode.removeChild(guiDiv);
        }
    }

    inputBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    function togglePanelVisibility(event) {
        if (event.key === ']') {
            panelVisible = !panelVisible;
            guiDiv.style.display = panelVisible ? 'block' : 'none';
        }
    }

    document.addEventListener('keydown', togglePanelVisibility);

    guiDiv.appendChild(title);
    guiDiv.appendChild(inputBox);
    guiDiv.appendChild(description);
    document.body.appendChild(guiDiv);
})();
