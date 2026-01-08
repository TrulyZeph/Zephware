(function () {
  const moviesUrl = "https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/movies.json";
  const showsUrl = "https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/shows.json";
  const soundsUrl = "https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/sounds.json";

  if (!document.getElementById('fredoka-font-link')) {
    const link = document.createElement('link');
    link.id = 'fredoka-font-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&display=swap';
    document.head.appendChild(link);
  }

  const style = document.createElement("style");
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Fredoka', sans-serif;
    }
    
    body {
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
      color: white;
      overflow-x: hidden;
    }
    
    #zw-navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 70px;
      background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      padding: 0 50px;
      z-index: 100;
      border-bottom: 2px solid rgba(1, 174, 253, 0.3);
    }
    
    #zw-logo {
      font-size: 32px;
      font-weight: 600;
      background: linear-gradient(135deg, #01AEFD 0%, #015AFD 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-right: 50px;
      cursor: pointer;
    }
    
    #zw-nav-links {
      display: flex;
      gap: 30px;
      flex: 1;
    }
    
    .zw-nav-link {
      color: #e0e0e0;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      transition: color 0.3s, transform 0.2s;
      cursor: pointer;
      position: relative;
    }
    
    .zw-nav-link:hover {
      color: #01AEFD;
      transform: translateY(-2px);
    }
    
    .zw-nav-link.active {
      color: #01AEFD;
    }
    
    .zw-nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #01AEFD 0%, #015AFD 100%);
      border-radius: 2px;
    }
    
    #zw-search {
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(1, 174, 253, 0.3);
      border-radius: 25px;
      color: white;
      font-size: 14px;
      outline: none;
      transition: all 0.3s;
      width: 250px;
    }
    
    #zw-search::placeholder {
      color: #999;
    }
    
    #zw-search:focus {
      background: rgba(255, 255, 255, 0.15);
      border-color: #01AEFD;
      box-shadow: 0 0 15px rgba(1, 174, 253, 0.3);
    }
    
    #zw-content {
      margin-top: 70px;
      padding: 40px 50px;
      min-height: calc(100vh - 70px);
    }
    
    #zw-hero {
      height: 500px;
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.2) 0%, rgba(1, 90, 253, 0.2) 100%);
      border-radius: 20px;
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      border: 2px solid rgba(1, 174, 253, 0.3);
    }
    
    #zw-hero::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(1, 174, 253, 0.1) 0%, transparent 70%);
      animation: pulse 15s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.1) rotate(180deg); }
    }
    
    #zw-hero-text {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    
    #zw-hero-text h1 {
      font-size: 64px;
      font-weight: 600;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #01AEFD 0%, #63baff 50%, #015AFD 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    #zw-hero-text p {
      font-size: 24px;
      color: #e0e0e0;
      opacity: 0.9;
    }
    
    .zw-section {
      margin-bottom: 50px;
    }
    
    .zw-section-title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 25px;
      color: #01AEFD;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .zw-section-title::before {
      content: '';
      width: 5px;
      height: 30px;
      background: linear-gradient(180deg, #01AEFD 0%, #015AFD 100%);
      border-radius: 3px;
    }
    
    .zw-row {
      display: flex;
      gap: 20px;
      overflow-x: auto;
      padding-bottom: 20px;
      scroll-behavior: smooth;
    }
    
    .zw-row::-webkit-scrollbar {
      height: 8px;
    }
    
    .zw-row::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
    
    .zw-row::-webkit-scrollbar-thumb {
      background: linear-gradient(90deg, #01AEFD 0%, #015AFD 100%);
      border-radius: 4px;
    }
    
    .zw-sound-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      padding-bottom: 20px;
    }
    
    @media (max-width: 1400px) {
      .zw-sound-grid {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      }
    }
    
    @media (max-width: 768px) {
      .zw-sound-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
    
    .zw-card {
      min-width: 220px;
      height: 330px;
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.1) 0%, rgba(1, 90, 253, 0.1) 100%);
      border-radius: 15px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      position: relative;
      border: 2px solid rgba(1, 174, 253, 0.2);
    }
    
    .zw-card:hover {
      transform: scale(1.05) translateY(-10px);
      box-shadow: 0 20px 40px rgba(1, 174, 253, 0.3);
      border-color: #01AEFD;
    }
    
    .zw-card-thumbnail {
      width: 100%;
      height: 250px;
      background: linear-gradient(135deg, #298ee0 0%, #015AFD 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 72px;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center;
    }
    
    .zw-card-thumbnail::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
    }
    
    .zw-card-info {
      padding: 15px;
    }
    
    .zw-card-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 5px;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .zw-card-category {
      font-size: 13px;
      color: #01AEFD;
      text-transform: capitalize;
    }
    
    .zw-sound-card {
      min-width: auto;
      width: 100%;
      height: 120px;
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.15) 0%, rgba(1, 90, 253, 0.15) 100%);
      border-radius: 12px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s;
      border: 2px solid rgba(1, 174, 253, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .zw-sound-card:hover {
      transform: scale(1.05);
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.25) 0%, rgba(1, 90, 253, 0.25) 100%);
      border-color: #01AEFD;
      box-shadow: 0 10px 30px rgba(1, 174, 253, 0.3);
    }
    
    .zw-sound-title {
      font-size: 16px;
      font-weight: 600;
      color: white;
      margin-bottom: 8px;
    }
    
    .zw-sound-icon {
      font-size: 24px;
      color: #01AEFD;
    }
    
    #zw-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(10px);
      z-index: 200;
      display: none;
      overflow-y: auto;
    }
    
    #zw-overlay.active {
      display: block;
    }
    
    #zw-modal-close {
      position: fixed;
      top: 20px;
      right: 30px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(1, 174, 253, 0.3);
      color: white;
      font-size: 28px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      z-index: 201;
    }
    
    #zw-modal-close:hover {
      background: #01AEFD;
      border-color: #01AEFD;
      transform: rotate(90deg);
    }
    
    #zw-movie-modal {
      padding: 100px 50px 50px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    #zw-movie-video-container {
      width: 100%;
      aspect-ratio: 16/9;
      background: #000;
      border-radius: 15px;
      margin-bottom: 30px;
      overflow: hidden;
      border: 2px solid rgba(1, 174, 253, 0.3);
    }
    
    #zw-movie-video {
      width: 100%;
      height: 100%;
    }
    
    #zw-movie-title {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #01AEFD 0%, #63baff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    #zw-movie-category {
      font-size: 18px;
      color: #01AEFD;
      text-transform: capitalize;
    }
    
    #zw-show-modal {
      padding: 100px 50px 50px;
      max-width: 1400px;
      margin: 0 auto;
    }
    
    #zw-show-header {
      margin-bottom: 30px;
    }
    
    #zw-show-title {
      font-size: 42px;
      font-weight: 600;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #01AEFD 0%, #63baff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    #zw-show-category {
      font-size: 18px;
      color: #01AEFD;
      text-transform: capitalize;
      margin-bottom: 15px;
    }
    
    #zw-show-layout {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 30px;
      margin-bottom: 30px;
    }
    
    #zw-show-video-container {
      width: 100%;
      aspect-ratio: 16/9;
      background: #000;
      border-radius: 15px;
      overflow: hidden;
      border: 2px solid rgba(1, 174, 253, 0.3);
    }
    
    #zw-show-video {
      width: 100%;
      height: 100%;
    }
    
    #zw-episode-list {
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.1) 0%, rgba(1, 90, 253, 0.1) 100%);
      border-radius: 15px;
      padding: 20px;
      border: 2px solid rgba(1, 174, 253, 0.2);
      max-height: 600px;
      overflow-y: auto;
    }
    
    #zw-episode-list::-webkit-scrollbar {
      width: 8px;
    }
    
    #zw-episode-list::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
    
    #zw-episode-list::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #01AEFD 0%, #015AFD 100%);
      border-radius: 4px;
    }
    
    .zw-season-selector {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    
    .zw-season-btn {
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(1, 174, 253, 0.3);
      border-radius: 10px;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 14px;
      font-weight: 500;
    }
    
    .zw-season-btn:hover {
      background: rgba(1, 174, 253, 0.2);
      border-color: #01AEFD;
    }
    
    .zw-season-btn.active {
      background: linear-gradient(135deg, #01AEFD 0%, #015AFD 100%);
      border-color: #01AEFD;
    }
    
    .zw-episode-item {
      padding: 15px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: all 0.3s;
      border: 2px solid transparent;
    }
    
    .zw-episode-item:hover {
      background: rgba(1, 174, 253, 0.2);
      border-color: #01AEFD;
      transform: translateX(5px);
    }
    
    .zw-episode-item.active {
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.3) 0%, rgba(1, 90, 253, 0.3) 100%);
      border-color: #01AEFD;
    }
    
    .zw-episode-number {
      font-size: 12px;
      color: #01AEFD;
      margin-bottom: 5px;
    }
    
    .zw-episode-name {
      font-size: 15px;
      color: white;
      font-weight: 500;
    }
    
    #zw-show-description {
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.1) 0%, rgba(1, 90, 253, 0.1) 100%);
      border-radius: 15px;
      padding: 25px;
      border: 2px solid rgba(1, 174, 253, 0.2);
    }
    
    #zw-show-description h3 {
      font-size: 22px;
      color: #01AEFD;
      margin-bottom: 15px;
    }
    
    #zw-show-description p {
      font-size: 16px;
      color: #e0e0e0;
      line-height: 1.6;
    }
    
    .zw-empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #666;
    }
    
    .zw-empty-state-icon {
      font-size: 72px;
      margin-bottom: 20px;
      opacity: 0.5;
    }
    
    .zw-empty-state-text {
      font-size: 20px;
    }
  `;
  document.head.appendChild(style);

  const navbar = document.createElement("div");
  navbar.id = "zw-navbar";
  navbar.innerHTML = `
    <div id="zw-logo">Zephware</div>
    <div id="zw-nav-links">
      <a class="zw-nav-link active" data-page="home">Home</a>
      <a class="zw-nav-link" data-page="movies">Movies</a>
      <a class="zw-nav-link" data-page="shows">Shows</a>
      <a class="zw-nav-link" data-page="sounds">Sounds</a>
    </div>
    <input type="search" id="zw-search" placeholder="Search..."/>
  `;
  document.body.appendChild(navbar);

  const content = document.createElement("div");
  content.id = "zw-content";
  document.body.appendChild(content);

  const overlay = document.createElement("div");
  overlay.id = "zw-overlay";
  overlay.innerHTML = `<button id="zw-modal-close">×</button>`;
  document.body.appendChild(overlay);

  let movies = [];
  let shows = [];
  let sounds = [];
  let currentPage = 'home';
  let searchQuery = '';

  const navLinks = navbar.querySelectorAll('.zw-nav-link');
  const searchInput = navbar.querySelector('#zw-search');
  const modalClose = overlay.querySelector('#zw-modal-close');
  const logo = navbar.querySelector('#zw-logo');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      currentPage = link.dataset.page;
      searchQuery = '';
      searchInput.value = '';
      renderPage();
    });
  });

  logo.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    navLinks[0].classList.add('active');
    currentPage = 'home';
    searchQuery = '';
    searchInput.value = '';
    renderPage();
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderPage();
  });

  modalClose.addEventListener('click', () => {
    overlay.classList.remove('active');
    overlay.innerHTML = `<button id="zw-modal-close">×</button>`;
    const newClose = overlay.querySelector('#zw-modal-close');
    newClose.addEventListener('click', () => {
      overlay.classList.remove('active');
      overlay.innerHTML = `<button id="zw-modal-close">×</button>`;
      modalClose.addEventListener('click', arguments.callee);
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      overlay.innerHTML = `<button id="zw-modal-close">×</button>`;
      const newClose = overlay.querySelector('#zw-modal-close');
      newClose.addEventListener('click', () => {
        overlay.classList.remove('active');
        overlay.innerHTML = `<button id="zw-modal-close">×</button>`;
        modalClose.addEventListener('click', arguments.callee);
      });
    }
  });

  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'zw-card';
    const thumbStyle = movie.cover ? `background-image: url('${movie.cover}');` : '';
    card.innerHTML = `
      <div class="zw-card-thumbnail" style="${thumbStyle}">
        ${!movie.cover ? '🎬' : ''}
      </div>
      <div class="zw-card-info">
        <div class="zw-card-title">${movie.name}</div>
        <div class="zw-card-category">${movie.category}</div>
      </div>
    `;
    card.addEventListener('click', () => openMovieModal(movie));
    return card;
  }

  function createShowCard(show) {
    const card = document.createElement('div');
    card.className = 'zw-card';
    const thumbStyle = show.cover ? `background-image: url('${show.cover}');` : '';
    const totalEpisodes = show.seasons.reduce((sum, s) => sum + s.episodes, 0);
    card.innerHTML = `
      <div class="zw-card-thumbnail" style="${thumbStyle}">
        ${!show.cover ? '📺' : ''}
      </div>
      <div class="zw-card-info">
        <div class="zw-card-title">${show.name}</div>
        <div class="zw-card-category">${show.category} • ${show.seasons.length} Season${show.seasons.length > 1 ? 's' : ''}</div>
      </div>
    `;
    card.addEventListener('click', () => openShowModal(show));
    return card;
  }

  function createSoundCard(sound) {
    const card = document.createElement('div');
    card.className = 'zw-sound-card';
    card.innerHTML = `
      <div class="zw-sound-title">${sound.name}</div>
      <div class="zw-sound-icon">🔊</div>
    `;
    card.addEventListener('click', () => {
      const audio = new Audio(sound.url);
      audio.play();
    });
    return card;
  }

  function openMovieModal(movie) {
    overlay.innerHTML = `
      <button id="zw-modal-close">×</button>
      <div id="zw-movie-modal">
        <div id="zw-movie-video-container">
          <video id="zw-movie-video" controls autoplay>
            <source src="${movie.url}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="zw-movie-title">${movie.name}</div>
        <div id="zw-movie-category">${movie.category}</div>
      </div>
    `;
    
    const newClose = overlay.querySelector('#zw-modal-close');
    newClose.addEventListener('click', () => {
      overlay.classList.remove('active');
      overlay.innerHTML = `<button id="zw-modal-close">×</button>`;
    });
    
    overlay.classList.add('active');
  }

  function openShowModal(show) {
    const firstSeason = show.seasons[0];
    const firstEpisode = firstSeason.names && firstSeason.names.length > 0 ? firstSeason.names[0] : { ep: 1, name: 'Episode 1' };
    
    overlay.innerHTML = `
      <button id="zw-modal-close">×</button>
      <div id="zw-show-modal">
        <div id="zw-show-header">
          <div id="zw-show-title">${show.name}</div>
          <div id="zw-show-category">${show.category}</div>
        </div>
        <div id="zw-show-layout">
          <div id="zw-show-video-container">
            <video id="zw-show-video" controls autoplay>
              <source src="${firstSeason.url}${firstEpisode.ep}.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div id="zw-episode-list">
            <div class="zw-season-selector"></div>
            <div id="zw-episodes"></div>
          </div>
        </div>
        <div id="zw-show-description">
          <h3>About</h3>
          <p>${show.name} • ${show.seasons.length} Season${show.seasons.length > 1 ? 's' : ''} • ${show.category}</p>
        </div>
      </div>
    `;
    
    const newClose = overlay.querySelector('#zw-modal-close');
    newClose.addEventListener('click', () => {
      overlay.classList.remove('active');
      overlay.innerHTML = `<button id="zw-modal-close">×</button>`;
    });
    
    const seasonSelector = overlay.querySelector('.zw-season-selector');
    const episodesContainer = overlay.querySelector('#zw-episodes');
    const video = overlay.querySelector('#zw-show-video');
    
    let currentSeason = firstSeason;
    let currentEpisodeNum = firstEpisode.ep;
    
    show.seasons.forEach(season => {
      const btn = document.createElement('button');
      btn.className = 'zw-season-btn';
      if (season === firstSeason) btn.classList.add('active');
      btn.textContent = `Season ${season.season}`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.zw-season-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSeason = season;
        renderEpisodes(season);
      });
      seasonSelector.appendChild(btn);
    });
    
    function renderEpisodes(season) {
      episodesContainer.innerHTML = '';
      for (let i = 1; i <= season.episodes; i++) {
        const episodeInfo = season.names && season.names.find(e => e.ep === i);
        const episodeName = episodeInfo ? episodeInfo.name : `Episode ${i}`;
        
        const item = document.createElement('div');
        item.className = 'zw-episode-item';
        if (season === currentSeason && i === currentEpisodeNum) item.classList.add('active');
        item.innerHTML = `
          <div class="zw-episode-number">Episode ${i}</div>
          <div class="zw-episode-name">${episodeName}</div>
        `;
        item.addEventListener('click', () => {
          document.querySelectorAll('.zw-episode-item').forEach(e => e.classList.remove('active'));
          item.classList.add('active');
          currentEpisodeNum = i;
          video.src = `${season.url}${i}.mp4`;
          video.load();
          video.play();
        });
        episodesContainer.appendChild(item);
      }
    }
    
    renderEpisodes(firstSeason);
    overlay.classList.add('active');
  }

  function filterContent(items, type) {
    if (!searchQuery) return items;
    return items.filter(item => item.name.toLowerCase().includes(searchQuery));
  }

  function renderPage() {
    if (currentPage === 'home') {
      content.innerHTML = `
        <div id="zw-hero">
          <div id="zw-hero-text">
            <h1>Welcome to Zephware</h1>
            <p><i>your favorite content, at school, unblocked.</i></p>
          </div>
        </div>
      `;
      
      const filteredMovies = filterContent(movies, 'movies');
      const filteredShows = filterContent(shows, 'shows');
      const filteredSounds = filterContent(sounds, 'sounds');
      
      if (filteredMovies.length > 0) renderSection('Movies', filteredMovies, 'movie');
      if (filteredShows.length > 0) renderSection('Shows', filteredShows, 'show');
      if (filteredSounds.length > 0) {
        const homeSounds = filteredSounds.slice(0, 14);
        renderSoundsSection('Sounds', homeSounds);
      }
      
    } else if (currentPage === 'movies') {
      const filteredMovies = filterContent(movies, 'movies');
      content.innerHTML = '';
      
      if (filteredMovies.length === 0) {
        content.innerHTML = `
          <div class="zw-empty-state">
            <div class="zw-empty-state-icon">🎬</div>
            <div class="zw-empty-state-text">No movies found</div>
          </div>
        `;
        return;
      }
      
      const categories = [...new Set(filteredMovies.map(m => m.category))];
      categories.forEach(cat => {
        const catMovies = filteredMovies.filter(m => m.category === cat);
        renderSection(cat, catMovies, 'movie');
      });
      
    } else if (currentPage === 'shows') {
      const filteredShows = filterContent(shows, 'shows');
      content.innerHTML = '';
      
      if (filteredShows.length === 0) {
        content.innerHTML = `
          <div class="zw-empty-state">
            <div class="zw-empty-state-icon">📺</div>
            <div class="zw-empty-state-text">No shows found</div>
          </div>
        `;
        return;
      }
      
      const categories = [...new Set(filteredShows.map(s => s.category))];
      categories.forEach(cat => {
        const catShows = filteredShows.filter(s => s.category === cat);
        renderSection(cat, catShows, 'show');
      });
      
    } else if (currentPage === 'sounds') {
      const filteredSounds = filterContent(sounds, 'sounds');
      content.innerHTML = '';
      
      if (filteredSounds.length === 0) {
        content.innerHTML = `
          <div class="zw-empty-state">
            <div class="zw-empty-state-icon">🔊</div>
            <div class="zw-empty-state-text">No sounds found</div>
          </div>
        `;
        return;
      }
      
      renderSoundsSection('All Sounds', filteredSounds);
    }
  }

  function renderSection(title, items, type) {
    const section = document.createElement('div');
    section.className = 'zw-section';
    section.innerHTML = `
      <div class="zw-section-title">${title}</div>
      <div class="zw-row"></div>
    `;
    const row = section.querySelector('.zw-row');
    items.forEach(item => {
      if (type === 'movie') row.appendChild(createMovieCard(item));
      else if (type === 'show') row.appendChild(createShowCard(item));
    });
    content.appendChild(section);
  }

  function renderSoundsSection(title, items) {
    const section = document.createElement('div');
    section.className = 'zw-section';
    section.innerHTML = `
      <div class="zw-section-title">${title}</div>
      <div class="zw-sound-grid"></div>
    `;
    const grid = section.querySelector('.zw-sound-grid');
    items.forEach(item => {
      grid.appendChild(createSoundCard(item));
    });
    content.appendChild(section);
  }

  Promise.all([
    fetch(moviesUrl).then(r => r.json()).catch(() => []),
    fetch(showsUrl).then(r => r.json()).catch(() => []),
    fetch(soundsUrl).then(r => r.json()).catch(() => [])
  ]).then(([moviesData, showsData, soundsData]) => {
    movies = moviesData;
    shows = showsData;
    sounds = soundsData;
    renderPage();
  });
})();