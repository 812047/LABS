
function Mover(x, y, dx, dy, diam) {
  //this.x = x; this.y = y;
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0)
  this.diam = diam;
  this.orbiters = [];
  this.loadOrbiters(6)
}


//  placing methods in the prototype (every mover shares functions)
Mover.prototype.run = function () {
  this.checkEdges();
  this.update();
  this.render();
  this.runOrbiter();
  this.checkOverlapping();//Does more than just checking 
}


//  Check to see if movers leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function () {
  if (this.loc.x - this.diam > canvas.width) this.loc.x = 0;
  if (this.loc.x < 0 - this.diam) this.loc.x = canvas.width;
  if (this.loc.y - this.diam > canvas.height) this.loc.y = 0;
  if (this.loc.y < 0 - this.diam) this.loc.y = canvas.height;
}

Mover.prototype.checkOverlapping = function () {
  let b = movers;
  for (let i = 0; i < b.length; i++) {
    if (this != movers[i]) {

      let d = Math.sqrt((this.loc.x - movers[i].loc.x) * (this.loc.x - movers[i].loc.x) + (this.loc.y - movers[i].loc.y) * (this.loc.y - movers[i].loc.y));

      if (d < this.diam + movers[i].diam) {
        this.isOverlapping = true;
        if (movers[i].diam > this.diam) {
          this.vel = movers[i].vel;
          this.orbiters.splice(0);//this is very scuffed idk
        } else {
          movers[i].orbiters.splice(0)
          movers[i].vel = this.vel;
        }

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

Mover.prototype.loadOrbiters = function (n) {
  n = Math.floor(Math.random() * n + 4);
  for (let i = 0; i < n; i++) {

    let r = 5;
    let angularVelocity = 0.04;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    this.orbiters[i] = new Orbiter(this, r, color, 2 * Math.PI * i / n, angularVelocity);

  }
}

Mover.prototype.runOrbiter = function () {
  for (let i = 0; i < this.orbiters.length; i++) {
    this.orbiters[i].run();
  }
}


