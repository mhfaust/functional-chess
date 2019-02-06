import { playerAt, isOnBoard, isUnOccupiedByPlayer, positionName, displaceTo }  
    from 'position-utils/index';
import { isInCheck } from 'check/index';
import { nextBoard } from 'moves/index';
import { kingVectors } from 'constants/move-vectors'
import { Position } from 'constants/position';

function kingMoves (board: Board, kingFrom: GridCoordinates, castlingPreclusions:CastlingPreclusion): Set<PositionName> {

    const player = playerAt(board, kingFrom);

    const doesntPutSelfInCheck = (kingTo: GridCoordinates): boolean => !isInCheck(nextBoard(board, kingFrom, kingTo), player, kingTo);

    const legalMoves = new Set(kingVectors
        .map(vector => displaceTo(kingFrom, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .filter(doesntPutSelfInCheck)
        .map(positionName));

    const canCastle = (kingMovesTo:GridCoordinates, castleMovesTo:GridCoordinates):boolean => {
        return legalMoves.has(positionName(castleMovesTo))//king cant cross over check (where the castle lands)
            && playerAt(board, kingMovesTo) === null
            && doesntPutSelfInCheck(kingMovesTo) ;
    }

    //castling moves:
    if(player === Player.White){
        if(!castlingPreclusions.kingSide && canCastle(Position.G1, Position.F1)){
            legalMoves.add(PositionName.G1);
        }
        if(!castlingPreclusions.queenSide && canCastle(Position.C1, Position.D1)){
            legalMoves.add(PositionName.C1);
        }
    }
    else if(player === Player.Black){
        if(!castlingPreclusions.kingSide && canCastle(Position.G8, Position.F8)){
            legalMoves.add(PositionName.G8);
        }
        if(!castlingPreclusions.queenSide && canCastle(Position.C8, Position.D8)){
            legalMoves.add(PositionName.C8);
        }
    }
    return legalMoves;
}

export default kingMoves;