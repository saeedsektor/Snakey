window.onload=function() {
    canv=document.getElementById("gameCanvas");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
let px= 10;
let py=10; 
// player x and y
let gs= 25;
let tc=25; 
//grid size and tile count
let ax= 15;
let ay=15; 
//apple x and y
let xv= 0;
let yv=0; 
// velocity of x and y
trail=[];
tail = 5;
score = 0;

let img = new Image();
img.src = "apple.png";

function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="lightgreen";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="#475726";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 5;
            score = 0;
            document.getElementById("score").innerHTML = "your score : " + score;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(ax==px && ay==py) {
        tail++;
        score++;
        document.getElementById("score").innerHTML = "your score : " + score;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.drawImage(img, ax*gs,ay*gs);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
}