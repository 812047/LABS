function Creature(x, y, d){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
    this.acc = new JSVector(0,0);
    this.diam = d;
    this.lifeSpan = 1500;


}

Creature.prototype.run = function () {
    this.update();
    this.render();
}

Creature.prototype.update = function () {
    for(let i = 0; i < this.foods.length; i ++){
let d = this.loc.distance(foods[i]);
  if(d < 300){
    this.acc = JSVector.subGetNew(movers[movers.length - 1].loc, this.loc);

    this.acc.normalize;
    this.acc.multiply(0.0008);//yeah this is important to be very small 
    this.vel.add(this.acc);
  //  this.vel.limit(1.8);
    this.loc.add(this.vel);
    }
}
}



Creature.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath;
    ctx.moveTo(this.loc.x, this.loc.y)
    ctx.arc(this.loc.x, this.loc.y, this.r, 2 * Math.PI, 0);
    ctx.stroke();
    ctx.fill();
}