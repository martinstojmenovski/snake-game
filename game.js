//game loop
// import { SNAKE_SPEED } from "./snake";

let lastRenderedTime = 0;
const gameBoard = document.getElementById('game-board')



function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderedTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderedTime = currentTime
    


     update()
    draw(gameBoard)
   
}

window.requestAnimationFrame(main)













