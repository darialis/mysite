const material = new THREE.MeshLambertMaterial({
  color: 0xFF1493,
  emissive: 0x111111,
});

const scene = new THREE.Scene();

const frontSpot = new THREE.SpotLight(0xeeeece);
frontSpot.position.set(1000, 1000, 1000);
scene.add(frontSpot);

const frontSpot2 = new THREE.SpotLight(0xddddce);
frontSpot2.position.set(-500, -500, -500);
scene.add(frontSpot2);


/** Elements that aren't the focus of the example */
scene.background = new THREE.Color(0xFFFFFF);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs').appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 1.3, 500, 6, 6, 20);

const mesh = new THREE.Mesh(geometry, material);

mesh.scale.x = 0.1;
mesh.scale.y = 0.1;
mesh.scale.z = 0.1;

scene.add(mesh);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;
  mesh.rotation.z += 0.005;

  renderer.render(scene, camera);
};

animate();