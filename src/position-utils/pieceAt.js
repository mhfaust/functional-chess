import { ALL_PIECES } from '../constants/pieces'

function pieceAt (board, position) {
    const found = board[position[0]][position[1]];

    if(ALL_PIECES.has(found))
        return found;
    else
        return null;
}

export default pieceAt;