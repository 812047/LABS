function Segment(loc, nOfC, sWidth, sHeight, c) {
    this.loc = loc;//starting location of the Segment
    this.nOfC = nOfC;//number of total circles on a Segment
    this.sWidth = sWidth;// the starting width on the head of the Segment
    this.sHeight = sHeight;
    this.c= c;
}

Segment.prototype.run = function () {
    this.render();
    this.update();
}

Segment.prototype.update = function () {

}
Segment.prototype.render = function () {
    let ctx = context;

        ctx.strokeStyle = this.c;//color 
        ctx.fillStyle = this.c;//color
       
        ctx.beginPath();
        // ctx.roundRect(
        //     this.loc.x
        //     + 4 * (this.sWidth * ((this.nOfC / (this.nOfC + i)))),//offset is scuffed fix later
        //     this.loc.y
        //     + 4 * (this.sHeight * ((this.nOfC / (this.nOfC + i)))),//offset is scuffed fix later
        //     this.sWidth * ((this.nOfC / (this.nOfC + i))),//gradual decrease in value
        //     this.sHeight * ((this.nOfC / (this.nOfC + i))),//gradual decrese in value
        //     45);//this just straight up makes them circles)
        // // console.log(this.loc.x + "   " + this.loc.y)
       // ctx.roundRect(this.loc.x, this.loc.y , this.sWidth, this.sHeight, 45)
        
        ctx.stroke();
        ctx.fill();
        
    }



