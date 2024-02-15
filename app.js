import { GameBoard } from "./src/GameBoard.js";
import { OBlock } from "./src/OBlock.js";

// const messageDiv = document.getElementById('message');
// const scoreDiv = document.getElementById('score');
// const resetBtn = document.getElementById('reset');

let timeoutID, speed;

const boardSizeX = 14;
const boardSizeY = 16;

function initGame () {

    clearTimeout(timeoutID);
    timeoutID = null;

    // score = 0;
    speed = 500;

    // messageDiv.innerText = '';
    // messageDiv.classList.add('hidden');

    const gameBoard = new GameBoard(boardSizeX, boardSizeY);
    const oBlock = new OBlock(boardSizeX, boardSizeY);
    gameBoard.addNewBlock(oBlock);
    gameBoard.draw();

    (function repeat() {
        timeoutID = setTimeout(repeat, speed);
        if ( oBlock.canGoDown(gameBoard.getState()) ) {
            oBlock.moveDown();
        } else {
            if ( !oBlock.getIsStopped() ) {
                gameBoard.addBlockToState(oBlock);
                oBlock.stop();
            }
        }
        gameBoard.draw();
    })();

    // addFood();
    // updateHighScore();
    
}

initGame();
