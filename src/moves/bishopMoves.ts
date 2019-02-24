import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
        otherPlayer, positionName } 
    from 'positions/index';

import { bishopVectors } from 'constants/move-vectors'
import { movesIntoCheck } from 'check/index';

function bishop(board: Board, moveFrom: GridCoordinates, annotations:KingAnnotations): Set<PositionName> {

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

    return new Set(legalMoves
        .filter(moveTo => !movesIntoCheck(board, moveFrom, moveTo, annotations))
        .map(positionName)
    );
}

export default bishop;