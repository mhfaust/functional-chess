import { Board, PieceOrEmpty } from 'types/Board';
import { PositionName } from './positionName';
import COORDS from './coordinates';

function pieceAt (board: Board, position: PositionName): PieceOrEmpty {
    const [file, rank] = COORDS[position]
    return board[file][rank];
}

export default pieceAt;