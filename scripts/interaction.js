function setupInteractions(scene, camera, renderer, productGroup) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const infoPanel = document.getElementById('info-panel');

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(productGroup.children);

    document.body.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
  }

  function onClick(event) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(productGroup.children);

    if (intersects.length > 0) {
      const selected = intersects[0].object;
      selected.material.emissive = new THREE.Color(0x333333);

      infoPanel.textContent = selected.name;
      infoPanel.style.display = 'block';

      setTimeout(() => {
        selected.material.emissive.set(0x000000);
        infoPanel.style.display = 'none';
      }, 1000);
    }
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', onClick);
}


