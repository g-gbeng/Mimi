const carousel = document.querySelector('.carousel');
const items = carousel.children;
const itemCount = items.length;
const radius = 420; // distance from center

Array.from(items).forEach((item, index) => {
  const angle = (360 / itemCount) * index;
  item.style.transform = `
    translate(-50%, -50%)
    rotateY(${angle}deg)
    translateZ(${radius}px)
  `;

  // Auto-play videos
  if (item.tagName === 'VIDEO') {
    item.play();
  }
});
