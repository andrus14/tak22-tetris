class OBlock {

    boardSizeX;
    boardSizeY;

    width = 2;
    height = 2;

    positionX;
    positionY = -2;

    isStopped = false;

    class = 'o-block';

    shape = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ];


    constructor ( boardSizeX, boardSizeY ) {
        this.boardSizeX = boardSizeX;
        this.boardSizeY = boardSizeY;
    
        
        this.positionX = Math.floor(this.boardSizeX / 2) - 1;
    }

    isOverlapingCell ( id ) {
        let res = false;

        this.shape.forEach( el => {
            if ( id == (el[0] + this.positionY) + '_' + (el[1] + this.positionX) ) {
                res = true;
            }
        });

        return res;
    }

    getCoordinates () {
        return this.shape.map( cell => {
            return [cell[0] + this.positionY, cell[1] + this.positionX];
        });
    }

    canGoDown ( state ) {

        let res = true;

        if ( (this.positionY + this.height) >= this.boardSizeY ) {
            return false;
        }

        const coordinates = this.getCoordinates();
        coordinates.forEach( el => {
            if ( el[0] > -2 ) {
                if ( state[el[0] + 1][el[1]] != '' ) {
                    res = false;
                    return false;
                }
            }
        });

        return res;

    }

    canGoLeft ( state ) {

        let res = true;

        if ( this.positionX <= 0 ) {
            return false;
        }

        const coordinates = this.getCoordinates();
        coordinates.forEach( el => {
            const newY = el[0];
            const newX = el[1]-1;
            if ( newY >= 0 && newX >= 0 && newY < this.boardSizeY && newX < this.boardSizeX ) {
                if ( state[newY][newX] != '' ) {
                    res = false;
                    return false;
                }
            }
        });

        return res;

    }

    canGoRight ( state ) {

        let res = true;

        if ( this.positionX >= (this.boardSizeX - this.width) ) {
            return false;
        }

        const coordinates = this.getCoordinates();
        coordinates.forEach( el => {
            const newY = el[0];
            const newX = el[1]+1;
            if ( newY >= 0 && newX >= 0 && newY < this.boardSizeY && newX < this.boardSizeX ) {
                if ( state[newY][newX] != '' ) {
                    res = false;
                    return false;
                }
            }
        });

        return res;

    }

    getIsStopped () {
        return this.isStopped;
    }

    stop () {
        this.isStopped = true;
    }

    moveDown () {
        this.positionY++;
    }

    moveLeft () {
        if ( this.positionX > 0 ) {
            this.positionX--;
        }
    }

    moveRight () {
        if ( this.positionX < (this.boardSizeX - this.width) ) {
            this.positionX++;
        }
    }

}

export { OBlock }