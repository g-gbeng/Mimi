const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.children);
const radius = 420;
const total = items.length;

items.forEach((item, index) => {
  const angle = (360 / total) * index;
  item.dataset.angle = angle;

  item.style.transform = `
    translate(-50%, -50%)
    rotateY(${angle}deg)
    translateZ(${radius}px)
  `;
});

let rotation = 0;

function animate() {
  rotation += 0.25;
  carousel.style.transform = `rotateY(${rotation}deg)`;

  items.forEach(item => {
    if (item.tagName !== 'VIDEO') return;

    const angle = (parseFloat(item.dataset.angle) + rotation) % 360;
    const isFront = angle < 25 || angle > 335;

    if (isFront) {
      item.play().catch(() => {});
    } else {
      item.pause();
      item.currentTime = 0;
    }
  });

  requestAnimationFrame(animate);
}

animate();
