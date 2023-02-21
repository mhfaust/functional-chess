import { rank, file, playerAt, areSamePositions } from 'positions';
import movesIntoCheck from 'check/movesIntoCheck';
import COORDS from 'positions/coordinates'
import { CastlingAnnotations } from 'interfaces/CastlingAnnotations';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';


function kingCanMove (
    board: Board, 
    from: GridCoordinates, 
    to: GridCoordinates, 
    annotations: KingAnnotations & CastlingAnnotations
) {

    const player = playerAt(board, from);
   
    //normal move 
    if(Math.abs(rank(to) - rank(from)) < 2
        && Math.abs(file(to) - file(from)) < 2
        && player !== playerAt(board, to)
        && !movesIntoCheck(board, from, to, annotations)){
            return true;
        }
    
    //white castling
    if(player === 'White'){
        if(!annotations.whiteKingSideCastlingPrecluded 
                && areSamePositions(to, COORDS.G1)
                && !movesIntoCheck(board, COORDS.E1, COORDS.F1, annotations)//across check
                && !movesIntoCheck(board, COORDS.E1, COORDS.G1, annotations)//into check
            ){
                return true;
        }
        if(!annotations.whiteQueenSideCastlingPrecluded 
                && areSamePositions(to, COORDS.C1)
                && !movesIntoCheck(board, COORDS.E1, COORDS.D1, annotations)//across check
                && !movesIntoCheck(board, COORDS.E1, COORDS.C1, annotations)//into check
            ){
                return true;
        }
    }
    //black castling
    if(player === 'Black'){
        if(!annotations.blackKingSideCastlingPrecluded 
                && areSamePositions(to, COORDS.G8)
                && !movesIntoCheck(board, COORDS.E8, COORDS.F8, annotations)//across check
                && !movesIntoCheck(board, COORDS.E8, COORDS.G8, annotations)//into check
            ){
                return true;
        }
        if(!annotations.blackQueenSideCastlingPrecluded 
                && areSamePositions(to, COORDS.C8)
                && !movesIntoCheck(board, COORDS.E8, COORDS.D8, annotations)//across check
                && !movesIntoCheck(board, COORDS.E8, COORDS.C8, annotations)//into check
            ){
                return true;
        }
    }
    
    return false;
}

export default kingCanMove;