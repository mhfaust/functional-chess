import { rook, bishop } from 'attacked-positions'

function queen(board, initialPosition){
    return new Set([...rook(board, initialPosition), ...bishop(board, initialPosition)]);
}

export default queen;