var particlesCount = 1000;
var particleView = require('./lib/createParticleView.js')(particlesCount);
var particles = require('./lib/createParticleObject.js')(particlesCount);

var target = {x: 0, y: 0};

document.body.addEventListener('mousemove', setNewTarget, true);
document.body.addEventListener('mousedown', boom, true);

frame();
function frame() {
  requestAnimationFrame(frame);
  renderParticles();
}

function renderParticles() {
  var coordinates = particleView.coordinates();

  for (var i = 0; i < particlesCount; ++i) {
    var p = particles[i];

    p.moveTo(target.x, target.y);

    coordinates[i * 3] = p.x;
    coordinates[i * 3 + 1] = p.y;
    coordinates[i * 3 + 2] = 0;
  }

  particleView.coordinates(coordinates);
}

function setNewTarget(e) {
  target = particleView.getCoordinates(e.clientX, e.clientY);
}

function boom() {
  for (var i = 0; i < particlesCount; ++i) {
    var p = particles[i];
    p.boom();
  }
}
