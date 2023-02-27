import { PositionName } from 'positions/positionName';
import { rookMoves, bishopMoves } from 'moves'
import { Board } from 'types/Board';

function queen(
    board: Board, 
    moveFrom: PositionName, 
): Set<PositionName>{
    return new Set([
        ...rookMoves(board, moveFrom), 
        ...bishopMoves(board, moveFrom)
    ]);
}

export default queen;