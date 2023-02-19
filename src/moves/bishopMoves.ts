import { 
    playerAt, 
    displaceTo, 
    isOnBoard, 
    isUnOccupied, 
    isOccupiedByPlayer, 
    otherPlayer, 
    positionName } from 'positions';

import { bishopVectors } from 'constants/move-vectors'
import { movesIntoCheck } from 'check';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { PositionName } from 'enums/positionName';
import { Board } from 'types/Board';

function bishop(
    board: Board, 
    moveFrom: GridCoordinates, 
    annotations: KingAnnotations)
    : Set<PositionName> {

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