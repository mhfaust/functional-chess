import playerAt from './playerAt';
import { isUnOccupied } from 'positions/index';

function isUnOccupiedByPlayer (board: Board, position: GridCoordinates, player: Player): boolean {
    if(isUnOccupied(board, position))
        return true;
    
    else return playerAt(board, position) !== player;
}

export default isUnOccupiedByPlayer;