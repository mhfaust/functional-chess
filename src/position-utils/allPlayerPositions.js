import { pieceAt } from 'position-utils';
import { algebraicName } from '.';
import { BLACK, BLACK_PIECES, WHITE_PIECES } from 'constants/pieces';

function allPlayerPositions(board, player){
    const occupiedPositions = [];
    const allPlayerPieces = player === BLACK ? BLACK_PIECES : WHITE_PIECES;
    
    board.forEach((file, i) => file.forEach((rank,j) => {
        const piece = pieceAt(board, [i, j]);
        if(piece &&  allPlayerPieces.has(piece)){
            occupiedPositions.push({
                position: algebraicName([i, j]),
                piece
            });
        }
    }));
    return occupiedPositions;
}

export default allPlayerPositions;