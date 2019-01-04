var container, stats;
var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
  container = document.createElement('div');
  container.className = 'visualisation';
  header = document.getElementsByClassName('site-header')[0];
  canvasHeight = parseInt(window.getComputedStyle(header).getPropertyValue('min-height'), 10)
  canvasBackgroundColor = window.getComputedStyle(header).getPropertyValue('background-color')
  header.appendChild(container);
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 1000);
  scene = new THREE.Scene();

  var geometry = new THREE.Geometry();
  var material = new THREE.LineBasicMaterial( { color: '#000000', linewidth: 10} );
  var geometry = new THREE.Geometry();

  for ( var i = 0; i < 100; i ++ ) {
    var vertex = new THREE.Vector3();
    max = 1000;
    vertex.x = Math.floor((Math.round(Math.random()) * 2 - 1) * Math.floor(max));
    vertex.y = Math.floor((Math.round(Math.random()) * 2 - 1) * Math.floor(max));
    vertex.z = Math.floor((Math.round(Math.random()) * 2 - 1) * Math.floor(max));
    geometry.vertices.push( vertex );
  }

  var mesh = new THREE.Line(geometry, material);
  mesh.name = 'main_mesh';
  scene.add(mesh);
  renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true, alpha : true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, canvasHeight );
  renderer.sortObjects = false;
  renderer.autoClearColor = false;
  container.appendChild( renderer.domElement );
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, canvasHeight );
}

function onDocumentMouseMove(event) {
  mouseX = ( event.clientX - windowHalfX ) * 10;
  mouseY = ( event.clientY - windowHalfY ) * 10;
}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  camera.position.x += ( mouseX - camera.position.x ) * .05;
  camera.position.y += ( - mouseY - camera.position.y ) * .05;
  camera.lookAt(scene.getObjectByName("main_mesh").position);
  renderer.render( scene, camera );
}
