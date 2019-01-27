import { file, rank, isOnBoard, playerAt, isOccupied, areSamePositions } from 'position-utils/index'

function canBishopMove (board: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates)
    : boolean {
        
    if(!isOnBoard(toPosition))
        return false;
    
    const thisPlayer = playerAt(board, toPosition);

    //can't move there if it's occupied by one of player's own pieces:
    if (thisPlayer === playerAt(board, fromPosition))
        return false;
    
    const fileMove = file(toPosition) - file(fromPosition);
    const rankMove = rank(toPosition) - rank(fromPosition);

    //if either file and rank were unchanged then
    //it's not a valid bishop move:
    if(fileMove === 0 || rankMove === 0)
        return false;

    //diagonal move means rank and file changed by the same amount:
    if(Math.abs(fileMove) !== Math.abs(rankMove))
        return false;

    //if we run into any pieces along the way, 
    //can't get to the move-to position, so..

    //Function to get position of one step further from
    //a reference position in the direction of the move:
    const fileIncrement = Math.sign(fileMove);
    const rankIncrement =  Math.sign(rankMove);

    const nextInterStep = (position: GridCoordinates): GridCoordinates => [
        position[0] + fileIncrement, 
        position[1] + rankIncrement
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

export default canBishopMove;