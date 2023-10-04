
function Mover(x, y, dx, dy, diam, type = "") {
  //this.x = x; this.y = y;
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(-0.01, 0.01);
  this.diam = diam;
  this.type = type;
  // this.clr = "rgba(0,255,255,255)";
  this.isOverlapping = false;
}


//  placing methods in the prototype (every mover shares functions)
Mover.prototype.run = function () {
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
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
Mover.prototype.addForces = function () {
  
  if(movers[movers.length-1].type == "attractor"){
    movers[movers.length-1].type = "repulsor";
    console.log(movers[movers.length-1].type);
  }else if(movers[movers.length-1].type == "repulsor"){
    movers[movers.length-1].type = "attractor";
    console.log(movers[movers.length-1].type);
  }

}

// renders a mover to the canvas
Mover.prototype.render = function () {

  let ctx = context;
  if (this.type === "normal") {//this is just setting color of normal mover
    ctx.strokeStyle = "rgba(255,0,0,255)";
    ctx.fillStyle = "rgba(255,0,0,255)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  } else if (this.type === "attractor") {//ditto with normal 
    ctx.strokeStyle = "rgba(255,255,0,255)";
    ctx.fillStyle = "rgba(255,255,0,255)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  }
  else if (this.type === "repulsor") {//ditto with normal 
    ctx.strokeStyle = "rgba(0,255,255,255)";
    ctx.fillStyle = "rgba(0,255,255,255)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
  }
}



Mover.prototype.update = function () {

//  let d1 = this.loc.distance(movers[movers.length - 2].loc);//attraction
  let d2 = this.loc.distance(movers[movers.length - 1].loc);//repulsion
  
  if (movers[movers.length - 1].type == "attractor" && d2 < 200) {//attraction

    this.acc = JSVector.subGetNew(movers[movers.length - 1].loc, this.loc);

    this.acc.normalize;
    this.acc.multiply(0.0008);//yeah this is important to be very small 
    this.vel.add(this.acc);
  //  this.vel.limit(1.8);
    this.loc.add(this.vel);
  }
  if (movers[movers.length - 1].type == "repulsor" && d2 < 200) {//repulsion
    
    this.acc = JSVector.subGetNew(this.loc, movers[movers.length - 1].loc);
    this.acc.normalize;
    this.acc.multiply(0.0008);//yeah this is important to be very small 
    this.vel.add(this.acc);
  //  this.vel.limit(1.8);
    this.loc.add(this.vel);
  }


    this.vel.add(this.acc);
    this.vel.limit(2);
    if(this.type === "attractor" || this.type === "repulsor"){


    this.vel.limit(1);//limit kinda scuffed

    }
    this.loc.add(this.vel);


}



