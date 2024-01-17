function Snake(x, y) {
    this.loc = new JSVector(x * 40, y * 40);
    this.vel = new JSVector(0, 0);
    this.acc = new JSVector(0, 0);

    this.count = 0;

    this.c = 'rgba(' + 1 + ',' + 1 + ',' + 1 + ',' + 1 + ')';
}


Snake.prototype.run = function () {
    this.render();
    this.searchPath();
}



Snake.prototype.render = function (nextI, a) {

    let ctx = context;
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.rect(this.loc.x, this.loc.y, 40, 40);
    ctx.stroke();
    ctx.fill();


}
Snake.prototype.checkOverlap = function(n){
    for(let i = 0 ; i < obstacles.length; i ++){
 let dist = n.distance(obstacles[i].loc)
 if(dist === 0){
return true;
 }
    }
    return false;

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
    let allowWMove = true;
    let allowEMove = true;
    let allowNMove = true;
    let allowSMove = true;
    let simLoc = this.loc;
    
    let finalMove = "NaN";
    let lastFinalMove = finalMove;
    let kW = JSVector.addGetNew(simW, this.loc);
    let kE = JSVector.addGetNew(simE, this.loc);
    let kN = JSVector.addGetNew(simN, this.loc);
    let kS = JSVector.addGetNew(simS, this.loc);
    for (let i = 0; i < obstacles.length; i++) {
        if (this.checkOverlap(kW)) {
            allowWMove = false;

        }
        if (this.checkOverlap(kE)) {
            allowEMove = false;

        }
        if (this.checkOverlap(kN)) {
            allowNMove = false;

        }
        if (this.checkOverlap(kS)) {
            allowSMove = false;

        }
       
    }
    if (this.loc.x - 40 > 0 && allowWMove == true && lastFinalMove != "E") {//

        simLoc.add(simW);
        newWDist = simLoc.distance(planets.loc);
        simLoc.sub(simW);
        if (newWDist != 12000) {
            finalMove = "W";
        }

    }
    if (this.loc.x + 40 < 2000 && allowEMove == true && lastFinalMove != "W") {//

        simLoc.add(simE);
        newEDist = simLoc.distance(planets.loc);
        simLoc.sub(simE);
        if ((newEDist < newWDist || newWDist == 12000)) {
            finalMove = "E";
        }

    }
    if (this.loc.y - 40 > 0 && allowNMove == true && lastFinalMove != "S") {//
        simLoc.add(simN);
        newNDist = simLoc.distance(planets.loc);
        simLoc.sub(simN);
        if ((newNDist < newWDist || newWDist === 12000) && (newNDist < newEDist || newEDist === 12000)) {
            finalMove = "N";
        }

    }
    if (this.loc.y - 40 < 1500 && allowSMove == true && lastFinalMove != "N") {//
        simLoc.add(simS);
        newSDist = simLoc.distance(planets.loc);
        simLoc.sub(simS);


        if ((newSDist < newNDist || newNDist == 12000) && (newSDist < newWDist || newWDist == 12000)
            && (newSDist < newEDist || newEDist == 12000)) {
            finalMove = "S";

        }

    }
    


    if (dist > 60) {

        if (finalMove === "W") {

            this.loc.add(simW);
        }
        if (finalMove === "E") {
            this.loc.add(simE);
        }
        if (finalMove === "N") {
            this.loc.add(simN);
        }
        if (finalMove === "S") {
            this.loc.add(simS);
        }

    }
    newWDist = 12000;
    newEDist = 12000;
    newNDist = 12000;
    newSDist = 12000;
    allowWMove = true;
    allowEMove = true;
    allowNMove = true;
    allowSMove = true;
    lastFinalMove = finalMove;

}








