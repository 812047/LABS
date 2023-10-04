
function Mover(x, y, dx, dy, diam) {
  //this.x = x; this.y = y;
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
  this.diam = diam;
  this.orbiters = [];
  this.loadOrbiters(8)
  this.isOverlapping = false;
}


//  placing methods in the prototype (every mover shares functions)
Mover.prototype.run = function () {
  this.checkEdges();
  this.update();
  this.render();
  this.runOrbiter();
}


//  Check to see if movers leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function () {
  if (this.loc.x - this.diam > canvas.width) this.loc.x = 0;
  if (this.loc.x < 0 - this.diam) this.loc.x = canvas.width;
  if (this.loc.y - this.diam > canvas.height) this.loc.y = 0;
  if (this.loc.y < 0 - this.diam) this.loc.y = canvas.height;
}

Mover.prototype.checkOverlapping = function () {
  this.isOverlapping = false;
  let b = movers;
  for (let i = 0; i < b.length; i++) {
    if (this != b[i]) {
      let d = Math.sqrt((this.x - b[i].x) * (this.x - b[i].x) + (this.y - b[i].y) * (this.y - b[i].y));//vector for this is a no go
      if (d < this.diam + b[i].diam) {
        this.isOverlapping = true;
        return;
      }
    }
  }
}

// renders a mover to the canvas
Mover.prototype.render = function () {

  let ctx = context;
    ctx.strokeStyle = "rgb(255,0,0)";
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  }



Mover.prototype.update = function () {

    this.acc.multiply(0.0008);//yeah this is important to be very small 
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(2);

}

Mover.prototype.loadOrbiters = function(n){
  n = Math.floor(Math.random()*n+4);
  for(let i = 0; i < n; i++){

    let r = 5;
    let angularVelocity = 0.06;
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    this.orbiters[i] = new Orbiter(this, r, color , 2*Math.PI*i/n, angularVelocity);
    
  }
}

Mover.prototype.runOrbiter = function(){
  for(let i = 0; i < this.orbiters.length; i ++){
    this.orbiters[i].run();
  }
}


