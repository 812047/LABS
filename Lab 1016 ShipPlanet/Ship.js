function Ship(x, y) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(0,0);
    this.acc = new JSVector(0, 0);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.8 + ')';
    this.p = 50;
}


Ship.prototype.run = function () {
    this.render();
    this.update();

    this.checkEdges();
}

Ship.prototype.update = function () {
 
   
    let d = Math.sqrt((this.loc.x - planets[0].loc.x) * (this.loc.x - planets[0].loc.x) + (this.loc.y - planets[0].loc.y) * (this.loc.y - planets[0].loc.y));
    console.log(d);
    this.acc = JSVector.subGetNew(planets[0].loc, this.loc);
    console.log(this.acc);
    this.acc.multiply(0.002);//yeah this is important to be very small 
    this.vel.add(this.acc);
    this.vel.limit(1.8);
    this.loc.add(this.vel);

    

}

Ship.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = canvas.height;
}
Ship.prototype.render = function () {
    let ctx = context;
    ctx.save();
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    
    ctx.translate(this.loc.x, this.loc.y);
    this.acc.normalize();
    ctx.rotate(this.vel.getDirection() + Math.PI/2)
    //ctx.rotate(this.loc.angleBetween(planets[0].loc) + Math.PI/2)
    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.lineTo(-10, 10);
    ctx.lineTo(0, 0);
    ctx.lineTo(10, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    let c = "rgb(240,80,0)";
    ctx.strokeStyle = c;
    ctx.fillStyle = c;
    ctx.moveTo(0, 15);
    ctx.lineTo(-4, 20);
    this.p += Math.random()*3-1.5;
    if(this.p > 80 || this.p < 20) this.p = 50;
    ctx.lineTo(0, this.p);
    ctx.lineTo(4,20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill()
    ctx.restore();
    }


