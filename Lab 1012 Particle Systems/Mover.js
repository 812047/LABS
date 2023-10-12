
function Mover(x, y, diam, shape) {
  //this.x = x; this.y = y;
  this.shape = shape;
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*1-0.5, -Math.random()*1);

  this.acc = new JSVector(0, 0.005)
  this.diam = diam;
  this.lifeSpan = Math.random()*15000 + 7500;

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
  ctx.beginPath();

  if(this.shape === 0){
ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  }else if (this.shape === 1){
ctx.rect(this.loc.x, this.loc.y, this.diam, this.diam);
  }
  ctx.stroke();
  ctx.fill();
  
}





Mover.prototype.update = function () {
this.lifeSpan--;
  if(this.lifeSpan < 0){
    movers.splice(this);
  }

  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.vel.limit(2);

}

