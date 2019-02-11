import canRookMove from './canRookMove';
import canBishopMove from 'moves/canBishopMove';

function queenCanMove (board: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates, boardAnnotations:HasKingPositions) 
    : boolean {
    
    return canRookMove(board, fromPosition, toPosition, boardAnnotations)
        || canBishopMove(board, fromPosition, toPosition, boardAnnotations);
}

export default queenCanMove;