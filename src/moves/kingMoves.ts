import { 
    playerAt, 
    isOnBoard, 
    isUnOccupiedByPlayer, 
    positionName, 
    displaceTo, 
    pieceAt}  from 'positions';
import { kingVectors } from 'constants/move-vectors'
import COORDS from 'positions/coordinates'
import movesIntoCheck from 'check/movesIntoCheck';
import { CastlingPreclusions } from 'types/CastlingPreclusions';
import { PositionName } from 'positions/positionName';
import { Board } from 'types/Board';

function kingMoves (
    board: Board, 
    kingFrom: GridCoordinates, 
    castlingPreclusions: CastlingPreclusions
): Set<PositionName> {

    const player = playerAt(board, kingFrom);

    const legalMoves = new Set(kingVectors
        .map(vector => displaceTo(kingFrom, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .filter(kingTo => !movesIntoCheck(board, kingFrom, kingTo))
        .map(positionName));

    //castling moves:
    if (player === 'White' && kingFrom == COORDS.E1) {
        if(!castlingPreclusions.has('H1') 
            && pieceAt(board, COORDS.F1) === null 
            && pieceAt(board, COORDS.G1) === null
            && !movesIntoCheck(board, COORDS.E1, COORDS.F1)
            && !movesIntoCheck(board, COORDS.E1, COORDS.G1)
        ){
            legalMoves.add('G1');
        }
        if(!castlingPreclusions.has('A1') 
            && pieceAt(board, COORDS.B1) === null 
            && pieceAt(board, COORDS.C1) === null
            && pieceAt(board, COORDS.D1) === null
            && !movesIntoCheck(board, COORDS.E1, COORDS.C1)
            && !movesIntoCheck(board, COORDS.E1, COORDS.D1)
        ){
            legalMoves.add('C1');
        }
    }
    if (player === 'Black' && kingFrom === COORDS.E8) {
        if(!castlingPreclusions.has('H8') 
            && pieceAt(board, COORDS.F8) === null
            && pieceAt(board, COORDS.G8) === null
            && !movesIntoCheck(board, COORDS.E8, COORDS.F8)
            && !movesIntoCheck(board, COORDS.E8, COORDS.G8)
        ){
            legalMoves.add('G8');
        }
        if(!castlingPreclusions.has('A8') 
            && pieceAt(board, COORDS.B8) === null
            && pieceAt(board, COORDS.C8) === null
            && pieceAt(board, COORDS.D8) === null
            && !movesIntoCheck(board, COORDS.E8, COORDS.C8)
            && !movesIntoCheck(board, COORDS.E8, COORDS.D8)
        ){
            legalMoves.add('C8');
        }
    }
    return legalMoves;
}

export default kingMoves;