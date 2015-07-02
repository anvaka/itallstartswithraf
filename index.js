var particlesCount = 50000;
var particleView = require('./lib/createParticleView.js')(particlesCount);
var particles = require('./lib/createParticleObject.js')(particlesCount);
particleView.show('HELLO FRIENDS!', particles);

var target = {x: 0, y: 0};
var moveParticles = false;

document.body.addEventListener('mousemove', setNewTarget, true);
document.body.addEventListener('mousedown', boom, true);
document.body.addEventListener('keydown', handleKey, true);

frame();
function frame() {
  requestAnimationFrame(frame);
  renderParticles();
}

function renderParticles() {
  var coordinates = particleView.coordinates();

  for (var i = 0; i < particlesCount; ++i) {
    var p = particles[i];

    if (moveParticles) {
      p.moveTo(target.x, target.y);
    }

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
  if (!moveParticles) {
    moveParticles = true;
    // Skip first round of boom
    return;
  }
  for (var i = 0; i < particlesCount; ++i) {
    var p = particles[i];
    p.boom();
  }
}

function handleKey(e) {
  if (e.which === 27) {
    particleView.show('OKAY :)', particles);
    moveParticles = false;
  }
}
