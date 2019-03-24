var canvas;
var canvasContext;
var snakeX = 50;
var snakeY = 50;
var snakeSpeedX = 5;
var snakeSpeedY = -5;
var snakeRadiusX = 5;
var snakeRadiusY = 5;
var framesPerSecond = 10;


window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    window.addEventListener("keydown", keyDownHandler, false);
    
    setInterval(function() {
        moveSnake();
        drawEverything();
        stopSnake();
        }, 1000/framesPerSecond);
}
   
//canvas background and snake/shape
function drawEverything() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snakeX, snakeY, 5, 5);
           
}


// move shape across screen, might not be needed with keycode function.
function moveSnake() {
   snakeX = snakeX + snakeSpeedX;
   snakeY = snakeY + snakeSpeedY;

}
//Stop shape at edge of canvas
function stopSnake() {            
    if(snakeX >=  canvas.width - snakeRadiusX || snakeX >= canvas.height - snakeRadiusX) {
        snakeSpeedX = 0;
    }
    if(snakeY <= 0 + snakeRadiusY){
        snakeSpeedY = 0;
    }
    
}

/* KeyCode
document.onkeydown = keyDownHandler;
37 = leftarrow
38 = uparrow
39 = rightarrow
40 = downarrow
*/

//Arrow Key movement of shape
function keyDownHandler(event){
    key = event.keyCode;
    if(key === 37) {
        snakeSpeedX =  -5
    }
    if(key === 38) {
        snakeSpeedY = -5
    }
    if(key === 39) {
        snakeSpeedX = 5
    }
    if(key === 40) {
        snakeSpeedY = 5
    }
}


// Using Switch/Case
/*
function  keyMovement(event){
    key = event.keycode;
    switch(key){
        case 37: //Left
            return;
        case 38: //Up
            break;
        case 39: //Right
            break;
        case 40: //Down
            break;
    }
    console.log(key)
    
}
*/

