import { GameBoard } from "./src/GameBoard.js";
import { OBlock } from "./src/OBlock.js";

// const messageDiv = document.getElementById('message');
// const scoreDiv = document.getElementById('score');
// const resetBtn = document.getElementById('reset');

let timeoutID, speed;

function initGame () {

    clearTimeout(timeoutID);
    timeoutID = null;

    // score = 0;
    speed = 500;

    // messageDiv.innerText = '';
    // messageDiv.classList.add('hidden');

    GameBoard.init();

    const oBlock = new OBlock(Math.floor(GameBoard.boardSizeX / 2) - 1);
    GameBoard.addNewBlock(oBlock);
    GameBoard.draw();

    (function repeat() {
        timeoutID = setTimeout(repeat, speed);
        oBlock.moveDown();
        GameBoard.draw();
    })();

    // addFood();
    // updateHighScore();
    
}

initGame();
