var container, stats;

var camera, scene, renderer;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

  container = document.createElement( 'div' );
  container.className = 'visualisation'
  header = document.getElementsByClassName('site-header')[0];
  canvasHeight = parseInt(window.getComputedStyle(header).getPropertyValue('min-height'), 10)
  canvasBackgroundColor = window.getComputedStyle(header).getPropertyValue('background-color')
  header.appendChild( container );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.set( 100000, 0, 3200 );

  scene = new THREE.Scene();

  var colors = [0xc1ffdd, 0xf8c9ff, 0xffffff ];
  var geometry = new THREE.Geometry();

  for ( var i = 0; i < 100; i ++ ) {

    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * 4000 - 2000;
    vertex.y = Math.random() * 4000 - 2000;
    vertex.z = Math.random() * 4000 - 2000;
    geometry.vertices.push( vertex );

    geometry.colors.push( new THREE.Color( colors[ Math.floor( Math.random() * colors.length ) ] ) );

  }

  var material = new THREE.PointsMaterial( { size: 5, vertexColors: THREE.FaceColors, depthTest: false, opacity: 0.2, sizeAttenuation: false, transparent: true } );

  var mesh = new THREE.Points( geometry, material );
  scene.add( mesh );

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

  camera.lookAt( scene.position );

  renderer.render( scene, camera );

}