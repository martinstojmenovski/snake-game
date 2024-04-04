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

window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // Horizontal swipe
        if (xDiff > 0) {
            // Left swipe
            if (lastInputDirection.x !== 0) return;
            inputDirection = { x: -1, y: 0 };
        } else {
            // Right swipe
            if (lastInputDirection.x !== 0) return;
            inputDirection = { x: 1, y: 0 };
        }
    } else {
        // Vertical swipe
        if (yDiff > 0) {
            // Up swipe
            if (lastInputDirection.y !== 0) return;
            inputDirection = { x: 0, y: -1 };
        } else {
            // Down swipe
            if (lastInputDirection.y !== 0) return;
            inputDirection = { x: 0, y: 1 };
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
