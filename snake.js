import { getInputDirection } from "./inputsTouchMove.js";

const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');
const isSessionStorageEmpty = sessionStorage.getItem('SnakeGameScore') == null ? 0 : sessionStorage.getItem('SnakeGameScore');
highScoreText.textContent = isSessionStorageEmpty.toString().padStart(3, '0');

export let SNAKE_SPEED = 2;
const snakeBody = [{ x:11,  y:11 }];
let newSegments = 0;

export function update(){
  addSegments();

  const inputDirection = getInputDirection();
   for(let i = snakeBody.length - 2; i >= 0; i--){
    snakeBody[i + 1] = { ...snakeBody[i] }
   };

   snakeBody[0].x += inputDirection.x;
   snakeBody[0].y += inputDirection.y;
};

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div');
      snakeElement.style.gridRowStart = segment.y;
      snakeElement.style.gridColumnStart = segment.x;
      snakeElement.classList.add('snake');
      gameBoard.appendChild(snakeElement);
    })
};

export function expandSnake(amount){
  newSegments += amount;
};

export function onSnake(position, { ignoreHead = false } = {} ){
  return snakeBody.some((segment, index) => {
    if(ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
};

export function getSnakeHead() {
  return snakeBody[0];
};

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true})
};

function equalPositions(pos1, pos2){
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

function addSegments() {
  for(let i = 0; i < newSegments; i++){
    snakeBody.push({ ...snakeBody[ snakeBody.length - 1] })
  };

  newSegments = 0;
};
export let currentScore = 0;
export function updateScore() {
    currentScore = snakeBody.length -1;
    score.textContent = currentScore.toString().padStart(3, '0');
};


export function updateHighScore() {
  const currentScore = snakeBody.length - 1;
  if(currentScore > Number(sessionStorage.getItem('SnakeGameScore'))) {
      sessionStorage.setItem("SnakeGameScore", currentScore);
  };
};


// Increase speed
export function increaseSpeed() {
  const snakeLength = snakeBody.length + 1;
  if(snakeLength >= 20){
    SNAKE_SPEED = (snakeLength * 0.3);
  }else if(snakeLength >= 15){
    SNAKE_SPEED = (snakeLength * 0.35)
  }else if(snakeLength >= 10){
    SNAKE_SPEED = (snakeLength * 0.4)
  }else if(snakeLength >= 7){
    SNAKE_SPEED = (snakeLength * 0.6)
  }else if(snakeLength >= 5 ){
    SNAKE_SPEED = (snakeLength * 0.7)
  }else if(snakeLength >= 4 ){
    SNAKE_SPEED = (snakeLength * 0.8)
  }else if(snakeLength >= 3 ){
    SNAKE_SPEED = (snakeLength * 0.9)
  }
};