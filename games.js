javascript:(function() {
    let iframe = null;
    let panel = null;

    const buttonConfigs = [
        {
          label: 'Polytrack',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/polytrack/splash.png',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/polytrack/index.html'
        },
        {
          label: 'Tic Tac Toe',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/tictactoe/splash.jpeg',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/tictactoe/index.html'
        },
        {
          label: 'Geogussr',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/worldgussr/street1.jpg',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/worldgussr/index.html'
        },
        {
          label: 'Ragdoll Archers',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/ragdoll-archers/logo.jpeg',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/ragdoll-archers/index.html'
        },
        {
          label: 'GunSpin',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/gunspin/splash.png',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/polytrack/index.html'
        },
        {
          label: 'BasketBallBros',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/basket-bros/splash.jpeg',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/basket-bros/index.html'
        },
        {
          label: 'PaperIo 2',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/paperio2/game/splash.avif',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/paperio2/index.html'
        },
        {
          label: 'OVO 3',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/ovo3/game/splash.avif',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/ovo3/index.html'
        },
        {
          label: 'Stick War',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/assets/gmsimgs/infinityduel.jpeg',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/infinityduel/index.html#google_vignette'
        },
        {
          label: 'Boxing Random',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/assets/gmsimgs/boxingrandom.png',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/boxingrandom/index.html'
        },
        {
          label: 'Stick Man Hook',
          image: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/stickmanhook/unnamed.jpg',
          url: 'https://d3rtzzzsiu7gdr.cloudfront.net/files/stickmanhook/index.html'
        },
        {}
      ];

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

        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';  // Allow buttons to wrap onto new lines
        container.style.justifyContent = 'space-around';  // Space buttons evenly across the panel
        container.style.alignItems = 'center';  // Align buttons vertically in the container
        container.style.gap = '20px';  // Increase space between buttons

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
                iframe.style.width = '800px';
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

    panel = createPanel();

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
