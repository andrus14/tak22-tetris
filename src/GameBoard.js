const GameBoard = {
    
    state: [],
    gameBoardTable: document.getElementById('gameboard'),
    boardSizeX: 12,
    boardSizeY: 18,
    currentBlock: undefined,

    init() {
        for ( let y = 0; y < this.boardSizeY; y++ ) {
            let arr = [];
            for ( let x = 0; x < this.boardSizeX; x++ ) {
                arr.push('');
            }
            this.state.push(arr);
        }

        document.addEventListener ('keydown', e => {
            switch ( e.key ) {
                // case 'ArrowUp':
                //     direction = 'u';
                //     break;
                // case 'ArrowDown':
                //     direction = 'd';
                //     break;
                case 'ArrowLeft':
                    this.currentBlock.moveLeft();
                    this.draw();
                    break;
                case 'ArrowRight':
                    this.currentBlock.moveRight();
                    this.draw();
                    break;
            }
        });
    },

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

                boardRowTr.append(boardCellTd);
            }
            this.gameBoardTable.append(boardRowTr);
        }
    
        // scoreDiv.innerText = 'Score: ' + score;
    },

    addNewBlock( block ) {
        this.currentBlock = block;
    },

}

export { GameBoard }