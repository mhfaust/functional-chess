import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, otherPlayer, algebraicName } 
    from 'position-utils';

function bishop(board, initialPosition) {
    
    const player = playerAt(board, initialPosition);
    const directions = [[1,1], [1,-1], [-1,-1], [-1,1]];
    const attackedPositions = [];

    directions.forEach((direction) => {
        let checkPosition = displaceTo(initialPosition, direction);
        while(isOnBoard(checkPosition) && isUnOccupied(board, checkPosition)){
            attackedPositions.push(checkPosition);
            checkPosition = displaceTo(checkPosition, direction);
        }
        if(isOnBoard(checkPosition) && isOccupiedByPlayer(board, checkPosition, otherPlayer(player)))
            attackedPositions.push(checkPosition);
    });

    return new Set(attackedPositions.map(algebraicName));
}

export default bishop;