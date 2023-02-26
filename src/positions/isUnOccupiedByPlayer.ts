import playerAt from './playerAt';
import { isUnOccupied } from 'positions';
import { Board } from 'types/Board';
import { Player } from 'types/Player';

function isUnOccupiedByPlayer (board: Board, position: GridCoordinates, player: Player): boolean {
    if(isUnOccupied(board, position))
        return true;
    
    else return playerAt(board, position) !== player;
}

export default isUnOccupiedByPlayer;