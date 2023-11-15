function Snake(x, y) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(0, 0);
    this.acc = new JSVector(0, 0);
    // let red = Math.floor(Math.random() * 200);
    // let green = Math.floor(Math.random() * 100);
    // let blue = Math.floor(Math.random() * 100);
    // this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
    this.lineSegments = [];
    this.numberOfSegments = 400;
    this.lineSegmentsLength = 44;
    for (let i = 1; i < this.numberOfSegments-1; i++) {
        this.lineSegments.push(new JSVector(0, 0));

    }

}


Snake.prototype.run = function () {
    this.update();
    this.checkEdges();
}

Snake.prototype.update = function () {
    this.acc = JSVector.subGetNew(planets.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(8);// this code really has never worked
    this.vel = this.acc;

    this.vel.add(this.acc);
    this.vel.limit(5)
    this.loc.add(this.vel);

    this.updateSegments(0, this.loc);
    for (let i = 0; i < this.lineSegments.length-1; i++) {
        this.updateSegments(i + 1, this.lineSegments[i]);
       
    }
}

Snake.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = canvas.height;
}
Snake.prototype.render = function (nextI, a) {
    let ctx = context;


    ctx.save();
    let red = 0+(-nextI*14);
    let green = 50+(nextI*14);
    let blue = 70+(nextI*8);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;

    ctx.translate(this.lineSegments[nextI].x, this.lineSegments[nextI].y);
    ctx.rotate(a + Math.PI/2);
    ctx.beginPath();


    ctx.lineTo(0,0);
    ctx.lineWidth = this.lineSegmentsLength-nextI+1
    ctx.lineCap = "round";

    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.restore();



}


Snake.prototype.updateSegments = function (nextI, lineSegments) {
    let dx = lineSegments.x - this.lineSegments[nextI].x;
    let dy = lineSegments.y - this.lineSegments[nextI].y;
    let angle = Math.atan2(dy, dx);
    this.lineSegments[nextI].x = lineSegments.x - Math.cos(angle) * (this.lineSegmentsLength-nextI+1);
    this.lineSegments[nextI].y = lineSegments.y - Math.sin(angle) * (this.lineSegmentsLength-nextI+1);
    this.render(nextI, angle);
}