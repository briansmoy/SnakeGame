





var canvas;
var canvasContext;
var snakeX = 50;
var snakeY = 50;
var snakeSpeedX = 5;
var snakeSpeedY = -5;
var snakeRadiusX = 5;
var snakeRadiusY = 3;
var framesPerSecond = 30;


canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

   



setInterval(function() {
    moveSnake();
    drawEverything();
    stopSnake();
    }, 1000/framesPerSecond);


addEventListener('LeftArrow', keyLeft, false);
addEventListener('UpArrow', keyUp, false);
addEventListener('RightArrow', keyRight, false);
addEventListener('DownArrow', keyDown, false);
             

function drawEverything() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);

    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(100,snakeX, 5, 5);
           
}

function moveSnake() {
    snakeX = snakeX + snakeSpeedX;
    snakeY = snakeY + snakeSpeedY;

}

function stopSnake() {            
    if(snakeX >=  canvas.width - snakeRadiusX || snakeX >= canvas.height - snakeRadiusX) {
        snakeSpeedX = 0;
    }
    if(snakeY <= 0 + snakeRadiusY){
        snakeSpeedY = 0;
    }
    
}

function keyStroke (){
    
}




console.log()    
            
            

        
       
              


