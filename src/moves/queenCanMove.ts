import { KingAnnotations } from 'interfaces/KingAnnotations';
import {
    rookCanMove,
    bishopCanMove } from 'moves';
import { Board } from 'types/Board';

function queenCanMove (
    board: Board, 
    fromPosition: GridCoordinates, 
    toPosition: GridCoordinates, 
    boardAnnotations: KingAnnotations) 
    : boolean {
    
    return rookCanMove(board, fromPosition, toPosition, boardAnnotations)
        || bishopCanMove(board, fromPosition, toPosition, boardAnnotations);
}

export default queenCanMove;