function Snake(x, y, lS) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(0,0);
    this.acc = new JSVector(0, 0);
    let red = Math.floor(Math.random() * 200);
    let green = Math.floor(Math.random() * 100);
    let blue = Math.floor(Math.random() * 100);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.3 + ')';
    this.lineSegments = [];
    this.lS = lS;
    this.loadSegments();
}


Snake.prototype.run = function () {

    this.render();
    this.update();

    this.checkEdges();
}

Snake.prototype.update = function () {
      this.acc = JSVector.subGetNew(planets.loc, this.loc);
     this.acc.normalize();
     this.acc.multiply(0.02);//ya know this code really has never worked
     this.vel.add(this.acc)
     this.vel.limit(.4);
     this.loc.add(this.vel);
    // for (let i = 0; i < this.lS; i++) {
    //    // this.lineSegments[i].add(this.vel)
    // }
}

Snake.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = canvas.height;
}
Snake.prototype.render = function () {
    let ctx = context;
    ctx.save();
    ctx.translate(this.loc.x, this.loc.y);
    ctx.rotate(this.vel.getDirection() + Math.PI / 2)

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
    ctx.restore();
    for (let i = 0; i < this.lS-1; i++) {
        ctx.save();
        ctx.strokeStyle = this.c;
        ctx.fillStyle = this.c;
        ctx.translate(this.loc.x, this.loc.y);
        ctx.rotate(this.vel.getDirection() + Math.PI/2);
        ctx.beginPath();

        ctx.moveTo(0 , this.lineSegments[i].y);
        ctx.lineTo(0,
        this.lineSegments[i+1].y);
        ctx.lineWidth = 15-i;
        ctx.lineCap = "round";
      
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    }


}

Snake.prototype.loadSegments = function () {
    for (let i = 0; i < this.lS; i++) {
        this.lineSegments.push(new JSVector(0,  (i * 15) + 20));

    }
}
