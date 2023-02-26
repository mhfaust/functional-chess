import { pieceAt } from 'positions';
import { BLACK_PIECES } from 'constants/pieces'
import { Board } from 'types/Board';
import { Player } from 'types/Player';

const playerAt = (board: Board, position: GridCoordinates): Player | null => {
    const piece = pieceAt(board, position);

    if(piece === null){
        return null;
    }
     
    return BLACK_PIECES.has(piece)  ? 'Black' : 'White';
}

export default playerAt;