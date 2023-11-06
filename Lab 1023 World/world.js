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

  this.loadMovers(1, this.ctxMain, this.ctxMini, this.dims.width, this.dims.height);//why is this 673

  //reduce world to fit inside of mini Canvas
  this.scaleX = 0.1;
  this.scaleY = 0.1;

  // add an event handler such that the a, s, w, d keys
  // will reposition the canvas within the world.
  window.addEventListener("keypress", function (event) {
    switch (event.code) {
      case "KeyW":
       if (world.cnvMainLoc.y/2 > world.dims.top){
          world.cnvMainLoc.y -= 20;
       }
          
        break;
      case "KeyS":
       if ((world.cnvMainLoc.y - 300 < world.dims.bottom)){//300 is the mini rect height
          world.cnvMainLoc.y += 20;
       }
        break;
      case "KeyA":
        if (world.cnvMainLoc.x/2 > world.dims.left){
       
        world.cnvMainLoc.x -= 20;
        }
        break;
      case "KeyD":
       if ((world.cnvMainLoc.x - 400 < world.dims.right)){//400 is the mini rect width
       
        world.cnvMainLoc.x += 20;

       }
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


   this.ctxMini.translate(this.cnvMainLoc.x*(this.scaleX)/2, this.cnvMainLoc.y*(this.scaleY)/2);//translation of Mini canvi

  this.ctxMini.strokeStyle = "rgb(255, 100, 100);"
  this.ctxMini.fillStyle = "rgba(255, 100, 100, 0);"
  this.ctxMini.beginPath();

  this.ctxMini.rect(this.dims.width/20, this.dims.height/20, 80, 60);



  this.ctxMini.stroke();
  this.ctxMini.closePath();
  this.ctxMain.restore();
  this.ctxMini.restore();

  this.ctxMain.save();

  this.ctxMain.translate(-this.cnvMainLoc.x/2, -this.cnvMainLoc.y/2);//A lot of stuff is off by 2x bc I just halved the speed of the mini rectangle

  this.ctxMini.save();
  this.ctxMini.beginPath();
  this.ctxMini.strokeStyle = "rgb(255, 100, 100)";
  this.ctxMini.fillStyle = "rgb(255, 100, 100)";
  this.ctxMini.rect(this.dims.width / 2 * this.scaleX, 0, 1, this.dims.height * this.scaleY);//mini axi
  this.ctxMini.rect(0, this.dims.height / 2 * this.scaleY, this.dims.width * this.scaleX, 1);
  this.ctxMini.stroke();
  this.ctxMini.closePath();
  this.ctxMini.restore();
  this.ctxMini.save();


  this.ctxMain.strokeStyle = "rgb(255, 100, 100)";
  this.ctxMain.fillStyle = "rgb(255, 100, 100);";
  this.ctxMain.beginPath();
  this.ctxMain.rect(0, this.dims.left*2, 2, this.dims.height * 2);//main axi
  this.ctxMain.rect(this.dims.top-500, 0, this.dims.width * 2, 2);
  this.ctxMain.stroke();
  this.ctxMain.closePath();
  this.ctxMain.restore();
  this.ctxMini.restore();
  for (let i = 0; i < this.movers.length; i++) {//run movers 
    this.movers[i].run();//idk why its right here

  }
}

World.prototype.loadMovers = function (numMovers, ctx1, ctx2, w, h) {
  for (let i = 0; i < numMovers; i++) {
    let diam = 10;
   let x = (Math.random()*this.dims.width/2) 
    let y = (Math.random()*this.dims.height/2) 

    let loc = new JSVector(x, y);
    let v = 12;//one value still does the same thing
    let dx = Math.random() * v - (v/2);
    let dy = Math.random() * v - (v/2);
    let vel = new JSVector(dx, dy);
    this.movers.push(new Mover(loc, vel, diam, ctx1, ctx2, w, h));
  }
}