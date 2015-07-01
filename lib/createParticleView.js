var createRenderer = require('unrender');
var THREE = createRenderer.THREE;
var unrender;
module.exports = createParticleView;

function createParticleView(particlesCount) {
  var positions = new Float32Array(particlesCount * 3);
  unrender = createRenderer(document.getElementById('scene'));
  unrender.camera().position.z = 500;
  unrender.particles(positions);
  var particleView = unrender.getParticleView()
  unrender.hitTest().destroy(); // not required for this demo

  // Quick and dirty to keep upstream code readability unobscure by details
  // we agument the view:
  particleView.getCoordinates = getCoordinates;
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
