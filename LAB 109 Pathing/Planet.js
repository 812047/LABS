function Planet(x, y, diam) {
    this.loc = new JSVector(x*40  , y*40  );
    this.acc = new JSVector(0, 0);
    this.vel = new JSVector(0, 0);
    this.diam = diam;
    let red = Math.floor(Math.random() * 100);
    let green = Math.floor(Math.random() * 100);
    let blue = Math.floor(Math.random() * 100);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 1 + ')';
}   



Planet.prototype.run = function () {
    this.render();

}



Planet.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.rect(this.loc.x, this.loc.y, this.diam, this.diam);
    ctx.stroke();
    ctx.fill();

}
