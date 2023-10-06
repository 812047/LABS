function Food(parent, r){
    this.particles = parent; 
    this.r = r;
    this.loc = new JSVector(parent.x, parent.y);
    this.vel = new JSVector(Math.random()*4 - 2, Math.random()*4 - 2);
    this.lifespan = 300;

    this.isDead = false;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.c = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

Food.prototype.run = function () {
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
    ctx.arc(this.parent.x, this.parent.y, this.r, 2*Math.PI, 0);
    ctx.stroke();
    ctx.fill();
}

Food.prototype.update = function () {
}

Food.prototype.addParticle = function () {

} 

Food.prototype.removeParticle = function () {

}

