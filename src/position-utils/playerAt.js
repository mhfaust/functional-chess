import { pieceAt } from 'position-utils';
import { BLACK, WHITE, ALL_PIECES, BLACK_PIECES } from '../constants/pieces'

const playerAt = (board, position) => {
    const piece = pieceAt(board, position);

    return !ALL_PIECES.has(piece)
        ? null
        : BLACK_PIECES.has(piece) 
            ? BLACK 
            : WHITE;
}

export default playerAt;