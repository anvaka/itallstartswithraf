var createParticleView = require('./lib/createParticleView.js');
var particlesCount = 100;
var particleView = createParticleView(particlesCount);

requestAnimationFrame(frame);

function frame() {
  requestAnimationFrame(frame);
  renderParticles();
}

function renderParticles() {
  var coordinates = particleView.coordinates();

  for (var i = 0; i < particlesCount; ++i) {
    coordinates[i * 3] = Math.random() * 1000 - 500;
    coordinates[i * 3 + 1] = Math.random() * 1000 - 500;
    coordinates[i * 3 + 2] = 0;
  }

  particleView.coordinates(coordinates);
}
