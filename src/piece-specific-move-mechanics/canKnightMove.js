import { isOnBoard, playerAt } from 'position-utils'

function canKnightMove (board, from, to) {
    
    if(!isOnBoard(to))
        return false;
            
    //can't move there if it's occupied by one of player's own pieces:
    if (playerAt(board, to) === playerAt(board, from))
        return false;
        
    const rectangularAreaOfDisplacement = Math.abs((from[0] - to[0]) * (from[1], - to[1]))
    //Given the discrete nature of board moves, 
    //this can only be true if moved 1 space in one direction 
    //and 2 spaces in the orthogonal direction (i.e. how a knight moves):
    if(rectangularAreaOfDisplacement !== 2)
        return false;

    return true;
}

export default canKnightMove;