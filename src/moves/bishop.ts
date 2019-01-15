import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
        otherPlayer, algebraicName } 
    from 'position-utils/index';

import { bishopVectors } from 'constants/move-vectors'

function bishop(board: Board, initialPosition: GridCoordinates): Set<string> {
    
    const player = playerAt(board, initialPosition);

    const attackedPositions = [];

    bishopVectors.forEach((vector) => {
        let examinedPosition = displaceTo(initialPosition, vector);
        while(isOnBoard(examinedPosition) && isUnOccupied(board, examinedPosition)){
            attackedPositions.push(examinedPosition);
            examinedPosition = displaceTo(examinedPosition, vector);
        }
        if(isOnBoard(examinedPosition) && isOccupiedByPlayer(board, examinedPosition, otherPlayer(player)))
            attackedPositions.push(examinedPosition);
    });

    return new Set(attackedPositions.map(algebraicName));
}

export default bishop;