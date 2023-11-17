//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, dx, dy, diam) {
  this.loc = new JSVector(x, y); this.vel = new JSVector(dx, dy); this.acc = new JSVector(0, 0);
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.c = 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.5 + ')';

}


Bubble.prototype.run = function () {
  this.checkEdges();
  this.render();
   this.update();
  this.hive();
 //this.collectMiddle();
}


Bubble.prototype.collectMiddle = function () {
  for (let i = 0; i < bubbles.length; i++) {
    this.acc = JSVector.subGetNew(new JSVector(1000, 750), this.loc);
    this.acc.normalize();
    this.acc.multiply(.08);
    this.vel.add(this.acc);
    this.vel.limit(.08);//this is so scuffed
    this.loc.add(this.vel);
  }
}
Bubble.prototype.checkEdges = function () {
  if (this.loc.x  > canvas.width) this.loc.x = 0;
  if (this.loc.x < 0 ) this.loc.x = canvas.width;
  if (this.loc.y  > canvas.height) this.loc.y = 0;
  if (this.loc.y < 0 ) this.loc.y = canvas.height;
}

Bubble.prototype.render = function () {
  let ctx = context;
  ctx.save();

  ctx.strokeStyle = this.c;
  ctx.fillStyle = this.c;
  ctx.beginPath();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection() + Math.PI/2)
  ctx.moveTo(0, -15);
  ctx.lineTo(-10, 10);
  ctx.lineTo(0, 0);
  ctx.lineTo(10, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

Bubble.prototype.update = function () {
  for (let i = 0; i < bubbles.length; i++) {
    for (let j = 0; j < bubbles.length; j++) {
      if (i != j) {
        let d = this.loc.distance(bubbles[j].loc)

        if ((d < (20) + 0) && (d != 0)) {//if they touch and its not itself repel
          this.acc = JSVector.subGetNew(this.loc, bubbles[j].loc);
          this.acc.normalize();
          this.acc.multiply(.08);
          this.vel.limit(.08);//this is so scuffed
          this.vel.add(this.acc);
          this.loc.add(this.vel);
          bubbles[j].acc = JSVector.subGetNew(bubbles[j].loc, this.loc);
          bubbles[j].acc.normalize();
          bubbles[j].acc.multiply(.08);
          bubbles[j].vel.limit(.08);
          bubbles[j].vel.add(bubbles[j].acc);
          bubbles[j].loc.add(bubbles[j].vel)
        }
      }

    }


  }
  this.loc.add(this.vel)
}

Bubble.prototype.hive = function () {
  for (let i = 0; i < bubbles.length; i++) {
    let totalC = 0;
    let avgV = new JSVector(0, 0);
    for (let j = 0; j < bubbles.length; j++) {

      if (i != j) {
        let d = this.loc.distance(bubbles[j].loc);

        if (d < 100) {
          totalC++;
          avgV.add(bubbles[j].vel);
        }

      }
    }
    if (totalC > 0) {
      avgV.divide(totalC)
      this.acc.equals(avgV);
    //  this.acc.normalize();
      this.acc.multiply(0.04)
      this.vel.add(this.acc)
      this.vel.limit(0.05);

      this.loc.add(this.vel);
    }
  }


}

