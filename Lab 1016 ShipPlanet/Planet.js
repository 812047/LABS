function Planet(x, y, diam) {
    this.loc = new JSVector(x, y);
    this.acc = new JSVector(0, 0);
    this.vel = new JSVector(0, 0);
    this.diam = diam;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.count = 0;
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
}   



Planet.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
}

Planet.prototype.update = function () {
    let d = this.loc.distance(ships.loc)

    if (d < 400) {
        this.acc = JSVector.subGetNew(this.loc, ships.loc);

        this.acc.multiply(0.00006);
        this.vel.add(this.acc);
        this.vel.limit(1.8)
        this.loc.add(this.vel);
       
    }
    if (d < 50) {
        this.loc.x = Math.random() * canvas.width;
        this.loc.y = Math.random() * canvas.height;
        this.count++;
        console.log(this.count)
    }

}

Planet.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
}
Planet.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.loc.x = Math.random() * canvas.width;
    if (this.loc.x < 0) this.loc.x = Math.random() * canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = Math.random() * canvas.height;
    if (this.loc.y < 0) this.loc.y = Math.random() * canvas.height;
}