var container, camera, scene;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

container = document.createElement('div');
container.id = 'canvas-container';
header = document.getElementsByClassName('site-header')[0];
header.appendChild(container);
container.addEventListener('click', start, false);
canvasHeight = parseInt(window.getComputedStyle(header).getPropertyValue('min-height'), 10);
var renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, canvasHeight);
renderer.autoClearColor = false;
container.appendChild(renderer.domElement);

start();
animate();

function start() {
  renderer.clear();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.set(rand_offset(100), rand_offset(100), rand_offset(100));

  var geometries = Array(3).fill().map(() => new THREE.Geometry());
  var materials = [
    new THREE.LineBasicMaterial({ color: '#808080', linewidth: 3 }),
    new THREE.LineBasicMaterial({ color: '#000000', linewidth: 3 }),
    new THREE.LineBasicMaterial({ color: '#404040', linewidth: 3 })
  ];

  for (var i = 0; i < Math.random() * 200; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = rand_offset();
    vertex.y = rand_offset();
    vertex.z = rand_offset();
    geometries[Math.floor(Math.random() * 3)].vertices.push(vertex);
  }

  geometries.map((geo, i) => {
      var line = new THREE.Line(geo, materials[i]);
      line.name = `mesh_${i}`;
      scene.add(line);
      return line;
  });

  document.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, canvasHeight);
  camera.lookAt(scene.position);
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 10;
  mouseY = (event.clientY - windowHalfY) * 10;
}

function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.015;
  camera.position.y += (-mouseY - camera.position.y) * 0.045;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function rand_offset(boundary = 500) {
  return Math.floor((Math.round(Math.random()) * 2 - 1) * Math.floor(boundary));
}
