import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
        otherPlayer, algebraicName } 
    from 'position-utils/index';

import { bishopVectors } from 'constants/move-vectors'

function bishop(board: Board, initialPosition: GridCoordinates): Set<AlgebraicName> {
    
    const player = playerAt(board, initialPosition);

    const attackedPositions: Array<GridCoordinates> = [];

    bishopVectors.forEach((vector: MoveVector):void => {
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