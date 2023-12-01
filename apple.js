let apple = { x: 0, y: 0}
function updateApple() {

}

function drawApple(gameBoard) {
    gameBoard.innerHTML = ''

    const appleElement = document.createElement('div')
    appleElement.style.gridRowStart = apple.y
    appleElement.style.gridColumnStart = apple.x
    appleElement.classList.add('apple')
    gameBoard.appendChild(appleElement)


}
