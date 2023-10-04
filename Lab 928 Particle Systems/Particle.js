function Particle(loc, lifeSpan, diam){
    this.loc = loc.copy();
    this.originx = this.loc.x;
    this.vel = new JSVector(Math.random() * 4 - 2, Math.random * -3 - 2);
    this.acc = new JSVector(0, 0.05);
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