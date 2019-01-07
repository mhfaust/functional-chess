import playerAt from './playerAt';
import isUnOccupied from './isUnOccupied';

function isOccupiedByPlayer (board: Board, position: GridCoordinates, player: string): boolean{
    
    if(isUnOccupied(board, position))
        return false;
    
    else return playerAt(board, position) === player;
}

export default isOccupiedByPlayer;