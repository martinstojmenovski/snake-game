//game loop
// import { SNAKE_SPEED } from "./snake";
let lastRenderedTime = 0;
const SNAKE_SPEED = 1


function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderedTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderedTime = currentTime
     console.log(secondsSinceLastRender)


     update()
     draw()
   
}

window.requestAnimationFrame(main)


function update(){

}

function draw(){

}









