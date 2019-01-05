import { rank, file, isOnBoard, playerAt, isOccupied, areSamePositions } from 'position-utils';

function canRookMove (board, fromPosition, toPosition) {
    if(!isOnBoard(toPosition))
        return false;
           
    //can't move there if it's occupied by one of player's own pieces:
    if (playerAt(board, toPosition) === playerAt(board, fromPosition))
        return false;
    
    // how much moved in each direction:
    const fileMove = file(toPosition) - file(fromPosition); 
    const rankMove = rank(toPosition) - rank(fromPosition);

    //if both or neither file and rank were changed, 
    //it's not a valid rook move:
    //(btw, remember that -1 is truthy)
    if(!(fileMove ^ rankMove))
        return false;

    //if we run into any pieces along the way, 
    //can't do that, so...

    //Function to get position of one step further from
    //a reference position in the direction of the move:
    const fileIncrement = Math.sign(fileMove);
    const rankIncrement =  Math.sign(rankMove);

    const nextInterStep = (position) => [
        file(position) + fileIncrement, 
        rank(position) + rankIncrement
    ];
        
    //start checking one step out from the move-from position
    let interStep = nextInterStep(fromPosition);

    //and keep checking until we run into a piece or the move-to position:
    while(!areSamePositions(interStep, toPosition)){
        
        if(isOccupied(board, interStep))
            return false;
        interStep = nextInterStep(interStep);
    }

    return true;
}

export default canRookMove;