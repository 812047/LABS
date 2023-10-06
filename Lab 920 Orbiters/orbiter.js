function Orbiter(parent, rad, col, a, av){
    this.mover = parent; 
    this.loc = new JSVector(parent.loc.x, parent.loc.y);
    this.rad = rad;
    this.orbitalRadius = 35;
    this.c = col;
    this.angle = a;
    this.angularVelocity = av;
}

Orbiter.prototype.run = function(){
    this.update();
    this.render();
}

Orbiter.prototype.render = function(){
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath;
    ctx.moveTo(this.loc.x, this.loc.y)
    ctx.arc(this.loc.x, this.loc.y, this.rad, 2*Math.PI, 0);
    ctx.stroke();
    ctx.fill();
}

Orbiter.prototype.update = function(){
    this.loc.x = this.mover.loc.x + Math.cos(this.angle)*this.orbitalRadius;
    this.loc.y = this.mover.loc.y + Math.sin(this.angle)*this.orbitalRadius;
    this.angle += this.angularVelocity;
   
}