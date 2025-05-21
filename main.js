(function() {
	var guiWidth = 600,
		guiHeight = 375,
		borderRadius = 20,
		guiDiv = document.createElement('div');

	var password = 'password';
	var panelVisible = true;

	var area = document.createElement('div');
	area.id = 'backgroundArea';
	area.classList.add('area');
	area.style.position = 'absolute';
	area.style.top = '0';
	area.style.left = '0';
	area.style.width = '100vw';
	area.style.height = '100vh';
	area.style.overflow = 'hidden';

	var circles = document.createElement('ul');
	circles.classList.add('circles');
	area.appendChild(circles);

	for (var i = 0; i < 10; i++) {
		var circle = document.createElement('li');
		circles.appendChild(circle);
	}

	var styleSheet = document.createElement("style");
	styleSheet.type = "text/css";
	styleSheet.id = "backgroundStyle";
	styleSheet.innerText = `
		* {
			margin: 0px;
			padding: 0px;
		}

		.area {
			background: linear-gradient(135deg, #2C2A2A, #171212);
			background: -webkit-linear-gradient(to left, #2600ff, #0011ff);
			width: 100%;
			height: 100vh;
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

		.circles li:nth-child(1) {
			left: 25%;
			width: 80px;
			height: 80px;
			animation-delay: 0s;
		}

		.circles li:nth-child(2) {
			left: 10%;
			width: 20px;
			height: 20px;
			animation-delay: 2s;
			animation-duration: 12s;
		}

		.circles li:nth-child(3) {
			left: 70%;
			width: 20px;
			height: 20px;
			animation-delay: 4s;
		}

		.circles li:nth-child(4) {
			left: 40%;
			width: 60px;
			height: 60px;
			animation-delay: 0s;
			animation-duration: 18s;
		}

		.circles li:nth-child(5) {
			left: 65%;
			width: 20px;
			height: 20px;
			animation-delay: 0s;
		}

		.circles li:nth-child(6) {
			left: 75%;
			width: 110px;
			height: 110px;
			animation-delay: 3s;
		}

		.circles li:nth-child(7) {
			left: 35%;
			width: 150px;
			height: 150px;
			animation-delay: 7s;
		}

		.circles li:nth-child(8) {
			left: 50%;
			width: 25px;
			height: 25px;
			animation-delay: 15s;
			animation-duration: 45s;
		}

		.circles li:nth-child(9) {
			left: 20%;
			width: 15px;
			height: 15px;
			animation-delay: 2s;
			animation-duration: 35s;
		}

		.circles li:nth-child(10) {
			left: 85%;
			width: 150px;
			height: 150px;
			animation-delay: 0s;
			animation-duration: 11s;
		}

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
	document.head.appendChild(styleSheet);

	guiDiv.style.position = 'fixed';
	guiDiv.style.top = '50%';
	guiDiv.style.left = '50%';
	guiDiv.style.transform = 'translate(-50%, -50%)';
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
	inputBox.placeholder = 'Enter Password';
	inputBox.type = 'password';

	inputBox.addEventListener('focus', function() {
		inputBox.classList.add('input-focus');
	});

	inputBox.addEventListener('blur', function() {
		inputBox.classList.remove('input-focus');
	});

	var description = document.createElement('div');
	description.style.position = 'absolute';
	description.style.left = '50%';
	description.style.top = '215px';
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
			alert('oof you tried but you failed');
			inputBox.classList.add('input-shake');
			setTimeout(function() {
				inputBox.classList.remove('input-shake');
			}, 500);
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
		const background = document.getElementById('backgroundArea');
		if (background) {
			background.remove();
		}
		const css = document.getElementById('backgroundStyle');
		if (css) {
			css.remove();
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

	document.body.appendChild(area);
	guiDiv.appendChild(title);
	guiDiv.appendChild(inputBox);
	guiDiv.appendChild(description);
	document.body.appendChild(guiDiv);
})();
