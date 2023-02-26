import { rank, file, playerAt, areSamePositions, pieceAt } from 'positions';
import movesIntoCheck from 'check/movesIntoCheck';
import COORDS from 'positions/coordinates'
import { CastlingPreclusions } from 'interfaces/CastlingAnnotations';
import { Board } from 'types/Board';


function kingCanMove (
    board: Board, 
    from: GridCoordinates, 
    to: GridCoordinates, 
    castlingPreclusions: CastlingPreclusions
) {

    const player = playerAt(board, from);
   
    //normal move 
    if(Math.abs(rank(to) - rank(from)) < 2
        && Math.abs(file(to) - file(from)) < 2
        && player !== playerAt(board, to)
        && !movesIntoCheck(board, from, to)
    ){
        return true;
    }

    if(from === COORDS.E1 && player === 'White'){
        if(to === COORDS.G1){
            return !castlingPreclusions.has('H1') 
                && pieceAt(board, COORDS.F1) === null 
                && pieceAt(board, COORDS.G1) === null
                && !movesIntoCheck(board, COORDS.E1, COORDS.F1)//across check
                && !movesIntoCheck(board, COORDS.E1, COORDS.G1)//into check
        }
        if(to === COORDS.C1){
            return !castlingPreclusions.has('A1') 
                && pieceAt(board, COORDS.B1) === null 
                && pieceAt(board, COORDS.C1) === null
                && pieceAt(board, COORDS.D1) === null
                && !movesIntoCheck(board, COORDS.E1, COORDS.D1)//across check
                && !movesIntoCheck(board, COORDS.E1, COORDS.C1)//into check
        }
        return false;
    }
    if(from === COORDS.E8 && player === 'Black'){
        if(to === COORDS.G8){
            return !castlingPreclusions.has('H8') 
                && pieceAt(board, COORDS.F8) === null
                && pieceAt(board, COORDS.G8) === null
                && !movesIntoCheck(board, COORDS.E8, COORDS.F8)//across check
                && !movesIntoCheck(board, COORDS.E8, COORDS.G8)//into check
        }
        if(to === COORDS.C8){
            return !castlingPreclusions.has('A8') 
                && pieceAt(board, COORDS.B8) === null
                && pieceAt(board, COORDS.C8) === null
                && pieceAt(board, COORDS.D8) === null
                && !movesIntoCheck(board, COORDS.E8, COORDS.D8)//across check
                && !movesIntoCheck(board, COORDS.E8, COORDS.C8)//into check
        }
        return false;        
    }

    return false;
}

export default kingCanMove;