
function Mover(x, y, diam, shape) {
  //this.x = x; this.y = y;
  this.shape = shape;
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*2-1, -Math.random()*1);

  this.acc = new JSVector(0, 0.005)
  this.diam = diam;
  this.lifeSpan = Math.random()*4500 + 750;

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
}


//  placing methods in the prototype (every mover shares functions)
Mover.prototype.run = function () {
  this.update();
  this.render();
}





// renders a mover to the canvas
Mover.prototype.render = function () {

  let ctx = context;
  ctx.strokeStyle = this.c;
  ctx.fillStyle = this.c;
  ctx.save();
  ctx.beginPath();

  if(this.shape === 0){
ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
ctx.translate(this.loc.x, this.loc.y);
ctx.rotate(this.vel.getDirection() + Math.PI/2)
  }else if (this.shape === 1){
ctx.rect(this.loc.x, this.loc.y, this.diam + this.diam/4, this.diam + this.diam/4);
  }
  else if (this.shape === 2){
    ctx.translate(this.loc.x+5, this.loc.y+5);
    ctx.rotate(this.vel.getDirection() + Math.PI/2)
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(10, 10);
    ctx.lineTo(10, 0);
    ctx.lineTo(0, 0);
  }
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}
Mover.prototype.update = function () {
this.lifeSpan--;
  if(this.lifeSpan < 0 || this.loc.y > canvas.height + 100){
    movers.splice(this, 1);
    console.log(movers.length)
  }

  this.vel.add(this.acc);
  this.loc.add(this.vel);


}

