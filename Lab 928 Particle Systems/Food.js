function Food(parent, r){
    this.plant = parent; 
    this.r = r;
    this.loc = new JSVector(parent.loc.x, parent.loc.y);
    this.vel = new JSVector(Math.random()*4 - 2, Math.random()*4 - 2);
    this.acc = new JSVector(0,0)
    this.lifespan = 300;

    this.isDead = false;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

Food.prototype.run = function () {
    this.render();
    this.update();


    this.lifespan --;
    
    if(this.lifespan < 0){
        this.isDead = true;
    }

}

Food.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath;
    ctx.moveTo(this.loc.x, this.loc.y)
    ctx.arc(this.loc.x, this.loc.y, this.r, 2*Math.PI, 0);
    ctx.stroke();
    ctx.fill();
}

Food.prototype.update = function () {
    this.acc.multiply(0);//yeah this is important to be very small 
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.vel.limit(2);
}

Food.prototype.addParticle = function () {

} 

Food.prototype.removeParticle = function () {

}

