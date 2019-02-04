import { playerAt, isOnBoard, isUnOccupiedByPlayer, positionName, displaceTo }  
    from 'position-utils/index';
import { isInCheck } from 'check/index';
import { nextBoard } from 'moves/index';

import { kingVectors } from 'constants/move-vectors'
import { Position } from 'constants/position';

function king (board: Board, kingPosition: GridCoordinates, castlingPreclusions:CastlingPreclusion): Set<PositionName> {

    const player = playerAt(board, kingPosition);

    const doesntPutSelfInCheck = (position: GridCoordinates): boolean => !isInCheck(nextBoard(board, kingPosition, position), player, kingPosition);

    const legalMoves = new Set(kingVectors
        .map(vector => displaceTo(kingPosition, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .filter(doesntPutSelfInCheck)
        .map(positionName));

    //castling moves:
    if(playerAt(board, kingPosition) === Player.White){
        if(!castlingPreclusions.kingSide 
            && legalMoves.has(PositionName.F1)//if the square jumped over would be in check, this would be false.
            && playerAt(board, Position.G1) === null
            && doesntPutSelfInCheck(Position.G1)
        ){
            legalMoves.add(PositionName.G1)
        }
    }
    return legalMoves;
}

export default king;