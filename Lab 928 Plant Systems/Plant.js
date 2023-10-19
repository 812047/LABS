function Plant(x, y, lifeSpan, diam) {
    this.loc = new JSVector(x, y);
    this.lifeSpan = lifeSpan;
    this.diam = diam;
    this.isDead = false;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.d = 'rgb(' + red + ',' + green + ',' + blue + ')';
    this.spawnTime = 400;
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
        this.foods.splice();
    }
    if (this.spawnTime < 0) {
        this.loadFoods(6);
        this.spawnTime = 400;
    }
}

Plant.prototype.update = function () {
    if (this.isDead === true) {
      //  splice(this);
    }
}

Plant.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = this.d;
    ctx.fillStyle = this.d;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill();
}

Plant.prototype.loadFoods = function (n) {
    let r = 15;
    for (let i = 0; i < n; i++) {
        console.log("loadFoods")
       
        this.foods.push(new Food(this, r, this.d));
    }
  
}

Plant.prototype.runFoods = function () {
    for (let i = 0; i < this.foods.length; i++) {
        this.foods[i].run();
    }
}