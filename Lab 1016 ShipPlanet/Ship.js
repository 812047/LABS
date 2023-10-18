function Ship(x, y) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(0,0);
    this.acc = new JSVector(0, 0);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.8 + ')';
}


Ship.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
}

Ship.prototype.update = function () {
    let ctx = context;
   
    let d = Math.sqrt((this.loc.x - planets[0].loc.x) * (this.loc.x - planets[0].loc.x) + (this.loc.y - planets[0].loc.y) * (this.loc.y - planets[0].loc.y));


if(d < 10000){
this.acc = JSVector.subGetNew(planets[0].loc, this.loc);

this.acc.normalize;
this.acc.multiply(0.00008);//yeah this is important to be very small 
this.vel.add(this.acc);
//  this.vel.limit(1.8);
this.loc.add(this.vel);
    this.loc.add(this.vel);
    this.vel.limit(1)
}
ctx.save();
ctx.translate(this.loc.x, this.loc.y);
ctx.rotate(this.loc.angleBetween(planets[0].loc));
console.log(this.loc.angleBetween(planets[0].loc));

    ctx.translate(this.loc.x, this.loc.y);
   
    ctx.scale(0.005, 0.005)
   // ctx.translate(0, 0);
   ctx.rotate(this.loc.angleBetween(planets[0].loc));
   ctx.restore();

}
Ship.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = canvas.height;
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
    ctx.lineTo(this.loc.x, this.loc.y);
    let p = Math.random()*75+25;
    ctx.strokeStyle = "rgb(240,80,0)";
    ctx.fillStyle = "rgb(240,80,0)";
    ctx.fillRect(this.loc.x - (p), this.loc.y-3.5, p, 7)
    ctx.stroke();
    ctx.fill();
    console.log(this.loc.x + ", " + this.loc.y);
    // ctx.lineTo(0, 0);
    // ctx.lineTo(0 + 20, 0);

    // ctx.lineTo(0 - 20, 0 + 20);
    // ctx.lineTo(0, 0);
    // ctx.lineTo(0 - 20, 0 - 20)
    // ctx.lineTo(0 + 20, 0);
    // ctx.lineTo(0, 0);
    // let p = Math.random()*75+25;
    // ctx.strokeStyle = "rgb(240,80,0)";
    // ctx.fillStyle = "rgb(240,80,0)";
    // ctx.fillRect(0 - (p), 0-3.5, p, 7)
    // ctx.stroke();
    // ctx.fill();


}