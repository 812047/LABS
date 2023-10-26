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
  this.loadMovers(2800, this.ctxMain, this.ctxMini, this.dims.width, this.dims.height);

  //reduce world to fit inside of mini Canvas
  this.scaleX = 0.1;
  this.scaleY = 0.1;

  // add an event handler such that the a, s, w, d keys
  // will reposition the canvas within the world.
  window.addEventListener("keypress", function (event) {
    switch (event.code) {
      case "KeyW":
        if (world.cnvMainLoc.y + 100 > world.dims.top)
          world.cnvMainLoc.y -= 20;
        break;
      case "KeyS":
        if (world.cnvMainLoc.y + world.cnvMain.height - 100 < world.dims.bottom)
          world.cnvMainLoc.y += 20;
        break;
      case "KeyA":
        if (world.cnvMainLoc.x + 100 > world.dims.left)
          world.cnvMainLoc.x -= 20;
        break;
      case "KeyD":
        if (world.cnvMainLoc.x + world.cnvMain.width - 100 < world.dims.right)
          world.cnvMainLoc.x += 20;
        break;
        break;
    }
  }, false);
}//++++++++++++++++++++++++++++++  end world constructor


// run the world in animation
World.prototype.run = function () {

  this.ctxMain.strokeStyle = 'rgb(255, 0, 255)';//  color of outer border on Main canvas
  this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);//  clear the canvas

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++  run the movers
  this.ctxMain.save();
//  this.ctxMain.translate(this.cnvMainLoc.x, this.cnvMainLoc.y);
  //  move the main canvas inside of the world (translate according to this.cnvMainLoc)

  this.ctxMini.clearRect(0,0, this.cnvMini.width, this.cnvMini.height);
  this.ctxMini.save();
  this.scaleX = 0.1;
  this.scaleY = 0.1;
  //  center rect in the miniCanvas
  this.ctxMini.strokeStyle = "rgb(255, 100, 100);"
  this.ctxMini.fillStyle = "rgba(255, 100, 100, 0);"
  this.ctxMini.beginPath();
  this.ctxMini.rect((this.dims.width/2)*this.scaleX, (this.dims.height/2)*this.scaleY, 80, 60);
  this.ctxMini.stroke();
  //this.ctxMini.fill();
  this.ctxMini.closePath();

    for(let i = 0; i < this.movers.length; i ++){
    this.movers[i].run();
  }


  this.ctxMain.restore();
  this.ctxMini.restore();


  //+++++++++++++++++++++++++++++++++++++++++++++++++++++ Draw the main and mini Canvas with bounds and axes

  this.ctxMain.save();
  this.ctxMini.save();
  this.ctxMini.translate(this.cnvMainLoc.x, this.cnvMainLoc.y);
  // translate cnvMain according to the location of the canvas in the world
  // draw the bounds of the world in cnvMain
  // Add axis in the main Canvas
  //draw x and y axes on miniMap
  // scale cnvMini - contain the entire world (scaleX, and scaleY)
  //center cnvMini in world
  //outline box inside of cnvMini
  //draw x and y axes on miniMap
  this.ctxMini.strokeStyle = "rgb(255, 100, 100);"
  this.ctxMini.fillStyle = "rgb(255, 100, 100);"
  this.ctxMini.beginPath();
  this.ctxMini.rect(this.dims.width/2*this.scaleX, 0, 1, this.dims.height*this.scaleY);//this could be done with a line but I am struggling to get the line to work
  this.ctxMini.rect(0, this.dims.height/2*this.scaleY, this.dims.width*this.scaleX, 1);

  this.ctxMini.stroke();
  this.ctxMini.closePath();

    this.scaleX = 0.2;
    this.scaleY = 0.2;
  this.ctxMain.strokeStyle = "rgb(255, 100, 100);"
  this.ctxMain.fillStyle = "rgb(255, 100, 100);"
  this.ctxMain.beginPath();
  this.ctxMain.rect((this.dims.width/2)*this.scaleX, 0, 2, this.dims.height*this.scaleY);
  this.ctxMain.rect(0, this.dims.height/2*this.scaleX, this.dims.width*this.scaleX, 2);

  this.ctxMain.stroke();
  this.ctxMain.closePath();


  this.ctxMain.restore();
  this.ctxMini.restore();

}

//  Load mover array
//  Load each context into each Mover
World.prototype.loadMovers = function (numMovers, ctx1, ctx2, w, h) {
  for (let i = 0; i < numMovers; i++) {
    let diam = 10;
    let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
    let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
    let loc = new JSVector(x, y);
    let dx = Math.random() * 2 - 1;
    let dy = Math.random() * 2 - 1;
    let vel = new JSVector(dx, dy);
    //each mover gets a reference to both canvas objects
    this.movers.push(new Mover(loc, vel, diam, ctx1, ctx2, w, h));
  }
}


