let angle = 0;
const radius = 5;
const speed = 0.005;
let autoRotate = true;

function animateCamera(camera) {
  if (!autoRotate) return;

  angle += speed;
  const x = radius * Math.sin(angle);
  const z = radius * Math.cos(angle);
  camera.position.x = x;
  camera.position.z = z;
  camera.lookAt(0, 0, 0);
}


