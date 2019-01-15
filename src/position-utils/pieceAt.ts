import { ALL_PIECES } from '../constants/pieces'
import { file, rank } from 'position-utils/index'
import { Piece } from 'constants/pieces'

function pieceAt (board: Board, position: GridCoordinates): string {
    const found: string = board[file(position)][rank(position)];

    if(ALL_PIECES.has(found))
        return found;
    else
        return Piece.Empty;
}

export default pieceAt;