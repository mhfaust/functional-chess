import { rook, bishop } from 'attacked-positions/index'

function queen(board: Board, initialPosition: GridCoordinates){
    return new Set([...rook(board, initialPosition), ...bishop(board, initialPosition)]);
}

export default queen;