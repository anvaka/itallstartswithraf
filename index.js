var particlesCount = 1000;
var particleView = require('./lib/createParticleView.js')(particlesCount);
var particles = require('./lib/createParticleObject.js')(particlesCount);

requestAnimationFrame(frame);
function frame() {
  requestAnimationFrame(frame);
  renderParticles();
}

function renderParticles() {
  var coordinates = particleView.coordinates();

  for (var i = 0; i < particlesCount; ++i) {
    var p = particles[i];

    coordinates[i * 3] = p.x;
    coordinates[i * 3 + 1] = p.y;
    coordinates[i * 3 + 2] = 0;
  }

  particleView.coordinates(coordinates);
}
