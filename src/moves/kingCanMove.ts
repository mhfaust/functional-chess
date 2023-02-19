import { rank, file, playerAt, areSamePositions } from 'positions';
import movesIntoCheck from 'check/movesIntoCheck';
import COORDS from 'positions/coordinates'
import { CastlingAnnotations } from 'interfaces/CastlingAnnotations';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';


function kingCanMove (
    board: Board, 
    fromPosition: GridCoordinates, 
    toPosition: GridCoordinates, 
    boardAnnotations: KingAnnotations & CastlingAnnotations) 
    : boolean {

    const player = playerAt(board, fromPosition);
   
    //normal move 
    if(Math.abs(rank(toPosition) - rank(fromPosition)) < 2
        && Math.abs(file(toPosition) - file(fromPosition)) < 2
        && player !== playerAt(board, toPosition)
        && !movesIntoCheck(board, fromPosition, toPosition, boardAnnotations)){
            return true;
        }
    
    //white castling
    if(player === 'White'){
        if(!boardAnnotations.whiteKingSideCastlingPrecluded 
                && areSamePositions(toPosition, COORDS.G1)
                && !movesIntoCheck(board, COORDS.E1, COORDS.F1, boardAnnotations)//across check
                && !movesIntoCheck(board, COORDS.E1, COORDS.G1, boardAnnotations)//into check
            ){
                return true;
        }
        if(!boardAnnotations.whiteQueenSideCastlingPrecluded 
                && areSamePositions(toPosition, COORDS.C1)
                && !movesIntoCheck(board, COORDS.E1, COORDS.D1, boardAnnotations)//across check
                && !movesIntoCheck(board, COORDS.E1, COORDS.C1, boardAnnotations)//into check
            ){
                return true;
        }
    }
    //black castling
    if(player === 'Black'){
        if(!boardAnnotations.blackKingSideCastlingPrecluded 
                && areSamePositions(toPosition, COORDS.G8)
                && !movesIntoCheck(board, COORDS.E8, COORDS.F8, boardAnnotations)//across check
                && !movesIntoCheck(board, COORDS.E8, COORDS.G8, boardAnnotations)//into check
            ){
                return true;
        }
        if(!boardAnnotations.blackQueenSideCastlingPrecluded 
                && areSamePositions(toPosition, COORDS.C8)
                && !movesIntoCheck(board, COORDS.E8, COORDS.D8, boardAnnotations)//across check
                && !movesIntoCheck(board, COORDS.E8, COORDS.C8, boardAnnotations)//into check
            ){
                return true;
        }
    }
    
    return false;
}

export default kingCanMove;