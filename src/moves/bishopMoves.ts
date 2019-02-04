import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
        otherPlayer, positionName, locatePiece } 
    from 'position-utils/index';

import { bishopVectors } from 'constants/move-vectors'
import { isInCheck } from 'check/index';
import { nextBoard } from 'moves/index';

function bishop(board: Board, moveFrom: GridCoordinates, kingPosition: GridCoordinates): Set<PositionName> {
    
    const player = playerAt(board, moveFrom);

    const legalMoves: Array<GridCoordinates> = [];

    bishopVectors.forEach((vector: MoveVector):void => {

        let examinedPosition = displaceTo(moveFrom, vector);

        while(isOnBoard(examinedPosition) && isUnOccupied(board, examinedPosition)){
            
            legalMoves.push(examinedPosition);
            examinedPosition = displaceTo(examinedPosition, vector);
        }
        if(isOnBoard(examinedPosition) && isOccupiedByPlayer(board, examinedPosition, otherPlayer(player))){
            
            legalMoves.push(examinedPosition);
        }
    });

    const doesntPutSelfInCheck = (position:GridCoordinates):boolean => !isInCheck(nextBoard(board, moveFrom, position), player, kingPosition)

    return new Set(legalMoves.filter(doesntPutSelfInCheck).map(positionName));
}

export default bishop;