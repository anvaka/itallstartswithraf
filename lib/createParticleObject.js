var Particle = require('./particle.js');

module.exports = createParticleObject;

function createParticleObject(count) {
  var particles = [];
  for (var i = 0; i < count; ++i) {
    particles.push(new Particle());
  }
  return particles;
}
