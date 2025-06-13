function createProduct(scene) {
  const group = new THREE.Group();

  // Mattress
  const mattress = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.3, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xdddddd })
  );
  mattress.position.y = 0.3;
  mattress.name = "Mattress";
  group.add(mattress);

  // Headboard
  const headboard = new THREE.Mesh(
    new THREE.BoxGeometry(3, 1, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x884422 })
  );
  headboard.position.set(0, 0.8, -0.75);
  headboard.name = "Headboard";
  group.add(headboard);

  // Legs (4 cylinder legs)
  const legGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.3, 16);
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });

  const legPositions = [
    [-1.3, 0.15, 0.65], [1.3, 0.15, 0.65],   // Front
    [-1.3, 0.15, -0.65], [1.3, 0.15, -0.65]  // Back
  ];

  legPositions.forEach((pos, i) => {
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    leg.position.set(...pos);
    leg.name = `Leg ${i + 1}`;
    group.add(leg);
  });

  // Add to scene
  group.position.set(0, 0, 0);
  scene.add(group);
  return group;
}

