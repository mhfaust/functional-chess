import { rank, file, playerAt } from 'position-utils/index';
import movesIntoCheck from 'check/movesIntoCheck';

function canKingMove (board: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates, boardAnnotations:HasKingPositions) 
    : boolean {

    const player = playerAt(board, fromPosition);

    if(
        Math.abs(rank(toPosition) - rank(fromPosition)) > 1
        || Math.abs(file(toPosition) - rank(fromPosition)) > 1
        || player === playerAt(board, toPosition)
        || movesIntoCheck(board, fromPosition, toPosition, boardAnnotations)
    ){
        return false;
    }

    return true;
}

export default canKingMove;