import { playerAt, displaceTo, isOnBoard, isUnOccupied, 
    isOccupiedByPlayer, otherPlayer, positionName } 
    from 'position-utils/index';
import { isInCheck } from 'check/index';
import { nextBoard } from 'moves/index';

function rook(board: Board, moveFrom: GridCoordinates, kingPosition: GridCoordinates): Set<PositionName> {
    
    const player = playerAt(board, moveFrom);
    const directions = [[0,1], [0,-1], [1,0], [-1,0]];
    const legalMoves : Array<GridCoordinates> = [];

    const doesntPutSelfInCheck = (position:GridCoordinates):boolean => !isInCheck(nextBoard(board, moveFrom, position), player, kingPosition);

    directions.forEach((direction) => {
        let examinedPosition = displaceTo(moveFrom, direction);

        while(isOnBoard(examinedPosition) && isUnOccupied(board, examinedPosition)){
            legalMoves.push(examinedPosition);
            examinedPosition = displaceTo(examinedPosition, direction);
        }
        if(isOnBoard(examinedPosition) && isOccupiedByPlayer(board, examinedPosition, otherPlayer(player)))
            legalMoves.push(examinedPosition);
    });

    return new Set(legalMoves.filter(doesntPutSelfInCheck).map(positionName));
}

export default rook;