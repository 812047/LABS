function Snake(x, y) {
    this.loc = new JSVector(x * 40, y * 40);
    this.vel = new JSVector(0, 0);
    this.acc = new JSVector(0, 0);

    this.count = 0;

    this.c = 'rgba(' + 1 + ',' + 1 + ',' + 1 + ',' + 1 + ')';
}


Snake.prototype.run = function () {
    this.render();
    setTimeout(() => {
    this.searchPath();

}, "2000");
    this.update();
    this.checkEdges();

}

Snake.prototype.update = function () {

}

Snake.prototype.checkEdges = function () {


    if (this.loc.x > canvas.width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = canvas.width;
    if (this.loc.y > canvas.height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = canvas.height;
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

    for (let i = 0; i < obstacles.length; i++) {


        let kW = JSVector.addGetNew(simW, this.loc);
        let kE = JSVector.addGetNew(simE, this.loc);
        let kN = JSVector.addGetNew(simN, this.loc);
        let kS = JSVector.addGetNew(simS, this.loc);
     console.log(kW)
     console.log(obstacles[i])
        if (kW == obstacles[i].loc) {
         
            allowWMove = false;

        }
        if (kE == obstacles[i].loc) {
            allowEMove = false;

        }
        if (kN == obstacles[i].loc) {
            allowNMove = false;

        }
        if (kS == obstacles[i].loc) {
            allowSMove = false;

        }

        kW = JSVector.subGetNew(simW, this.loc);
        kE = JSVector.subGetNew(simE, this.loc);
        kN = JSVector.subGetNew(simN, this.loc);
        kS = JSVector.subGetNew(simS, this.loc);
    }
    if (this.loc.x - 40 > 0 && allowWMove == true) {//

        simLoc.add(simW);
        newWDist = simLoc.distance(planets.loc);
        simLoc.sub(simW);
        if (newWDist != 12000) {
            finalMove = "W";
        }

    }
    if (this.loc.x + 40 < 2000 && allowEMove == true) {//

        simLoc.add(simE);
        newEDist = simLoc.distance(planets.loc);
        simLoc.sub(simE);
        if ((newEDist < newWDist || newWDist == 12000)) {
            finalMove = "E";
        }

    }
    if (this.loc.y - 40 > 0 && allowNMove == true) {//
        simLoc.add(simN);
        newNDist = simLoc.distance(planets.loc);
        simLoc.sub(simN);
        if ((newNDist < newWDist || newWDist === 12000) && (newNDist < newEDist || newEDist === 12000)) {
            finalMove = "N";
        }

    }
    if (this.loc.y - 40 < 1500 && allowSMove == true) {//
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
    finalMove = "NaN";
}








