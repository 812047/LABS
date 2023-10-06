function Plant(x , y, lifeSpan, diam) {
    this.loc = new JSVector(x, y);
    this.lifeSpan = lifeSpan;
    this.diam = diam;
    this.isDead = false;
    this.spawnTime = 150;
    this.foods = [];
}


Plant.prototype.run = function () {
    this.update();
    this.render();
    this.runFoods();

    this.lifeSpan--;
    this.spawnTime--;

    if (this.lifeSpan < 0) {
        this.isDead = true;
    }
    if(this.spawnTime < 0){
        Plant.prototype.loadFoods(3);
        spawnTime = 150;
    }
}

Plant.prototype.update = function () {
    if (this.isDead === true) {
        particles.splice(this);
    }
}

Plant.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = "rgb(55,244,0)";
    ctx.fillStyle = "rgb(55,244,0)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
}

Plant.prototype.loadFoods = function (n) {

    let r = 15;

    for(let i = 0; i < n; i ++){
    this.foods[i] = new Food(this, r)
    }
}

Plant.prototype.runFoods = function () {
    for (let i = 0; i < this.foods.length; i++) {
        this.foods[i].run();
    }
}