import { pieceAt } from 'position-utils/index';
import { ALL_PIECES, BLACK_PIECES } from 'constants/pieces'

const playerAt = (board: Board, position: GridCoordinates): Player => {
    const piece = pieceAt(board, position);

    if(!ALL_PIECES.has(piece))
        return null;
     
    return BLACK_PIECES.has(piece)  ? Player.Black : Player.White;
}

export default playerAt;