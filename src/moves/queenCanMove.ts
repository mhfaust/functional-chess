import {
    rookCanMove,
    bishopCanMove } from 'moves';
import { Board } from 'types/Board';

function queenCanMove (
    board: Board, 
    fromPosition: GridCoordinates, 
    toPosition: GridCoordinates, 
): boolean {
    
    return rookCanMove(board, fromPosition, toPosition)
        || bishopCanMove(board, fromPosition, toPosition);
}

export default queenCanMove;