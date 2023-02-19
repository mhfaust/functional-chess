import { pieceAt } from 'positions';
import { ALL_PIECES, BLACK_PIECES } from 'constants/pieces'
import { Board } from 'types/Board';

const playerAt = (board: Board, position: GridCoordinates): Player => {
    const piece = pieceAt(board, position);

    if(piece === null)
        return null;
     
    return BLACK_PIECES.has(piece)  ? Player.Black : Player.White;
}

export default playerAt;