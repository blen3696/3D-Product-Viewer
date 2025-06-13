let scene, camera, renderer, controls, product;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(5, 3, 5);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#webgl'), antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  product = createProduct(scene);
  addLighting(scene);
  setupInteractions(scene, camera, renderer, product);

  window.addEventListener('resize', onWindowResize);

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  animateCamera(camera);
  renderer.render(scene, camera);
}

init();

