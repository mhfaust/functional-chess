import { rookMoves, bishopMoves } from 'moves/index'

function queen(board: Board, moveFrom: GridCoordinates, kingPosition: GridCoordinates){
    return new Set([
        ...rookMoves(board, moveFrom, kingPosition), 
        ...bishopMoves(board, moveFrom, kingPosition)
    ]);
}

export default queen;