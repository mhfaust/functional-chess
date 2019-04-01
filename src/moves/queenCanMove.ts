import {
    rookCanMove,
    bishopCanMove } from 'moves';

function queenCanMove (
    board: Board, 
    fromPosition: GridCoordinates, 
    toPosition: GridCoordinates, 
    boardAnnotations:KingAnnotations) 
    : boolean {
    
    return rookCanMove(board, fromPosition, toPosition, boardAnnotations)
        || bishopCanMove(board, fromPosition, toPosition, boardAnnotations);
}

export default queenCanMove;