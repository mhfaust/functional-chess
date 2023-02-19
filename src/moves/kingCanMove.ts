import { rank, file, playerAt, areSamePositions } from 'positions';
import movesIntoCheck from 'check/movesIntoCheck';
import { Position } from 'constants/position';
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
                && areSamePositions(toPosition, Position.G1)
                && !movesIntoCheck(board, Position.E1, Position.F1, boardAnnotations)//across check
                && !movesIntoCheck(board, Position.E1, Position.G1, boardAnnotations)//into check
            ){
                return true;
        }
        if(!boardAnnotations.whiteQueenSideCastlingPrecluded 
                && areSamePositions(toPosition, Position.C1)
                && !movesIntoCheck(board, Position.E1, Position.D1, boardAnnotations)//across check
                && !movesIntoCheck(board, Position.E1, Position.C1, boardAnnotations)//into check
            ){
                return true;
        }
    }
    //black castling
    if(player === 'Black'){
        if(!boardAnnotations.blackKingSideCastlingPrecluded 
                && areSamePositions(toPosition, Position.G8)
                && !movesIntoCheck(board, Position.E8, Position.F8, boardAnnotations)//across check
                && !movesIntoCheck(board, Position.E8, Position.G8, boardAnnotations)//into check
            ){
                return true;
        }
        if(!boardAnnotations.blackQueenSideCastlingPrecluded 
                && areSamePositions(toPosition, Position.C8)
                && !movesIntoCheck(board, Position.E8, Position.D8, boardAnnotations)//across check
                && !movesIntoCheck(board, Position.E8, Position.C8, boardAnnotations)//into check
            ){
                return true;
        }
    }
    
    return false;
}

export default kingCanMove;