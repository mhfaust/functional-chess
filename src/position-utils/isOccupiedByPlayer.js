import playerAt from './playerAt';
import isUnOccupied from './isUnOccupied';

const isOccupiedByPlayer = (board, position, player) => {
    
    if(isUnOccupied(board, position))
        return false;
    
    else return playerAt(board, position) === player;
}

export default isOccupiedByPlayer;