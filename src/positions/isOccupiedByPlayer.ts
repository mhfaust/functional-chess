import playerAt from './playerAt';
import isUnOccupied from './isUnOccupied';
import { Board } from 'types/Board';
import { Player } from 'types/Player';
import { PositionName } from './positionName';

function isOccupiedByPlayer (board: Board, position: PositionName, player: Player): boolean{
    
    if(isUnOccupied(board, position)){
        return false;
    }
    
    else return playerAt(board, position) === player;
}

export default isOccupiedByPlayer;