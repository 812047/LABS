function Snake(loc, nOfC, vel, c) {
    this.loc = loc;//starting location of the snake
    this.nOfC = nOfC;//number of total circles on a snake
    this.c = c;//color of snake
    this.vel = vel;
    this.lineSegments = [];
}

Snake.prototype.run = function () {
    this.render();
    this.update();
    this.loadSegment();
    this.checkEdges();

}

Snake.prototype.update = function () {
    this.loc.add(this.vel)
}
Snake.prototype.render = function () {

    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    for (let ka = this.lineSegments.length - 1; ka > 0; ka--) {
        if (ka === 1) {
            
            ctx.strokeStyle = 'rgba(' + 12 + ',' + 120 + ',' + 12 + ',' + 1 + ')';
            ctx.fillStyle = 'rgba(' + 12 + ',' + 120 + ',' + 12 + ',' + 1 + ')';
            ctx.beginPath();
            ctx.moveTo(this.lineSegments[ka - 1].x, this.lineSegments[ka - 1].y );
            ctx.lineTo(this.lineSegments[ka].x, this.lineSegments[ka].y);
            ctx.lineWidth = 25 - ka;//meh
            ctx.lineCap = "round";//idk I found this
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        } else {
            
            ctx.beginPath();
            ctx.moveTo(this.lineSegments[ka - 1].x , this.lineSegments[ka - 1].y );
            ctx.lineTo(this.lineSegments[ka].x , this.lineSegments[ka].y );
            ctx.lineWidth = 25 - ka;//meh
            ctx.lineCap = "round";//idk I found this
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }





}
Snake.prototype.loadSegment = function () {
    for (let ki = 0; ki < this.nOfC; ki++) {
        this.lineSegments[ki] = new JSVector(this.loc.x - ki * 15, this.loc.y - ki * 15);//this is scuffed

    }
}

Snake.prototype.checkEdges = function () {
console.log(this.loc.x)
    if (this.loc.x > 800 ) {
        this.vel.x = this.vel.x * -1;// this.vel.y = this.vel.y * -1;//this is also very scuffed fix values at some point
    }
    if (this.loc.x < 0 ) {
        this.vel.x = this.vel.x * -1;// this.vel.y = this.vel.y * -1;
    }
    if (this.loc.y > 600 ) {
        // this.vel.x = this.vel.x * -1;
        this.vel.y = this.vel.y * -1;
    }
    if (this.loc.y < 0 ) {
        //this.vel.x = this.vel.x * -1; 
        this.vel.y = this.vel.y * -1;
    }
}
