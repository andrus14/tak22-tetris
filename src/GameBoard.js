import { OBlock } from "./OBlock.js";
import { LBlock } from "./LBlock.js";

class GameBoard {
    
    state = [];
    gameBoardTable = document.getElementById('gameboard');
    boardSizeX;
    boardSizeY;
    currentBlock;

    constructor ( boardSizeX, boardSizeY ) {

        this.boardSizeX = boardSizeX;
        this.boardSizeY = boardSizeY;

        for ( let y = 0; y < this.boardSizeY; y++ ) {
            let arr = [];
            for ( let x = 0; x < this.boardSizeX; x++ ) {
                arr.push('');
            }
            this.state.push(arr);
        }

        document.addEventListener ('keydown', e => {
            switch ( e.key ) {
                case 'ArrowUp':
                    this.currentBlock.nextPose();
                    this.draw();
                    break;
                // case 'ArrowDown':
                //     direction = 'd';
                //     break;
                case 'ArrowLeft':
                    if ( this.currentBlock.canGoLeft(this.state) ) {
                        this.currentBlock.moveLeft();
                        this.draw();
                    }
                    break;
                case 'ArrowRight':
                    if ( this.currentBlock.canGoRight(this.state) ) {
                        this.currentBlock.moveRight();
                        this.draw();
                    }
                    break;
            }
        });
    }

    draw() {

        this.gameBoardTable.innerHTML = '';
        
        for ( let y = 0; y < this.boardSizeY; y++ ) {
            const boardRowTr = document.createElement('tr');
            for ( let x = 0; x < this.boardSizeX; x++ ) {
                const boardCellTd = document.createElement('td');
                const id = y + '_' + x;
                boardCellTd.setAttribute('id', id);

                // draw block
                if ( this.currentBlock.isOverlapingCell(id) ) {
                    boardCellTd.classList.add(this.currentBlock.class);
                }

                // draw colors

                if ( this.state[y][x] != '' ) {
                    boardCellTd.classList.add(this.state[y][x]);
                }


                boardRowTr.append(boardCellTd);
            }
            this.gameBoardTable.append(boardRowTr);
        }
    
        // scoreDiv.innerText = 'Score: ' + score;
    }

    getState () {
        return this.state;
    }

    getCurrentBlock () {
        return this.currentBlock;
    }

    addNewBlock() {
        this.currentBlock = new LBlock(this.boardSizeX, this.boardSizeY);
    }

    addBlockToState ( block ) {

        const coordinates = block.getCoordinates();
        coordinates.forEach( el => {
            this.state[el[0]][el[1]] = block.class;
        });

    }
}

export { GameBoard }