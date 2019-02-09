import canRookMove from './canRookMove';
import canBishopMove from 'moves/canBishopMove';

function queenCanMove (board: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates, kingPosition: GridCoordinates) 
    : boolean {
    
    return canRookMove(board, fromPosition, toPosition, kingPosition)
        || canBishopMove(board, fromPosition, toPosition, kingPosition);
}

export default queenCanMove;