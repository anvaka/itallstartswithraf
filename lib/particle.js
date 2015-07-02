module.exports = Particle;

function Particle() {
  this.x = Math.random() * 1000 - 500;
  this.y = Math.random() * 1000 - 500;
  this.dx = 0;
  this.dy = 0;
}
