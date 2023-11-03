function Snake(loc, vel, nOfC, sWidth, sHeight, c) {
    this.loc = loc;//starting location of the snake
    this.vel = vel;//velocity of the snake
    this.nOfC = nOfC;//number of total circles on a snake
    this.sWidth = sWidth;// the starting width on the head of the snake
    this.sHeight = sHeight;
    this.c = c;//color of snake
    this.lineSegments = [];
}

Snake.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
}

Snake.prototype.update = function () {
    this.loc.add(this.vel);
    
}
Snake.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;//color 
    ctx.fillStyle = this.c;//color

    for (let i = 0; i < this.nOfC; i++) {
        ctx.beginPath();
        this.lineSegments.push(ctx.roundRect(
            this.loc.x
            + 3 * (this.sWidth * ((this.nOfC / (this.nOfC + i)))),//offset is scuffed fix later
            this.loc.y
            + 3 * (this.sHeight * ((this.nOfC / (this.nOfC + i)))),//offset is scuffed fix later
            this.sWidth * ((this.nOfC / (this.nOfC + i))),//gradual decrease in value
            this.sHeight * ((this.nOfC / (this.nOfC + i))),//gradual decrese in value
            45));//this just straight up makes them circles

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
