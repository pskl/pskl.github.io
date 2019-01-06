var container, camera, scene;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

container = document.createElement('div');
container.id = 'visualisation';
header = document.getElementsByClassName('site-header')[0];
header.appendChild(container);
container.addEventListener('click', start, false);
canvasHeight = parseInt(window.getComputedStyle(header).getPropertyValue('min-height'), 10);
var renderer = new THREE.WebGLRenderer( {preserveDrawingBuffer: true, alpha : true} );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, canvasHeight);
renderer.autoClearColor = false;
container.appendChild(renderer.domElement);

start();
animate();

function start() {
  renderer.clear();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(rand_offset(50), rand_offset(50), rand_offset(50));

  var geometry_black = new THREE.Geometry();
  var geometry_grey = new THREE.Geometry();

  var material_black = new THREE.LineBasicMaterial({ color: '#000000', linewidth: 5});
  var material_grey = new THREE.LineBasicMaterial({ color: '#808080', linewidth: 3});

  for ( var i = 0; i < Math.random()*100; i ++ ) {
    var vertex = new THREE.Vector3();
    vertex.x = rand_offset();
    vertex.y = rand_offset();
    vertex.z = rand_offset();
    if (Math.round(Math.random()) == 1) {
      geometry_grey.vertices.push(vertex);
    } else {
      geometry_black.vertices.push(vertex);
    }
  }

  var mesh_black = new THREE.Line(geometry_black, material_black);
  var mesh_grey = new THREE.Line(geometry_grey, material_grey);

  mesh_black.name = 'mesh_black';
  mesh_grey.name = 'mesh_grey'
  scene.add(mesh_black);
  scene.add(mesh_grey);

  document.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth/2;
  windowHalfY = window.innerHeight/2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, canvasHeight );
  camera.lookAt(scene.getObjectByName("mesh_black").position);
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 10;
  mouseY = (event.clientY - windowHalfY) * 10;
}

function render() {
  camera.position.x += (mouseX - camera.position.x) * .01;
  camera.position.y += (- mouseY - camera.position.y ) * .04;
  camera.lookAt(scene.getObjectByName("mesh_black").position);
  renderer.render( scene, camera );
}

function animate(){
  requestAnimationFrame(animate);
  render();
}

function rand_offset(boundary = 500) {
  return Math.floor((Math.round(Math.random()) * 2 - 1) * Math.floor(boundary));
}