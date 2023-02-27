import {
    rookCanMove,
    bishopCanMove } from 'moves';
import { PositionName } from 'positions/positionName';
import { Board } from 'types/Board';

function queenCanMove (
    board: Board, 
    fromPosition: PositionName, 
    toPosition: PositionName, 
): boolean {
    
    return rookCanMove(board, fromPosition, toPosition)
        || bishopCanMove(board, fromPosition, toPosition);
}

export default queenCanMove;