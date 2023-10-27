function World() {
  //  this is our main Canvas that will show only a small portion of the world
  this.cnvMain = document.getElementById('cnv1');
  this.ctxMain = this.cnvMain.getContext('2d');
  //This smaller canvas will show the entire world at one forth the size of the main canvas
  this.cnvMini = document.getElementById('cnv2');
  this.ctxMini = this.cnvMini.getContext('2d');
  //  Create a Vector that will move the Canvas location relative to the world
  this.cnvMainLoc = new JSVector(0, 0);

  this.dims = {//  object leteral that prvides bounds for the entire world
    top: -1500,
    left: -2000,
    bottom: 1500,
    right: 2000,
    width: 4000,
    height: 3000
  }
  this.movers = [];

  this.loadMovers(280, this.ctxMain, this.ctxMini, this.dims.width, this.dims.height);
  console.log(this.movers)

  //reduce world to fit inside of mini Canvas
  this.scaleX = 0.1;
  this.scaleY = 0.1;
  this.p = false;

  // add an event handler such that the a, s, w, d keys
  // will reposition the canvas within the world.
  window.addEventListener("keypress", function (event) {
    switch (event.code) {
      case "KeyW":
        if (world.cnvMainLoc.y + 100 > world.dims.top)
          world.cnvMainLoc.y -= 20;
          this.p = true;
          
        break;
      case "KeyS":
        if (world.cnvMainLoc.y + world.cnvMain.height - 100 < world.dims.bottom)
          world.cnvMainLoc.y += 20;
          this.p = true;
        break;
      case "KeyA":
        if (world.cnvMainLoc.x + 30 > world.dims.left)
          world.cnvMainLoc.x -= 20;
          this.p = true;

        break;
      case "KeyD":
        if (world.cnvMainLoc.x + world.cnvMain.width - 100 < world.dims.right)
          world.cnvMainLoc.x += 20;
          this.p = true;

        break;
    }
  }, false);
}//++++++++++++++++++++++++++++++  end world constructor


// run the world in animation
World.prototype.run = function () {
  this.ctxMain.strokeStyle = 'rgb(255, 0, 255)';//  color of outer border on Main canvas
  this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);//  clear the canvas
  this.ctxMain.save();
  this.ctxMini.clearRect(0, 0, this.cnvMini.width, this.cnvMini.height);// this is important don't mess with this
  this.ctxMini.save();
// this.ctxMini.translate((this.cnvMainLoc.x - this.dims.width / 2) * this.scaleX, (this.cnvMainLoc.y - this.dims.height / 2) * this.scaleY);
  //this.ctxMini.translate(this.cnvMainLoc.x*this.scaleX, this.cnvMainLoc.y*this.scaleY);
  this.ctxMain.translate((this.dims.width / 2 - 40), ((this.dims.height / 2)-30));
  this.ctxMini.strokeStyle = "rgb(255, 100, 100);"
  this.ctxMini.fillStyle = "rgba(255, 100, 100, 0);"
  this.ctxMini.beginPath();
  this.ctxMini.rect((this.dims.width / 2 ) * this.scaleX- 40, (this.dims.height / 2) * this.scaleY-30, 80, 60);//moveable rectangle
  this.ctxMini.stroke();
  this.ctxMini.closePath();
  this.ctxMain.restore();
  this.ctxMini.restore();

  this.ctxMain.save();
  this.ctxMain.translate(-world.cnvMainLoc.x, -world.cnvMainLoc.y);
  this.ctxMini.save();
  // this.ctxMain.translate(this.cnvMainLoc.x, this.cnvMainLoc.y);
  this.ctxMini.beginPath();//making the axi of the mini
  this.ctxMini.strokeStyle = "rgb(255, 100, 100)";
  this.ctxMini.fillStyle = "rgb(255, 100, 100)";
  this.ctxMini.rect(this.dims.width / 2 * this.scaleX, 0, 1, this.dims.height * this.scaleY);//mini axi
  this.ctxMini.rect(0, this.dims.height / 2 * this.scaleY, this.dims.width * this.scaleX, 1);
  this.ctxMini.stroke();
  this.ctxMini.closePath();
  this.ctxMini.restore();
  this.ctxMini.save();


  this.ctxMain.strokeStyle = "rgb(255, 100, 100)";//making the axi of large
  this.ctxMain.fillStyle = "rgb(255, 100, 100);";
  this.ctxMain.beginPath();
  this.ctxMain.rect((this.dims.width / 2) * this.scaleX*2, -this.dims.height / 2, 2, this.dims.height * 10);//main axi
  this.ctxMain.rect(-this.dims.width / 2, this.dims.height / 2 * this.scaleX*2, this.dims.width * 10, 2);
  this.ctxMain.stroke();
  this.ctxMain.closePath();
  this.ctxMain.restore();
  this.ctxMini.restore();
  for (let i = 0; i < this.movers.length; i++) {//run movers 
    this.movers[i].run();
  }
}

World.prototype.loadMovers = function (numMovers, ctx1, ctx2, w, h) {
  for (let i = 0; i < numMovers; i++) {
    let diam = 10;
    let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
    let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;

    let loc = new JSVector(x, y);
    let dx = Math.random() * 2 - 1;
    let dy = Math.random() * 2 - 1;
    let vel = new JSVector(dx, dy);
    this.movers.push(new Mover(loc, vel, diam, ctx1, ctx2, w, h));
  }
}


