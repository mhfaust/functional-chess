import { 
    playerAt, 
    displaceTo, 
    isOnBoard, 
    isUnOccupied, 
    isOccupiedByPlayer,
    otherPlayer, 
    positionName } from 'positions';
import { isInCheck } from 'check';
import { move } from 'board';
import movesIntoCheck from 'check/movesIntoCheck';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { PositionName } from 'positions/positionName';
import { Board } from 'types/Board';

function rook(board: Board, moveFrom: GridCoordinates, boardAnnotations: KingAnnotations): Set<PositionName> {
    
    const player = playerAt(board, moveFrom);
    const directions = [[0,1], [0,-1], [1,0], [-1,0]];
    const legalMoves : Array<GridCoordinates> = [];

    const doesntPutSelfInCheck = (position: GridCoordinates): boolean => !isInCheck(move(board, moveFrom, position), player, boardAnnotations);

    directions.forEach((direction) => {
        let examinedPosition = displaceTo(moveFrom, direction);

        while(isOnBoard(examinedPosition) && isUnOccupied(board, examinedPosition)){
            legalMoves.push(examinedPosition);
            examinedPosition = displaceTo(examinedPosition, direction);
        }
        if(isOnBoard(examinedPosition) && isOccupiedByPlayer(board, examinedPosition, otherPlayer(player)))
            legalMoves.push(examinedPosition);
    });

    return new Set(legalMoves
        .filter(position => !movesIntoCheck(board, moveFrom, position, boardAnnotations))
        .map(positionName)
    );
}

export default rook;