function Obstacle(x, y) {
    this.loc = new JSVector(x*40 , y*40 );
    this.sz = 40;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
}

Obstacle.prototype.run = function () {
    this.render();
}

Obstacle.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.rect(this.loc.x, this.loc.y, this.sz, this.sz);
    ctx.stroke();
    ctx.fill();

}