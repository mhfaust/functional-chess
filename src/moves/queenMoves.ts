import { PositionName } from 'enums/positionName';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { rookMoves, bishopMoves } from 'moves'
import { Board } from 'types/Board';

function queen(
    board: Board, 
    moveFrom: GridCoordinates, 
    boardAnnotations: KingAnnotations)
    : Set<PositionName>{
    return new Set([
        ...rookMoves(board, moveFrom, boardAnnotations), 
        ...bishopMoves(board, moveFrom, boardAnnotations)
    ]);
}

export default queen;