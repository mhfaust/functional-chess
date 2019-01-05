import playerAt from './playerAt';
import { isUnOccupied } from '.';

const isUnOccupiedByPlayer = (board, position, player) => {
    if(isUnOccupied(board, position))
        return true;
    
    else return playerAt(board, position) !== player;
}

export default isUnOccupiedByPlayer;