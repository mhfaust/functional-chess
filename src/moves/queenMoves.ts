import { rookMoves, bishopMoves } from 'moves/index'

function queen(board: Board, initialPosition: GridCoordinates){
    return new Set([...rookMoves(board, initialPosition), ...bishopMoves(board, initialPosition)]);
}

export default queen;