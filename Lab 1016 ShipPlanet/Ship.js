function Ship(x, y) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random()*6-3, Math.random()*6-3);
    this.acc = new JSVector(0, 0);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.8 + ')';
    this.p = 50;
}


Ship.prototype.run = function () {
    this.update();
    this.render();

    this.checkEdges();
}

Ship.prototype.update = function () {
    let d = this.loc.distance(planets.loc);
    console.log(d)
    if( d < 8000 ){
    this.acc = JSVector.subGetNew(planets.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(.05);
    }
    if( d < 900){
        this.acc = JSVector.subGetNew(planets.loc, this.loc);
        this.acc.normalize();
        this.acc.multiply(0.08);
    }
    this.vel.add(this.acc);
    this.vel.limit(5);
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
    ctx.translate(this.loc.x, this.loc.y);
    ctx.rotate(this.vel.getDirection() + Math.PI/2)
    console.log(this)

    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    //body
    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.lineTo(-10, 10);
    ctx.lineTo(0, 0);
    ctx.lineTo(10, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //flame
    let c = "rgb(240,80,0)";
    ctx.strokeStyle = c;
    ctx.fillStyle = c;
    ctx.moveTo(0, 15);
    ctx.lineTo(-4, 20);
    this.p += Math.random() * 3 - 1.5;
    if (this.p > 80 || this.p < 20) this.p = 50;
    ctx.lineTo(0, this.p);
    ctx.lineTo(4, 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill()
    ctx.restore();
    }


