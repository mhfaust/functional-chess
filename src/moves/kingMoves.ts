import { 
    playerAt, 
    isOnBoard, 
    isUnOccupiedByPlayer, 
    positionName, 
    displaceTo }  from 'positions';
import { kingVectors } from 'constants/move-vectors'
import COORDS from 'positions/coordinates'
import movesIntoCheck from 'check/movesIntoCheck';
import { CastlingAnnotations } from 'interfaces/CastlingAnnotations';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { PositionName } from 'positions/positionName';
import { Board } from 'types/Board';

function kingMoves (
    board: Board, 
    kingFrom: GridCoordinates, 
    boardAnnotations: CastlingAnnotations & KingAnnotations)
    : Set<PositionName> {

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

    const canCastle = (isPrecluded: boolean, kingTo: GridCoordinates, castleMovesTo: GridCoordinates): boolean => {
        return !isPrecluded
            && legalMoves.has(positionName(castleMovesTo))//king cant cross over check (where the castle lands)
            && playerAt(board, kingTo) === null
            && !movesIntoCheck(board, kingFrom, kingTo, boardAnnotations) ;
    }

    //castling moves:
    if(player === 'White'){
        if(canCastle(whiteKingSideCastlingPrecluded, COORDS.G1, COORDS.F1)){
            legalMoves.add('G1');
        }
        if(canCastle(whiteQueenSideCastlingPrecluded, COORDS.C1, COORDS.D1)){
            legalMoves.add('C1');
        }
    }
    else if(player === 'Black'){
        if(canCastle(blackKingSideCastlingPrecluded, COORDS.G8, COORDS.F8)){
            legalMoves.add('G8');
        }
        if(canCastle(blackQueenSideCastlingPrecluded, COORDS.C8, COORDS.D8)){
            legalMoves.add('C8');
        }
    }
    return legalMoves;
}

export default kingMoves;