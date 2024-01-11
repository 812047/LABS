function Snake(x, y) {
    this.loc = new JSVector(x * 40 , y * 40 );
    this.vel = new JSVector(0, 0);
    this.acc = new JSVector(0, 0);
 

}


Snake.prototype.run = function () {
    this.render();
    this.searchPath();
    this.update();
    this.checkEdges();
   
}

Snake.prototype.update = function () {
    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.rect(this.loc.x, this.loc.y, 40, 40);
    ctx.stroke();
    ctx.fill();
}

Snake.prototype.checkEdges = function () {


    if (this.loc.x > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = canvas.height;
}
Snake.prototype.render = function (nextI, a) {
   



}

Snake.prototype.searchPath = function () {
    let dist = this.loc.distance(planets.loc);
    let newWDist = 12000;
    let newEDist = 12000;
    let newNDist = 12000;
    let newSDist = 12000;
    let simW = new JSVector(-40, 0);
    let simE = new JSVector(40, 0);
    let simN = new JSVector(0, -40);
    let simS = new JSVector(0, 40);
    let simLoc = new JSVector(0, 0);
    let finalMove = 0;

        if (this.loc.x - 40 > 0) {//

            simLoc.add(simW);
            newWDist = simLoc.distance(planets.loc);
            simLoc.sub(simW);
            if(newWDist != 12000){
            finalMove = "W";
            }
        }
        if (this.loc.x + 40 < 2000) {//

            simLoc.add(simE);
            newEDist = simLoc.distance(planets.loc);
            simLoc.sub(simE);
            if((newEDist < newWDist || newWDist === 12000)){
                finalMove = "E";
            }
        }
        if (this.loc.y - 40 > 0) {//
            simLoc.add(simN);
            newNDist = simLoc.distance(planets.loc);
            simLoc.sub(simN);
            if((newNDist < newWDist || newWDist === 12000) && (newNDist < newEDist || newEDist === 12000)){
                finalMove = "N";
            }
        }
        if (this.loc.y - 40 < 1500) {//
            simLoc.add(simS);
            newSDist = simLoc.distance(planets.loc);
            simLoc.sub(simS);
      
            console.log(newSDist < newEDist);
            console.log(newSDist);
            if((newSDist < newNDist || newNDist == 12000) && (newSDist < newWDist || newWDist == 12000)
            && (newSDist < newEDist || newEDist == 12000) ){
                finalMove = "S";
            }
        
    
    if(finalMove === "W"){
        this.loc.add(simW);
    }
    if(finalMove === "E"){
        this.loc.add(simE);
    }
    if(finalMove === "N"){
        this.loc.add(simN);
    }
    if(finalMove === "S"){
        this.loc.add(simS);
    }
  
}



}




