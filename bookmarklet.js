javascript:(function(){
  fetch('https://raw.githubusercontent.com/TrulyZeph/Zephware/main/main.js')
    .then(response => response.text())
    .catch(err => console.error('Error loading script:', err));
})();