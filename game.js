import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
 getSnakeHead, snakeIntersection, updateScore, updateHighScore, increaseSpeed, currentScore } from "./snake.js";
import { update as updateApple, draw as drawApple } from './apple.js';
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
export let gameOver = false;
const gameBoard = document.getElementById('game-board');
function main(currentTime){
    if(gameOver){  
        updateHighScore();
       if(confirm(currentScore >= 2 ? `You scored ${currentScore} points! Press OK to restart.`
       : `You scored ${currentScore} point! Press OK to restart.`)){
        window.location = '/'
       }
       return;
    };

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if( secondsSinceLastRender < 1 / SNAKE_SPEED ) return;

    lastRenderTime = currentTime;

    update();
    draw();
};

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateApple();
    checkDeath();
    updateScore();
    increaseSpeed();

    
};
    

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawApple(gameBoard);
   
    
};

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};

