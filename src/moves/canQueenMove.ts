import canRookMove from './canRookMove';
import canBishopMove from 'moves/canBishopMove';

function queenCanMove (board: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates) 
    : boolean {
    
    return canRookMove(board, fromPosition, toPosition)
        || canBishopMove(board, fromPosition, toPosition);
}

export default queenCanMove;