import { ALL_PIECES } from 'constants/pieces'
import { Piece } from 'positions/piece';
import { file, rank } from 'positions'
import { Board, PieceOrEmpty } from 'types/Board';

function pieceAt (board: Board, position: GridCoordinates): PieceOrEmpty {
    return board[file(position)][rank(position)];
}

export default pieceAt;