var createRenderer = require('unrender');
var THREE = window.THREE = createRenderer.THREE;

var randPoints = require('three.randompoints');
var typeface = require('three.regular.helvetiker');
THREE.typeface_js.loadFace(typeface);

var unrender;

module.exports = createParticleView;

function createParticleView(particlesCount) {
  var positions = new Float32Array(particlesCount * 3);
  var domParent = document.getElementById('scene');
  unrender = createRenderer(domParent);
  unrender.camera().position.z = 500;
  unrender.particles(positions);

  var particleView = unrender.getParticleView();

  unrender.hitTest().destroy(); // not required for this demo

  updateSizes(particleView, 3);

  // Quick and dirty to keep upstream code readability unobscure by details
  // we agument the view:
  particleView.getCoordinates = getCoordinates;
  particleView.show = show;
  domParent.focus();
  return particleView;
}

function getCoordinates(x, y) {
  var vector = new THREE.Vector3(
     (x / window.innerWidth) * 2 - 1,
    -(y / window.innerHeight) * 2 + 1,
    0.5);

  var camera = unrender.camera();
  vector.unproject(camera);
  var dir = vector.sub(camera.position).normalize();
  var distance = -camera.position.z / dir.z;
  return camera.position.clone().add(dir.multiplyScalar(distance));
}

function show(text, particles) {
  var textGeo = new THREE.TextGeometry(text, {
    height: 100,
    size: 42
  });

  textGeo.computeBoundingSphere();
  textGeo.computeVertexNormals();
  var r = textGeo.boundingSphere.radius;
  var destinations = randPoints.inGeometry(textGeo, particles.length);
  for (var i = 0; i < particles.length; ++i) {
    particles[i].x = destinations[i].x - r;
    particles[i].y = destinations[i].y;
    particles[i].z = destinations[i].z;
  }
}

function updateSizes(particleView, size) {
  var sizes = particleView.sizes();
  for (var i = 0; i < sizes.length; ++i) {
    sizes[i] = size;
  }
  particleView.sizes(sizes);
}
