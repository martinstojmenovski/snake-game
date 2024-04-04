let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
    }
});

const board = document.getElementById('game-board');

board.addEventListener('touchstart', (e) => {
    e.preventDefault();
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
})

board.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    checkDirection()
})

// Create KeyboardEvent objects for each arrow key
const arrowUpEvent = new KeyboardEvent('keydown', {
    key: 'ArrowUp',
    bubbles: true,
    cancelable: true,
    keyCode: 38 // Optional, keyCode for compatibility
  });
  
  const arrowDownEvent = new KeyboardEvent('keydown', {
    key: 'ArrowDown',
    bubbles: true,
    cancelable: true,
    keyCode: 40 // Optional, keyCode for compatibility
  });
  
  const arrowLeftEvent = new KeyboardEvent('keydown', {
    key: 'ArrowLeft',
    bubbles: true,
    cancelable: true,
    keyCode: 37 // Optional, keyCode for compatibility
  });
  
  const arrowRightEvent = new KeyboardEvent('keydown', {
    key: 'ArrowRight',
    bubbles: true,
    cancelable: true,
    keyCode: 39 // Optional, keyCode for compatibility
  });

// start of swipe effect
let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;

function checkDirection() {
    const deltaX = touchendX - touchstartX;
    const deltaY = touchendY - touchstartY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            window.dispatchEvent(arrowRightEvent)
        } else {
            window.dispatchEvent(arrowLeftEvent)
        }
    } else {
        if (deltaY > 0) {
            window.dispatchEvent(arrowDownEvent)
        } else {
            window.dispatchEvent(arrowUpEvent); 
        }
    }
}



export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}


