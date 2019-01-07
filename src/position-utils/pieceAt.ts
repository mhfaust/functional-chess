import { Piece, ALL_PIECES } from '../constants/pieces'
import { file, rank } from 'position-utils/index'

function pieceAt (board: Board, position: GridCoordinates): string {
    const found = board[file(position)][rank(position)];

    if(ALL_PIECES.has(found))
        return found;
    else
        return null;
}

export default pieceAt;