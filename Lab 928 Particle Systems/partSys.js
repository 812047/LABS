function PartSys(x,y){
    this.loc = new JSVector(x,y);
    this.particles = [];
    this.lifespan = 300;
}

PartSys.prototype.run = function () {
    this.update();
    this.render();
}

PartSys.prototype.render = function () {

}

PartSys.prototype.update = function () {

}

PartSys.prototype.addParticle = function () {

} 

PartSys.prototype.removeParticle = function () {

}