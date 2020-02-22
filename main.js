let cvsElem = document.getElementById('cvs');
cvsElem.style.border = '2px solid black';
let ctx = cvsElem.getContext('2d');
cvsElem.width = '500';
cvsElem.height = '500';
//ctx.fillStyle = 'rgb(250,0,0)';
// ctx.strokeStyle = 'rgb(0,255,0)';
// // ctx.fillRect(100, 100, 100, 100);
// // ctx.strokeRect(210, 100, 100, 100);

// ctx.strokeStyle = 'rgb(250,0,255)';
// ctx.beginPath();
// for (let i = 0; i < 50; i++) {
//     ctx.arc(150, 260, i*5, 0+(Math.PI/180)*i, Math.PI/180*i+Math.PI * 2, false);
// }
// ctx.stroke();

// let tr = [[150, 150], [200, 50], [250, 150]]

// function draw() {
//     ctx.clearRect(0,0,500,500);
//     tr[0][1] =150+(Math.random()*2-1)*10;
//     tr[1][1] =50+(Math.random()*2-1)*10;
//     tr[2][1] =150+(Math.random()*2-1)*10;


//     //tr[0][0]++;
//     //tr[1][0]++;


//     ctx.beginPath();
//     ctx.moveTo(tr[0][0], tr[0][1]);
//     ctx.lineTo(tr[1][0], tr[1][1]);
//     ctx.lineTo(tr[2][0], tr[2][1]);
//     ctx.lineTo(tr[0][0], tr[0][1]);
//     ctx.stroke();

// }

// setInterval(draw,10)
let rect = {};
rect.x = 0;
rect.y = 0;
let xDelta = 0;
let yDelta = 0;


function draw() {
    borderSt(xDelta,yDelta);

    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(rect.x, rect.y, 50, 50)
    // if (isJump) {
    //     jump();
    // }
}


//     ctx.clearRect(0,0,500,500);

let speed = 7;
// let isJump = false;
// let jumpCounr = 10;
// function jump() {

//     rect.y -= (jumpCounr ** 3) / 10;
//     jumpCounr--;
//     if (jumpCounr < -10) {
//         isJump = false;
//         jumpCounr = 10;
//     }
// }

function borderSt(x,y){

    if(x!=0){
        if(rect.x+x<0){
            rect.x=0;
        }else if(rect.x+x>=450){
            rect.x=450;
        }else{
            rect.x += x;
        }
    }else{
        if(rect.y+y<0){
            rect.y=0;
        }else if(rect.y+y>=450){
            rect.y=450;
        }else{
            rect.y += y;
        }
    }
    

}

function moveHandler(event) {

    if (event.code == 'KeyW') {
        if (speed <= rect.y) {
            yDelta = -speed;
            xDelta = 0;
            console.log(yDelta);
        } else {
            rect.y = 0;
        }
        console.log('Up');

    } else if (event.code == 'KeyA') {
        if (speed <= rect.x) {
            xDelta = -speed;
            yDelta = 0;
            console.log(xDelta);
        } else {
            rect.x = 0;
        }
        console.log('Left');
        
    } else if (event.code == 'KeyD') {
        if (speed <= (500 - (50 + rect.x))) {
            xDelta = speed;
            yDelta = 0;
            console.log(xDelta);
        } else {
            rect.x = 450;
        }
        console.log('Right');

    } else if (event.code == 'KeyS') {
        if (speed <= (500 - (50 + rect.y))) {
            yDelta = speed;
            xDelta = 0;
            console.log(yDelta);
        } else {
            rect.y = 450;
        }
        console.log('Down');
    }


    // else if (event.code == 'Space' && isJump === false) {
    //     isJump = !isJump;
    // }
}

setInterval(draw, 10);

document.addEventListener('keypress', event => moveHandler(event));