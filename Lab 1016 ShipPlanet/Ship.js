function Ship(x, y) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random()*4-2,Math.random()*4-2);
    this.acc = new JSVector(0,0);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
}


Ship.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
}

Ship.prototype.update = function () {


this.loc.add(this.vel);
}
Ship.prototype.checkEdges = function () {
    if (this.loc.x  > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = canvas.height;
  }
Ship.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;



    ctx.beginPath();
  //  ctx.moveTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x + 20, this.loc.y);

    ctx.lineTo(this.loc.x - 20, this.loc.y + 20);
    ctx.lineTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x - 20, this.loc.y - 20)
ctx.lineTo(this.loc.x + 20, this.loc.y);

    ctx.stroke();
    ctx.fill();
    ctx.save();
    console.log(this.loc.x + ", " + this.loc.y);
    
ctx.translate(this.loc.x,this.loc.y);
ctx.rotate(Math.PI/2);
ctx.scale(1, 1);
ctx.restore();
   
}