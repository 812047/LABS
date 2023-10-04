
window.addEventListener("load", init);


// global variables
let canvas, context;
let bubbles = [];
let Numbers = [];
let k = 0;


function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
   loadBubbles(200);
   runBubbles();
   let min = 1;
   let max = 10;
    animate();      // kick off the animation
    console.log("Load Numbers:" +loadNumbers(min,max,50));
    console.log("Mean: " + getMean());
    Numbers = bubbleSort(Numbers);
    console.log("Sorted: " + Numbers);
    console.log("Median: " + getMedian(Numbers));
    console.log("Mode: " + getMode(max, Numbers));


}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
   


}


function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 10 + 5;
        bubbles[i] = new Bubble(x, y, r);
    }
}


// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}


function loadNumbers(a,b,y){
    for(let i = 0; i < y; i++){
        let num = Math.floor(Math.random()*b + a);
        Numbers.push(num);
    }
    return Numbers;
}








function getMean(){
    for(let i = 0; i < Numbers.length; i ++){
    k += Numbers[i];
    }
    return k/Numbers.length;
}








function getMedian(arr){
    var i = arr.length / 2;
    if(i%1 == 0){
        return (arr[i - 1] + arr[i]) / 2;
    }else {
        return arr[Math.floor(i)];
    }
  }


function getMode(max, arr){
let temp = [];

for( let i = 0; i <= max; i++){
    temp.push(0);
}
console.log("temp =" + temp)
for(let i = 0; i < arr.length; i ++){
    temp[arr[i]]++;
}
console.log("temp =" + temp)
let maxVal = 0;

for(let i = 0; i < temp.length; i ++){
    if(temp[i] >  maxVal){ maxVal = temp[i]}
}
let mode = [];
 for(let i = 0; i < temp.length; i ++){
    if(temp[i] === maxVal){
        mode.push(i);
    }
 }
 return mode;
}
function bubbleSort(arr) {
 
    for (let i = 0; i < arr.length; i++) {
 
        for (let j = 0; j < (arr.length - i - 1); j++) {


            if (arr[j] > arr[j + 1]) {


                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
       
    }
    return arr;
}
