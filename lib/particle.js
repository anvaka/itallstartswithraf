module.exports = Particle;

function Particle() {
  this.x = Math.random() * 1000 - 500;
  this.y = Math.random() * 1000 - 500;
  this.dx = 0;
  this.dy = 0;
}

Particle.prototype.moveTo = function(x, y) {
  var angle = Math.atan2( this.y - y, this.x - x );
  this.dx -= Math.cos( angle );
  this.dy -= Math.sin( angle );
  this.x += this.dx;
  this.y += this.dy;
  this.dx *= .95;
  this.dy *= .95;
}
