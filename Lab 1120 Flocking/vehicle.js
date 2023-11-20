//  Vehicle constructor function +++++++++++++++++++++++++++++
function Vehicle(loc, vel) {
  this.loc = new JSVector(loc.x, loc.y);
  this.vel = new JSVector(vel.x, vel.y);
  this.acc = new JSVector(0, 0);
  this.desiredSep = 20;//  desired separation between vehicles
  this.scl = 5;
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.clr = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
  this.maxSpeed = document.getElementById("slider2").value;  // Get slider VAlue%%%%%%%%%%%%%%%%
  this.maxForce = document.getElementById("slider1").value;  // Get slider VAlue%%%%%%%%%%%%%%%%%
}

//  placing methods in the prototype 
Vehicle.prototype.run = function (vehicles) {
  this.flock(vehicles);
  this.update();
  this.checkEdges()
  this.render();
}

Vehicle.prototype.flock = function (vehicles) {
  //  flock force is the accumulation of all forces
  let flockForce = new JSVector(0, 0);
  // set up force vectors to be added to acc
  let sep = this.separate(vehicles);
  let ali = this.align(vehicles);
  let coh = this.cohesion(vehicles);
  //  set multiples via sliders 
  let sepMult = document.getElementById("slider3").value; // Get slider VAlue%%%%%%%%%%%%%%%%%%
  let aliMult = document.getElementById("slider4").value;;  // Get slider VAlue%%%%%%%%%%%%%%%%%%
  let cohMult = document.getElementById("slider5").value;;    // Get slider VAlue%%%%%%%%%%%%%%%%%%
  //  calculate three forces
  sep.multiply(sepMult);
  ali.multiply(aliMult);
  coh.multiply(cohMult);
  //  add each of these to flockForce
  flockForce.add(sep);
  flockForce.add(ali);
  flockForce.add(coh);
  this.acc.add(flockForce);
}
//+++++++++++++++++++++++++++++++++  Flocking functions
Vehicle.prototype.separate = function (v) {
  let count = 0;
  let diff = new JSVector(0, 0);
  let sum = new JSVector(0, 0);
  let sep = new JSVector(0, 0);
  for (let i = 0; i < v.length; i++) {
    let d = this.loc.distance(v[i].loc);
    if (d > 0 && d < this.desiredSep) {
      diff = diff.sub(this.loc, v[i].loc);
      diff.normalize();
      sum.add(diff)
      count++;
    }
  }
  if (count > 0) {
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    sep = sep.sub(sum, this.vel);
    sep.limit(this.maxForce);
    //applyForce(sep);
  }
  return sep;
}

Vehicle.prototype.align = function (v) {
  let count = 0;
  let neighbordist = 20;
  let sum = new JSVector(0, 0);
  let steer = new JSVector(0, 0);
  for (let i = 0; i < v.length; i++) {
    let d = this.loc.distance(v[i].loc)
    if ((d > 0) && (d < neighbordist)) {
      sum.add(v[i].vel);
      count++;
    }
  }
  if (count > 0) {
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    steer = steer.sub(sum, this.vel)
    steer.limit(this.maxForce);
    return steer;
  } else {
    return new JSVector(0, 0);
  }
}


Vehicle.prototype.cohesion = function (v) {
  let neighbordist = 50;
  let sum = new JSVector(0,0);
  let count = 0;
  let coh = new JSVector(0, 0);
  for(let i = 0; i < v.length; i ++){
    let d = this.loc.distance(v[i].loc)
    if((d > 0) && (d < neighbordist)) {
      sum.add(v[i].loc);
      count++;
    }
  }
  if( count > 0){
    sum.divide(count);
    coh.equals(sum);//this is very useless why don't you just make this into one variable?
  }
  return coh;
}

Vehicle.prototype.seek = function (target) {
  // A vector pointing from the location to the target
  let desired = JSVector.subGetNew(target, this.loc);
  let steer = JSVector.subGetNew(desired, this.vel);
  return steer;
}
//+++++++++++++++++++++++++++++++++  Flocking functions

Vehicle.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(1);
  this.loc.add(this.vel);
}

Vehicle.prototype.checkEdges = function () {
  if (this.loc.x > game.canvas.width) this.loc.x = 0;
  if (this.loc.x < 0) this.loc.x = game.canvas.width;
  if (this.loc.y > game.canvas.height) this.loc.y = 0;
  if (this.loc.y < 0) this.loc.y = game.canvas.height;
}

Vehicle.prototype.render = function () {
  let ctx = game.ctx;
  ctx.save();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection() + Math.PI / 2); //offset 90 degrees
  ctx.beginPath();
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.moveTo(0, -this.scl);
  ctx.lineTo(-this.scl, this.scl);
  ctx.lineTo(0, 0);
  ctx.lineTo(this.scl, this.scl);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

