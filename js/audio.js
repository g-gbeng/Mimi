const music = document.getElementById('bgMusic');

// Function to start music if not already playing
function startMusic() {
  if (music.paused) {
    music.play().catch(() => {}); // catch errors if autoplay blocked
    localStorage.setItem('musicPlaying', 'true'); // remember across pages
  }
}

// Check if music should already be playing from previous page
if (localStorage.getItem('musicPlaying') === 'true') {
  music.play().catch(() => {});
}

// Listen for first user interaction
['click', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
  document.addEventListener(evt, startMusic, { once: true });
});
