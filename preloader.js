const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pointsArray;
let linkHeight = canvas.height/12
let linkWidth = canvas.width/12

// Function to add points and do actions with him
function initialize(){
    pointsArray = [];
    let nbPoints = (canvas.width * canvas.height) / ((canvas.width + canvas.height)*4);
    for(let i = 0; i < nbPoints; i++){
        let size = 6;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let speedX = Math.random();
        let speedY = Math.random();
        let color = '#d7d6ea'
        pointsArray.push(new Point(x, y, speedX, speedY, size, color));
    }
}

function link(){
    for(let i = 0; i < pointsArray.length; i++){
        for(let j = 0; j < pointsArray.length; j++){
            let dx = pointsArray[i].x - pointsArray[j].x;
            let dy = pointsArray[i].y - pointsArray[j].y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < (canvas.width/linkWidth) * (canvas.height/linkHeight)){
                ctx.beginPath();
                ctx.moveTo(pointsArray[i].x, pointsArray[i].y);
                ctx.lineTo(pointsArray[j].x, pointsArray[j].y);
                ctx.strokeStyle = '#d7d6ea';
                ctx.stroke();
            }
        }
    }
}

// Function for refresh window
function loop(){
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i = 0; i < pointsArray.length; i++){
        pointsArray[i].move();
    }
    link();
}

// Function to adapt points at the size of window
window.addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    linkHeight = canvas.height/12;
    linkWidth = canvas.width/12;
    initialize();
})

initialize();
loop();
