import { pieceAt, algebraicName } from 'position-utils/index';
import { Player, BLACK_PIECES, WHITE_PIECES } from 'constants/pieces';

function allPlayerPositions(board: Board, player: string): Array<PiecePosition>{
    
    const occupiedPositions: Array<PiecePosition> = [];
    const allPlayerPieces = player === Player.Black ? BLACK_PIECES : WHITE_PIECES;
    
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