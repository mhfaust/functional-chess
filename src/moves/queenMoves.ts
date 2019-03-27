import { rookMoves, bishopMoves } from 'moves/index'

function queen(
    board:Board, 
    moveFrom:GridCoordinates, 
    boardAnnotations:KingAnnotations)
    : Set<PositionName>{
    return new Set([
        ...rookMoves(board, moveFrom, boardAnnotations), 
        ...bishopMoves(board, moveFrom, boardAnnotations)
    ]);
}

export default queen;