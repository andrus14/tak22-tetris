class OBlock {

    positionX;
    positionY = -2;

    class = 'o-block';

    shape = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ];


    constructor ( x ) {
        this.positionX = x;
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

    moveDown () {
        this.positionY++;
    }

    moveLeft () {
        this.positionX--;
    }

    moveRight () {
        this.positionX++;
    }

}

export { OBlock }