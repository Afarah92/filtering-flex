window.addEventListener("load", init);
function init() {
  // --- Global

const FRAME_DURATION = 1000 / 60; // 60fps frame 
const getTime = typeof performance === 'function' ? performance.now : Date.now;

// ---- anmod animation frame

const boxRafDelta = document.querySelector('#marquee .inner');
const MAX_POSITION = boxRafDelta.clientWidth / 2;
let positionRafDelta = 0;
let lastRafUpdate = getTime();
  let speed = 5;

function animateRafDelta() {
  const now = getTime();
  const delta = (now - lastRafUpdate) / FRAME_DURATION;

  positionRafDelta += speed * delta;

  // nustil position
  if (positionRafDelta > MAX_POSITION) {
    positionRafDelta = positionRafDelta - MAX_POSITION;
  }

  // opdatere position
  boxRafDelta.style.transform = `translateX(-${ positionRafDelta }px)`;

  // opdatere tid
  lastRafUpdate = now;

  requestAnimationFrame(animateRafDelta);
}

animateRafDelta();

}
