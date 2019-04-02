





var canvas;
var canvasContext;
var snakeX = 200;
var snakeY = 200;
var snakeSpeedX = 5;
var snakeSpeedY = 0;
var snakeRadiusX = 5;
var snakeRadiusY = -5;
var framesPerSecond = 5;
var appleX = 0;
var appleY = 0;
var snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150},
  ];

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    window.addEventListener("keydown", keyDownHandler, false);
    //window.addEventListener("keyup", keyUpHandler, false);

    

    setInterval(function() {
        moveSnake();
        drawCanvas();
        drawSnake();
        drawApple();
        stopSnake();
        }, 1000/framesPerSecond);
    
    
}

function drawCanvas(){
    canvasContext.fillStyle = 'black';    
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

}

function drawApple(){
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(200,200,5,5);
    
    /*
    Thinking out loud - using math random for apple placement.
    Using IF to rule out the timing? or create timer to draw a random spot
    mathRandom( drawApple.random (x <= canvas.width - 50) && (y <= canvas.height - 50))

    function timer(){
        timer(drawApple)
        if(timer == 30 seconds) {
            drawApple.random
        }
    } 
    */


}
function drawSnake(){
   snake.forEach(drawSnakePart);
}
//canvas background and snake/shape
function drawSnakePart(snakePart) {
    //var loopTimer = setTimeout('drawEverything('+snakeX+','+snakeY+')',50000);
    canvasContext.save()
    //canvasContext.clearRect(0,0,400,400);
    canvasContext.fillStyle = 'green';
    canvasContext.strokeStyle = 'grey';
    canvasContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    canvasContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
    canvasContext.restore();
    //snakeX += 5;
    
           
}
// move shape across screen, might not be needed with keycode function.
function moveSnake() {
   //snakeX = snakeX + snakeSpeedX;
   //snakeY = snakeY + snakeSpeedY;
   var snakeHead = {x: snake[0].x + snakeSpeedX, y: snake[0].y + snakeSpeedY};
   snake.unshift(snakeHead);



}
//Stop shape at edge of canvas
function stopSnake() {            
    if(snakeX >=  canvas.width - snakeRadiusX || snakeX <= 0) {
        snakeSpeedX = 0;
        
    }
    if(snakeY >= canvas.height + snakeRadiusY || snakeY <= 0){
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
function  keyDownHandler(event){
    key = event.keyCode;
    if(key === 37) {
        snakeSpeedX =  -5;
        snakeSpeedY = 0;
    }
    if(key === 38) {
        snakeSpeedY = -5;
        snakeSpeedX = 0;
    }
    if(key === 39) {
        snakeSpeedX = 5
        snakeSpeedY = 0
    }
    if(key === 40) {
        snakeSpeedY = 5
        snakeSpeedX = 0
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

