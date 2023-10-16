function Ship(x, y) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(0,0);
    this.acc = new JSVector(0,0);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
}


Ship.prototype.run = function () {
    this.update();
    this.render();
}

Ship.prototype.update = function () {

    this.acc = JSVector.subGetNew(this.planets[0].loc, this.loc);

    this.acc.normalize;
    this.acc.multiply(0.0008);//yeah this is important to be very small 
    this.vel.add(this.acc);
  //  this.vel.limit(1.8);
    this.loc.add(this.vel);
}

Ship.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    
    ctx.beginPath();
    ctx.moveTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x + 20, this.loc.y);

    ctx.lineTo(this.loc.x - 20, this.loc.y + 20);
    ctx.lineTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x - 20, this.loc.y - 20)
ctx.lineTo(this.loc.x + 20, this.loc.y);
    ctx.stroke();
    ctx.fill();
}