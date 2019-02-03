import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
        otherPlayer, algebraicName, locatePiece } 
    from 'position-utils/index';

import { bishopVectors } from 'constants/move-vectors'
import { isInCheck } from 'check/index';
import { nextBoard } from 'moves/index';

function bishop(board: Board, initialPosition: GridCoordinates, kingPosition: GridCoordinates): Set<AlgebraicName> {
    
    const player = playerAt(board, initialPosition);

    const attackedPositions: Array<GridCoordinates> = [];

    bishopVectors.forEach((vector: MoveVector):void => {

        let examinedPosition = displaceTo(initialPosition, vector);

        while(isOnBoard(examinedPosition) && isUnOccupied(board, examinedPosition)){
            
            attackedPositions.push(examinedPosition);
            examinedPosition = displaceTo(examinedPosition, vector);
        }
        if(isOnBoard(examinedPosition) && isOccupiedByPlayer(board, examinedPosition, otherPlayer(player))){
            
            attackedPositions.push(examinedPosition);
        }
    });

    const doesntCheckSelf = (position:GridCoordinates):boolean => !isInCheck(nextBoard(board, initialPosition, position), player, kingPosition)

    return new Set(attackedPositions.filter(doesntCheckSelf).map(algebraicName));
}

export default bishop;