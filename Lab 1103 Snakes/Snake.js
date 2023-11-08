function Snake(loc, nOfC, vel, c, type) {
    this.loc = loc;//starting location of the snake
    this.nOfC = nOfC;//number of total circles on a snake
    this.c = c;//color of snake
    this.vel = vel;
    this.lineSegments = [];
    this.ko = 0;
}

Snake.prototype.run = function () {
    this.render();
    this.update();

     this.loadSegment();

    this.checkEdges();

}

Snake.prototype.update = function () {
this.vel.add(this.vel);
this.vel.limit(2)
}
Snake.prototype.render = function () {

    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    for (let ka = this.lineSegments.length-1 ; ka > 0; ka--) {
        if(ka == 1){
            ctx.strokeStyle = 'rgba(' + 12 + ',' + 120 + ',' + 12 + ',' + 0.34 + ')';
            ctx.fillStyle = 'rgba(' + 12 + ',' + 120 + ',' + 12 + ',' + 0.34 + ')';
        ctx.beginPath();
        ctx.moveTo(this.lineSegments[ka-1].x += this.vel.x, this.lineSegments[ka-1].y += this.vel.y);
        ctx.lineTo(this.lineSegments[ka].x += this.vel.x, this.lineSegments[ka].y += this.vel.y);
        ctx.lineWidth = 25 - ka;//meh
        ctx.lineCap = "round";//idk I found this
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        }else{
            ctx.beginPath();
        ctx.moveTo(this.lineSegments[ka-1].x += this.vel.x, this.lineSegments[ka-1].y += this.vel.y);
        ctx.lineTo(this.lineSegments[ka].x += this.vel.x, this.lineSegments[ka].y += this.vel.y);
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
        this.lineSegments[ki] = new JSVector(this.loc.x - ki*12, this.loc.y - ki*12 );

    }
}

Snake.prototype.checkEdges = function () {

    if (this.loc.x > 640 - this.sWidth) {
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
