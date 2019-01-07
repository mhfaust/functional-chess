import playerAt from './playerAt';
import { isUnOccupied } from 'position-utils/index';

function isUnOccupiedByPlayer (board: Board, position: GridCoordinates, player: string): boolean {
    if(isUnOccupied(board, position))
        return true;
    
    else return playerAt(board, position) !== player;
}

export default isUnOccupiedByPlayer;