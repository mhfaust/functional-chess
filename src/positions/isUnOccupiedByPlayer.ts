import playerAt from './playerAt';
import { isUnOccupied } from 'positions';
import { Board } from 'types/Board';
import { Player } from 'types/Player';
import { PositionName } from './positionName';

function isUnOccupiedByPlayer (board: Board, position: PositionName, player: Player): boolean {
    if(isUnOccupied(board, position))
        return true;
    
    else return playerAt(board, position) !== player;
}

export default isUnOccupiedByPlayer;