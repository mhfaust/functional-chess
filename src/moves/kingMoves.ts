import { playerAt, isOnBoard, isUnOccupiedByPlayer, positionName, displaceTo }  
    from 'position-utils/index';
import { kingVectors } from 'constants/move-vectors'
import { Position } from 'constants/position';
import movesIntoCheck from 'check/movesIntoCheck';

function kingMoves (board:Board, kingFrom:GridCoordinates, boardAnnotations:HasCastlingInfo & HasKingPositions): Set<PositionName> {

    const { whiteQueenSideCastlingPrecluded, 
        whiteKingSideCastlingPrecluded,
        blackQueenSideCastlingPrecluded,
        blackKingSideCastlingPrecluded,
    } = boardAnnotations;

    const player = playerAt(board, kingFrom);

    const legalMoves = new Set(kingVectors
        .map(vector => displaceTo(kingFrom, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .filter(kingTo => !movesIntoCheck(board, kingFrom, kingTo, boardAnnotations))
        .map(positionName));

    const canCastle = (isPrecluded:boolean, kingTo:GridCoordinates, castleMovesTo:GridCoordinates):boolean => {
        return !isPrecluded
            && legalMoves.has(positionName(castleMovesTo))//king cant cross over check (where the castle lands)
            && playerAt(board, kingTo) === null
            && !movesIntoCheck(board, kingFrom, kingTo, boardAnnotations) ;
    }

    //castling moves:
    if(player === Player.White){
        if(canCastle(whiteKingSideCastlingPrecluded, Position.G1, Position.F1)){
            legalMoves.add(PositionName.G1);
        }
        if(canCastle(whiteQueenSideCastlingPrecluded, Position.C1, Position.D1)){
            legalMoves.add(PositionName.C1);
        }
    }
    else if(player === Player.Black){
        if(canCastle(blackKingSideCastlingPrecluded, Position.G8, Position.F8)){
            legalMoves.add(PositionName.G8);
        }
        if(canCastle(blackQueenSideCastlingPrecluded, Position.C8, Position.D8)){
            legalMoves.add(PositionName.C8);
        }
    }
    return legalMoves;
}

export default kingMoves;