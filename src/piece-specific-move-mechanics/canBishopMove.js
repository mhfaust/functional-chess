import { file, rank, isOnBoard, playerAt, isOccupied, areSamePositions } from 'position-utils'

function canBishopMove (board, fromPosition, toPosition) {
    if(!isOnBoard(toPosition))
        return false;
           
    //can't move there if it's occupied by one of player's own pieces:
    if (playerAt(board, toPosition) === playerAt(board, fromPosition))
        return false;
    
    const fileMove = file(toPosition) - file(fromPosition);
    const rankMove = rank(toPosition) - rank(fromPosition);

    //if either file and rank were unchanged then
    //it's not a valid rook move:
    if(!fileMove || !rankMove)
        return false;

    //diagonal move means rank and file changed by the same amount:
    if(Math.abs(fileMove) !== Math.abs(rankMove))
        return false;

    //if we run into any pieces along the way, 
    //can't get to the move-to position, so..

    //Function to get position of one step further from
    //a reference position in the direction of the move:
    const fileIncrement = Math.sign(fileMove)
    const rankIncrement =  Math.sign(rankMove)
    const nextInterStep = (position) => [
        position[0] + fileIncrement, 
        position[1] + rankIncrement
    ];

    //start checking one step out from the move-from position
    let interStep = nextInterStep(fromPosition);

    //and keep checking until we run into a piece or the move-to position:
    while(!areSamePositions(interStep, toPosition)){
        if(isOccupied(board, interStep))
            return false;
        interStep = nextInterStep(interStep)
    }

    return true;
}

export default canBishopMove;