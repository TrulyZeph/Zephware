(function () {
  const moviesUrl = "https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/movies.json";
  const showsUrl = "https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/shows.json";
  const soundsUrl = "https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/sounds.json";
  const progressUrl = "https://raw.githubusercontent.com/TrulyZeph/Zephware/main/data/progress.json";

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

    *::-webkit-scrollbar {width: 0;height: 0;}
    * {scrollbar-width: none;}
    * {-ms-overflow-style: none;}

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
      max-width: 220px;
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
      background-position: top center;
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
      font-size: 14px;
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
      padding: 50px 50px 50px;
      max-width: 1600px;
      margin: 0 auto;
    }
    
    #zw-show-layout {
      display: grid;
      grid-template-columns: 1fr 450px;
      gap: 30px;
      margin-bottom: 30px;
    }
    
    #zw-show-video-area {
      display: flex;
      flex-direction: column;
      gap: 20px;
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
    
    #zw-show-description {
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.1) 0%, rgba(1, 90, 253, 0.1) 100%);
      border-radius: 15px;
      padding: 25px;
      border: 2px solid rgba(1, 174, 253, 0.2);
    }
    
    #zw-show-description h3 {
      font-size: 24px;
      color: #01AEFD;
      margin-bottom: 10px;
    }
    
    #zw-show-description .zw-show-meta {
      font-size: 14px;
      color: #999;
      margin-bottom: 15px;
    }
    
    #zw-show-description .zw-show-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    #zw-show-description .zw-tag {
      padding: 5px 12px;
      background: rgba(1, 174, 253, 0.2);
      border: 1px solid rgba(1, 174, 253, 0.3);
      border-radius: 15px;
      font-size: 12px;
      color: #01AEFD;
      text-transform: capitalize;
    }
    
    #zw-episode-list {
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.1) 0%, rgba(1, 90, 253, 0.1) 100%);
      border-radius: 15px;
      padding: 20px;
      border: 2px solid rgba(1, 174, 253, 0.2);
      display: flex;
      flex-direction: column;
      max-height: 725px;
      overflow-y: auto;
    }
    
    .zw-episode-controls {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      align-items: center;
      justify-content: center;
    }
    
    .zw-season-dropdown, .zw-audio-dropdown {
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(1, 174, 253, 0.3);
      border-radius: 10px;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 14px;
      font-weight: 500;
      outline: none;
      font-family: 'Fredoka', sans-serif;
    }
    
    .zw-season-dropdown:hover, .zw-audio-dropdown:hover {
      background: rgba(1, 174, 253, 0.2);
      border-color: #01AEFD;
    }
    
    .zw-season-dropdown option, .zw-audio-dropdown option {
      background: #1a1a2e;
      color: white;
    }
    
    #zw-episodes {
      flex: 1;
      overflow-y: auto;
    }
    
    #zw-episodes::-webkit-scrollbar {
      width: 8px;
    }
    
    #zw-episodes::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
    
    #zw-episodes::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #01AEFD 0%, #015AFD 100%);
      border-radius: 4px;
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
    
    .zw-progress-tabs {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
      justify-content: center;
    }
    
    .zw-progress-tab {
      padding: 12px 30px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(1, 174, 253, 0.3);
      border-radius: 10px;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 16px;
      font-weight: 500;
    }
    
    .zw-progress-tab:hover {
      background: rgba(1, 174, 253, 0.2);
      border-color: #01AEFD;
    }
    
    .zw-progress-tab.active {
      background: linear-gradient(135deg, #01AEFD 0%, #015AFD 100%);
      border-color: #01AEFD;
    }
    
    .zw-progress-content {
      background: linear-gradient(135deg, rgba(1, 174, 253, 0.1) 0%, rgba(1, 90, 253, 0.1) 100%);
      border-radius: 15px;
      padding: 30px;
      border: 2px solid rgba(1, 174, 253, 0.2);
      min-height: 400px;
    }
    
    .zw-progress-item {
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      margin-bottom: 15px;
      border: 2px solid rgba(1, 174, 253, 0.2);
    }
    
    .zw-progress-item h4 {
      font-size: 18px;
      color: #01AEFD;
      margin-bottom: 8px;
    }
    
    .zw-progress-item p {
      font-size: 14px;
      color: #e0e0e0;
      line-height: 1.6;
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
      <a class="zw-nav-link" data-page="progress">Progress</a>
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
  let progressData = { week1: [], week2: [], week3: [], week4: [] };
  let currentPage = 'home';
  let searchQuery = '';
  let watchProgress = {};

  try {
    const saved = localStorage.getItem('zw-watch-progress');
    if (saved) watchProgress = JSON.parse(saved);
  } catch (e) {}

  function saveWatchProgress() {
    try {
      localStorage.setItem('zw-watch-progress', JSON.stringify(watchProgress));
    } catch (e) {}
  }

  function updateWatchProgress(id, season, episode, time, isDub = false) {
    watchProgress[id] = { season, episode, time, isDub, timestamp: Date.now() };
    saveWatchProgress();
  }

  const navLinks = navbar.querySelectorAll('.zw-nav-link');
  const searchInput = navbar.querySelector('#zw-search');
  const modalClose = overlay.querySelector('#zw-modal-close');
  const logo = navbar.querySelector('#zw-logo');

  function pauseAnyVideo() {
    const selectors = ['#zw-show-video', '#zw-movie-video', '#zw-video', '#zw-movie-video'];
    for (const sel of selectors) {
      const v = document.querySelector(sel) || overlay.querySelector(sel) || content.querySelector(sel);
      if (v && typeof v.pause === 'function') try { v.pause(); } catch(e) {}
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      pauseAnyVideo();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      currentPage = link.dataset.page;
      searchQuery = '';
      searchInput.value = '';
      renderPage();
    });
  });

  logo.addEventListener('click', () => {
    pauseAnyVideo();
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
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'zw-card';
    const thumbStyle = movie.cover ? `background-image: url('${movie.cover}');` : '';
    const tags = Array.isArray(movie.tags) ? movie.tags.join(' • ') : movie.tags || movie.category || '';
    card.innerHTML = `
      <div class="zw-card-thumbnail" style="${thumbStyle}">
        ${!movie.cover ? '🎬' : ''}
      </div>
      <div class="zw-card-info">
        <div class="zw-card-title">${movie.name}</div>
        <div class="zw-card-category">${tags}</div>
      </div>
    `;
    card.addEventListener('click', () => openMovieModal(movie));
    return card;
  }

  function createShowCard(show) {
    const card = document.createElement('div');
    card.className = 'zw-card';
    const thumbStyle = show.cover ? `background-image: url('${show.cover}');` : '';
    const totalEpisodes = (show.seasons || []).reduce((sum, s) => sum + (s.episodes || 0), 0);
    card.innerHTML = `
      <div class="zw-card-thumbnail" style="${thumbStyle}">
        ${!show.cover ? '📺' : ''}
      </div>
      <div class="zw-card-info">
        <div class="zw-card-title">${show.name}</div>
        <div class="zw-card-category">${(show.seasons||[]).length} Season${(show.seasons||[]).length > 1 ? 's' : ''} • ${totalEpisodes} Episodes</div>
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
    const movieId = movie.name.replace(/\s+/g, '-').toLowerCase();
    const progress = watchProgress[movieId];

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
        <div id="zw-movie-category">${Array.isArray(movie.tags) ? movie.tags.join(' • ') : movie.tags || movie.category || ''}</div>
      </div>
    `;

    const newClose = overlay.querySelector('#zw-modal-close');
    if (newClose) newClose.addEventListener('click', () => overlay.classList.remove('active'));

    const video = overlay.querySelector('#zw-movie-video');
    if (progress && video && progress.time) {
      try { video.currentTime = progress.time; } catch(e) {}
    }
    if (video) {
      video.addEventListener('timeupdate', () => {
        if (video.currentTime > 0) updateWatchProgress(movieId, null, null, video.currentTime);
      });
    }

    overlay.classList.add('active');
  }

  function openShowModal(show) {
    const showId = show.name.replace(/\s+/g, '-').toLowerCase();
    const progress = watchProgress[showId];

    let initialSeason = (show.seasons && show.seasons[0]) || {};
    let initialEpisode = 1;
    let initialTime = 0;
    let initialIsDub = false;

    if (progress) {
      const savedSeason = (show.seasons || []).find(s => (typeof s.season === 'string' ? s.season : (s.sname || `Season ${s.season}`)) === progress.season);
      if (savedSeason) {
        initialSeason = savedSeason;
        initialEpisode = progress.episode || 1;
        initialTime = progress.time || 0;
        initialIsDub = progress.isDub || false;
      }
    }

    const firstEpisode = initialSeason.names && initialSeason.names.length > 0 ?
      (initialSeason.names.find(e => e.ep === initialEpisode) || { ep: initialEpisode, name: `Episode ${initialEpisode}` }) :
      { ep: initialEpisode, name: `Episode ${initialEpisode}` };

    navLinks.forEach(l => l.classList.remove('active'));

    const tags = Array.isArray(show.tags) ? show.tags : (show.tags ? [show.tags] : []);
    const tagsHtml = tags.map(tag => `<span class="zw-tag">${tag}</span>`).join('');

    content.innerHTML = `
      <div id="zw-show-modal">
        <div id="zw-show-layout">
          <div id="zw-show-video-area">
            <div id="zw-show-video-container">
              <video id="zw-show-video" controls autoplay>
                <source src="${initialSeason.url || ''}${initialIsDub && initialSeason.dub ? 'Dub/' : ''}${firstEpisode.ep}.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div id="zw-show-description">
              <h3>${show.name}</h3>
              <div class="zw-show-meta">${(show.seasons||[]).length} Season${(show.seasons||[]).length > 1 ? 's' : ''} • ${(show.seasons||[]).reduce((sum, s) => sum + (s.episodes||0),0)} Episodes</div>
              <div class="zw-show-tags">${tagsHtml}</div>
            </div>
          </div>
          <div id="zw-episode-list">
            <div class="zw-episode-controls">
              <select class="zw-season-dropdown" id="zw-season-select"></select>
              <select class="zw-audio-dropdown" id="zw-audio-select" style="display: none;">
                <option value="sub">Sub</option>
                <option value="dub">Dub</option>
              </select>
            </div>
            <div id="zw-episodes"></div>
          </div>
        </div>
      </div>
    `;

    const seasonSelect = content.querySelector('#zw-season-select');
    const audioSelect = content.querySelector('#zw-audio-select');
    const episodesContainer = content.querySelector('#zw-episodes');
    const video = content.querySelector('#zw-show-video');

    let currentSeason = initialSeason;
    let currentEpisodeNum = initialEpisode;
    let currentIsDub = initialIsDub;

    (show.seasons || []).forEach((season, idx) => {
      const option = document.createElement('option');
      option.value = idx;
      const seasonName = typeof season.season === 'string' ? season.season : (season.sname || `Season ${season.season}`);
      option.textContent = seasonName;
      if (season === initialSeason) option.selected = true;
      seasonSelect.appendChild(option);
    });

    function updateAudioSelector() {
      if (currentSeason && currentSeason.dub) {
        audioSelect.style.display = 'block';
        audioSelect.value = currentIsDub ? 'dub' : 'sub';
      } else {
        audioSelect.style.display = 'none';
        currentIsDub = false;
      }
    }

    updateAudioSelector();

    seasonSelect.addEventListener('change', () => {
      currentSeason = show.seasons[seasonSelect.value];
      currentEpisodeNum = null;
      currentIsDub = false;
      updateAudioSelector();
      renderEpisodes(currentSeason);
    });

    audioSelect.addEventListener('change', () => {
      currentIsDub = audioSelect.value === 'dub';
      if (currentEpisodeNum) {
        const url = `${currentSeason.url}${currentIsDub ? 'Dub/' : ''}${currentEpisodeNum}.mp4`;
        const currentTime = video.currentTime || 0;
        video.src = url;
        video.load();
        video.currentTime = currentTime;
        video.play();
      }
    });

    function renderEpisodes(season) {
      episodesContainer.innerHTML = '';
      const count = season && season.episodes ? season.episodes : 0;
      for (let i = 1; i <= count; i++) {
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
          episodesContainer.querySelectorAll('.zw-episode-item').forEach(e => e.classList.remove('active'));
          item.classList.add('active');
          currentEpisodeNum = i;
          const url = `${season.url}${currentIsDub ? 'Dub/' : ''}${i}.mp4`;
          video.src = url;
          video.load();
          video.play();
        });
        episodesContainer.appendChild(item);
      }
    }

    renderEpisodes(initialSeason || { episodes: 0 });

    if (video) {
      video.addEventListener('loadedmetadata', () => {
        if (initialTime > 0 && Math.abs(video.currentTime - initialTime) > 1) {
          try { video.currentTime = initialTime; } catch(e) {}
        }
      }, { once: true });

      video.addEventListener('timeupdate', () => {
        if (currentEpisodeNum && video.currentTime > 0) {
          const seasonName = typeof currentSeason.season === 'string' ? currentSeason.season : (currentSeason.sname || `Season ${currentSeason.season}`);
          updateWatchProgress(showId, seasonName, currentEpisodeNum, video.currentTime, currentIsDub);
        }
      });
    }
  }

  function filterContent(items) {
    if (!searchQuery) return items || [];
    return (items || []).filter(item => (item.name || '').toLowerCase().includes(searchQuery));
  }

  function getContinueWatching() {
    const watching = [];
    const now = Date.now();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    for (const [id, data] of Object.entries(watchProgress)) {
      if (now - data.timestamp > thirtyDays) continue;
      const show = shows.find(s => s.name.replace(/\s+/g, '-').toLowerCase() === id);
      const movie = movies.find(m => m.name.replace(/\s+/g, '-').toLowerCase() === id);
      if (show) watching.push({ type: 'show', item: show, progress: data });
      else if (movie) watching.push({ type: 'movie', item: movie, progress: data });
    }
    return watching.sort((a, b) => b.progress.timestamp - a.progress.timestamp);
  }

  function renderPage() {
    if (currentPage === 'home') {
      content.innerHTML = `
        <div id="zw-hero">
          <div id="zw-hero-text">
            <h1>Zephware Library</h1>
            <p><i>your favorite content, at school, unblocked.</i></p>
          </div>
        </div>
      `;

      const continueWatching = getContinueWatching();
      if (continueWatching.length > 0) {
        const section = document.createElement('div');
        section.className = 'zw-section';
        section.innerHTML = `
          <div class="zw-section-title">Continue Watching</div>
          <div class="zw-row"></div>
        `;
        const row = section.querySelector('.zw-row');
        continueWatching.forEach(({ type, item }) => {
          if (type === 'show') row.appendChild(createShowCard(item));
          else if (type === 'movie') row.appendChild(createMovieCard(item));
        });
        content.appendChild(section);
      }

      const filteredMovies = filterContent(movies);
      const filteredShows = filterContent(shows);
      const filteredSounds = filterContent(sounds);

      if (filteredMovies.length > 0) renderSection('Movies', filteredMovies, 'movie');
      if (filteredShows.length > 0) renderSection('Shows', filteredShows, 'show');
      if (filteredSounds.length > 0) {
        const homeSounds = filteredSounds.slice(0, 14);
        renderSoundsSection('Sounds', homeSounds);
      }

    } else if (currentPage === 'movies') {
      const filteredMovies = filterContent(movies);
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

      const categories = [...new Set(filteredMovies.map(m => {
        if (Array.isArray(m.tags)) return m.tags[0];
        return m.tags || m.category || 'Other';
      }))];
      categories.forEach(cat => {
        const catMovies = filteredMovies.filter(m => {
          if (Array.isArray(m.tags)) return m.tags.includes(cat);
          return (m.tags || m.category) === cat;
        });
        renderSection(cat, catMovies, 'movie');
      });

    } else if (currentPage === 'shows') {
      const filteredShows = filterContent(shows);
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

      const categories = [...new Set(filteredShows.map(s => {
        if (Array.isArray(s.tags)) return s.tags[0];
        return s.tags || s.category || 'Other';
      }))];
      categories.forEach(cat => {
        const catShows = filteredShows.filter(s => {
          if (Array.isArray(s.tags)) return s.tags.includes(cat);
          return (s.tags || s.category) === cat;
        });
        renderSection(cat, catShows, 'show');
      });

    } else if (currentPage === 'sounds') {
      const filteredSounds = filterContent(sounds);
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

    } else if (currentPage === 'progress') {
      content.innerHTML = `
        <div class="zw-progress-tabs">
          <button class="zw-progress-tab active" data-week="week1">Week 1</button>
          <button class="zw-progress-tab" data-week="week2">Week 2</button>
          <button class="zw-progress-tab" data-week="week3">Week 3</button>
          <button class="zw-progress-tab" data-week="week4">Week 4</button>
        </div>
        <div class="zw-progress-content" id="zw-progress-display"></div>
      `;

      const tabs = content.querySelectorAll('.zw-progress-tab');
      const display = content.querySelector('#zw-progress-display');

      function showWeek(week) {
        const items = progressData[week] || [];
        display.innerHTML = '';
        if (items.length === 0) {
          display.innerHTML = '<div class="zw-empty-state"><div class="zw-empty-state-icon">📅</div><div class="zw-empty-state-text">No updates scheduled for this week</div></div>';
          return;
        }
        items.forEach(item => {
          const div = document.createElement('div');
          div.className = 'zw-progress-item';
          div.innerHTML = `<h4>${item.title}</h4><p>${item.description}</p>`;
          display.appendChild(div);
        });
      }

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          showWeek(tab.dataset.week);
        });
      });

      showWeek('week1');
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
    items.forEach(item => grid.appendChild(createSoundCard(item)));
    content.appendChild(section);
  }

  Promise.all([
    fetch(moviesUrl).then(r => r.json()).catch(() => []),
    fetch(showsUrl).then(r => r.json()).catch(() => []),
    fetch(soundsUrl).then(r => r.json()).catch(() => []),
    fetch(progressUrl).then(r => r.json()).catch(() => ({ week1: [], week2: [], week3: [], week4: [] }))
  ]).then(([moviesData, showsData, soundsData, progressJson]) => {
    movies = Array.isArray(moviesData) ? moviesData : [];
    shows = Array.isArray(showsData) ? showsData : [];
    sounds = Array.isArray(soundsData) ? soundsData : [];
    progressData = progressJson || { week1: [], week2: [], week3: [], week4: [] };

    if (!movies.length && !shows.length && !sounds.length) {
      movies = [{ name: "Demo Movie", category: "Action", url: "" }];
      shows = [{ name: "Demo Show", category: "Drama", url: "" }];
      sounds = [{ name: "Demo Sound", url: "https://www.myinstants.com/media/sounds/getfromytcom-the-angriest-scamme-1.mp3" }];
    }

    renderPage();
  }).catch(() => {
    movies = [{ name: "Demo Movie", category: "Action", url: "" }];
    shows = [{ name: "Demo Show", category: "Drama", url: "" }];
    sounds = [{ name: "Demo Sound", url: "https://www.myinstants.com/media/sounds/getfromytcom-the-angriest-scamme-1.mp3" }];
    renderPage();
  });
})();