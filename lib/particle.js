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

Particle.prototype.boom = function() {
  var angle = Math.random() * Math.PI * 2;
  var r = Math.random() * 100 - ( 100 / 2 );
  this.dx = r * Math.cos( angle );
  this.dy = r * Math.sin( angle );
}
