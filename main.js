(function() {
  var guiWidth = 600,
    guiHeight = 375,
    borderRadius = 20,
    guiDiv = document.createElement('div');

  var password = 'password';
  var panelVisible = true;

  const oldCanvas = document.getElementById('fireworksCanvas');
  if (oldCanvas) oldCanvas.remove();
  const oldBlur = document.getElementById('blurLayer');
  if (oldBlur) oldBlur.remove();

  const blurLayer = document.createElement('div');
  blurLayer.id = 'blurLayer';
  blurLayer.style.position = 'fixed';
  blurLayer.style.top = '0';
  blurLayer.style.left = '0';
  blurLayer.style.width = '100vw';
  blurLayer.style.height = '100vh';
  blurLayer.style.pointerEvents = 'none';
  blurLayer.style.zIndex = '1';
  blurLayer.style.backdropFilter = 'blur(8px)';
  blurLayer.style.webkitBackdropFilter = 'blur(8px)';
  blurLayer.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  document.body.appendChild(blurLayer);

  const canvas = document.createElement('canvas');
  canvas.id = 'fireworksCanvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let cw, ch;

  function resize() {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor(x, y, color, angle, speed, decay) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.angle = angle;
      this.speed = speed;
      this.decay = decay;
      this.alpha = 1;
      this.radius = 4 + Math.random() * 2;
    }

    update() {
      this.speed *= this.decay;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + 0.3;
      this.alpha -= 0.007;
      this.alpha = Math.max(this.alpha, 0);
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  class Firework {
    constructor() {
      this.x = Math.random() * cw;
      this.y = Math.random() * ch * 0.6 + ch * 0.1;
      this.particles = [];
      this.colors = [
        '#3f6fff',
        '#1f3fff',
        '#0a1fff',
        '#5a7fff',
        '#2d4eff',
      ];
      this.createParticles();
      this.done = false;
    }

    createParticles() {
      const count = 20 + Math.floor(Math.random() * 20);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 3 + Math.random() * 1.5;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const decay = 0.95 + Math.random() * 0.02;
        this.particles.push(new Particle(this.x, this.y, color, angle, speed, decay));
      }
    }

    update() {
      this.particles.forEach(p => p.update());
      this.particles = this.particles.filter(p => p.alpha > 0);
      if (this.particles.length === 0) this.done = true;
    }

    draw() {
      this.particles.forEach(p => p.draw());
    }
  }

  const fireworks = [];

  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, cw, ch);

    if (Math.random() < 0.15) {
      fireworks.push(new Firework());
    }

    fireworks.forEach((fw, i) => {
      fw.update();
      fw.draw();
      if (fw.done) {
        fireworks.splice(i, 1);
      }
    });

    requestAnimationFrame(loop);
  }

  loop();

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

  inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      checkPassword();
    }
  });

  function checkPassword() {
    if (inputBox.value === password) {
      closePanel();
      loadZephPanel();
    } else {
      alert('oof you tried but you failed');
      inputBox.classList.add('input-shake');
      setTimeout(() => inputBox.classList.remove('input-shake'), 500);
    }
  }

  function loadZephPanel() {
    var url = 'https://raw.githubusercontent.com/TrulyZeph/Zephware/refs/heads/main/panel.js';
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
    if (guiDiv.parentNode) guiDiv.parentNode.removeChild(guiDiv);
    document.getElementById('fireworksCanvas')?.remove();
    document.getElementById('blurLayer')?.remove();
    document.querySelector('.mountain')?.remove();
    document.querySelectorAll('.cloud').forEach(c => c.remove());
    document.getElementById('backgroundStyle')?.remove();
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === ']') {
      panelVisible = !panelVisible;
      guiDiv.style.display = panelVisible ? 'block' : 'none';
    }
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

  guiDiv.appendChild(title);
  guiDiv.appendChild(inputBox);
  guiDiv.appendChild(description);
  document.body.appendChild(guiDiv);
})();
