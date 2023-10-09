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
    console.log("run")

    this.lifeSpan--;
    this.spawnTime--;

    if (this.lifeSpan < 0) {
        this.isDead = true;
    }
    if(this.spawnTime < 0){
        this.loadFoods();
        this.spawnTime = 150;
    }
}

Plant.prototype.update = function () {
    if (this.isDead === true) {
       // Plant.splice(); idk fix this
    }
}

Plant.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = "rgba(55,244,0,0)";
    ctx.fillStyle = "rgba(55,244,0,0)";
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
}

Plant.prototype.loadFoods = function () {

    let r = 15;
    console.log("loadFoods")
    for(let i = foods.length; i < 1; i ++){
    this.foods[i] = new Food(this, r);
    console.log(this.foods[i])
    console.log(this)
    }
}

Plant.prototype.runFoods = function () {
    for (let i = 0; i < this.foods.length; i++) {
        this.foods[i].run();
    }
}