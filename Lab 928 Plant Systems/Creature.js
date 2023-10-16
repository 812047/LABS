function Creature(x, y, r){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
    this.acc = new JSVector(0,0);
    this.rad = r;
    this.lifeSpan = 1500;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

Creature.prototype.run = function () {
    this.render();
    this.update();
    this.checkEdges();
}


Creature.prototype.checkEdges = function () {
    if (this.loc.x - this.rad > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0 - this.rad) this.loc.x = canvas.width;
    if (this.loc.y - this.rad > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0 - this.rad) this.loc.y = canvas.height;
  }
Creature.prototype.update = function () {
   // for(let i = 0; i < this.creatures.length; i ++){
//let d = this.loc.distance(foods[i]);
 // if(d < 300){
   // this.acc = JSVector.subGetNew(foods[i].loc, this.loc);

  //  this.acc.normalize;
   // this.acc.multiply(0.0008);

    this.vel.add(this.acc);
  // this.vel.limit(1.8);
    this.loc.add(this.vel);
    }
//}
//}



Creature.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath;
    ctx.moveTo(this.loc.x, this.loc.y)
    ctx.arc(this.loc.x, this.loc.y, this.rad, 2 * Math.PI, 0);
    ctx.stroke();
    ctx.fill();
}