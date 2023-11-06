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
    this.runSegment();
    this.checkEdges();
}

Snake.prototype.update = function () {
this.loc.add(this.vel);

}
Snake.prototype.render = function () {

    // let ctx = context;
     for (let i = 0; i < this.nOfC; i++) {
    
    // ctx.strokeStyle = this.c;//color 
    // ctx.fillStyle = this.c;//color


    //     ctx.beginPath();

    //  ctx.roundRect(
    //         this.loc.x
    //         + 3 * (this.sWidth * ((this.nOfC / (this.nOfC + i)))),//offset is scuffed fix later
    //         this.loc.y
    //         + 3 * (this.sHeight * ((this.nOfC / (this.nOfC + i)))),//offset is scuffed fix later
    //         this.sWidth * ((this.nOfC / (this.nOfC + i))),//gradual decrease in value
    //         this.sHeight * ((this.nOfC / (this.nOfC + i))),//gradual decrese in value
    //         45);//this just straight up makes them circles)
    //     // console.log(this.loc.x + "   " + this.loc.y)

    //     ctx.stroke();
    //     ctx.fill();
    this.lineSegments[i] = new Segment(this.loc, this.nOfC, this.sWidth, this.sHeight, this.c)
    //console.log(this.loc + " " + this.nOfC + " " + this.sWidth + " " + this.sHeight + " " + this.c)
    //console.log(this.lineSegments[i])
    }
    
}

Snake.prototype.runSegment = function () {
    for (let i = 0; i < this.lineSegments.length; i++) {
      this.lineSegments[i].run();
    }
  }
Snake.prototype.checkEdges = function () {

    if (this.loc.x > 640 - this.sWidth) {//yeah idk my broswer is defaulting the canvas to 640-480 for some reason
        this.vel.x = this.vel.x * -1;// this.vel.y = this.vel.y * -1;//this is also very scuffed fix values at some point
    }
    if (this.loc.x < 0 + this.sWidth) {
        this.vel.x = this.vel.x * -1;// this.vel.y = this.vel.y * -1;
    }
    if (this.loc.y > 480 - this.sHeight) {
        // this.vel.x = this.vel.x * -1;
        this.vel.y = this.vel.y * -1;
    }
    if (this.loc.y < 0 + this.sHeight) {
        //this.vel.x = this.vel.x * -1; 
        this.vel.y = this.vel.y * -1;
    }
}
