function Planet (x, y, diam){
    this.loc = new JSVector(x,y);
    this.diam = diam;
    let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';
}


Planet.prototype.run = function (){
    this.update();
    this.render();
}

Planet.prototype.update = function (){

}

Planet.prototype.render = function (){
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
}