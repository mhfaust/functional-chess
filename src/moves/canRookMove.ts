import { rank, file, isOnBoard, playerAt, isOccupied, areSamePositions, displaceTo }
    from 'position-utils/index';
import movesIntoCheck from 'check/movesIntoCheck';

function canRookMove (board: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates, boardAnnotations:HasKingPositions)
    : boolean {
    if(!isOnBoard(toPosition)){
        return false;
    }
           
    //can't move there if it's occupied by one of player's own pieces:
    if (playerAt(board, toPosition) === playerAt(board, fromPosition)){
        return false;
    }
    
    // how much moved in each direction:
    const fileMove = file(toPosition) - file(fromPosition); 
    const rankMove = rank(toPosition) - rank(fromPosition);

    //if both or neither file and rank were changed, 
    //it's not a valid rook move:
    if(!(fileMove ^ rankMove)){
        return false;
    }

    const moveVector = [Math.sign(fileMove),  Math.sign(rankMove)]

    let step = displaceTo(fromPosition, moveVector);
        
    while(!areSamePositions(step, toPosition)){
        
        if(isOccupied(board, step)){
            return false;
        }
            
         step = displaceTo(step, moveVector);
    }
    
    if(movesIntoCheck(board, fromPosition, toPosition, boardAnnotations)){
        return false;
    }

    return true;
}

export default canRookMove;