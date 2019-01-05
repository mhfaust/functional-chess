import canRookMove from './canRookMove';
import canBishopMove from './canBishopMove';

function queenCanMove (board, fromPosition, toPosition) {
    
    return canRookMove(board, fromPosition, toPosition)
        || canBishopMove(board, fromPosition, toPosition);
}

export default queenCanMove;