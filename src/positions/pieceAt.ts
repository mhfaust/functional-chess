import { ALL_PIECES } from 'constants/pieces'
import { file, rank } from 'positions/index'

function pieceAt (board: Board, position: GridCoordinates): Piece {
    const found: Piece = board[file(position)][rank(position)];

    if(ALL_PIECES.has(found))
        return found;
    else
        return Piece.Empty;
}

export default pieceAt;