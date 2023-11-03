function Snake(loc, vel, nOfC, sDiam, c) {
    this.loc = loc;//starting location of the snake
    this.vel = vel;//velocity of the snake
    this.nOfC = nOfC;//number of total circles on a snake
    this.sDiam = sDiam;// the starting diam on the head of the snake
    this.c = c;//color of snake
}

Snake.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
}

Snake.prototype.update = function () {

}
Snake.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;//color 
    ctx.fillStyle = this.c;//color
   // let xCDist;//x offset of cirlces
   // let yCDist;//y offset of circles
    for (let i = 0; i < this.nOfC; i++) {//creates this.nOfC number of circles
        ctx.beginPath();
        ctx.arc(this.loc.x + (this.sDiam * (this.nOfC - i)),
            this.loc.y + (this.sDiam * (this.nOfC - i)),
                this.sDiam * ((this.nOfC - i) / this.nOfC),//gradually the circles get smaller
                Math.PI * 2, 0, false);//normal stuff
        ctx.stroke();
        ctx.fill();
    }
}
Snake.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) this.vel = -this.vel;//reverses the velocity of the snake
    if (this.loc.x < 0) this.loc.x = this.vel = -this.vel;
    if (this.loc.y > canvas.height) this.vel = -this.vel;
    if (this.loc.y < 0) this.loc.y = this.vel = -this.vel;
}
