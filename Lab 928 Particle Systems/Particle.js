function Particle(loc, lifeSpan, diam){
    this.loc = new JSVector(x, y);
    this.lifeSpan = lifeSpan;
    this.diam = diam;
    this.isDead = false;
    let colors = ["red", "orange", "yellow","green", "blue", "indigo", "violet"];
    this.color = colors[Math.floor(Math.random()* colors.length)]
}


Particle.prototype.run = function () {
    this.update();
    this.render();

    this.lifeSpan--;

    if(this.lifeSpan < 0){
        this.isDead = true;
    }
}

Particle.prototype.update = function (){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
}

Particle.prototype.render = function (){
  let ctx = context;
  ctx.strokeStyle = "rgb(255,0,0)";
  ctx.fillStyle = "rgb(255,0,0)";
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}