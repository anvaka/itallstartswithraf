var createRenderer = require('unrender');

module.exports = createParticleView;

function createParticleView(particlesCount) {
  var positions = new Float32Array(particlesCount * 3);
  var unrender = createRenderer(document.getElementById('scene'));
  unrender.camera().position.z = 500;
  unrender.particles(positions);

  return unrender.getParticleView();
}
