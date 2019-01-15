import { rook, bishop } from 'moves/index'

function queen(board: Board, initialPosition: GridCoordinates){
    return new Set([...rook(board, initialPosition), ...bishop(board, initialPosition)]);
}

export default queen;