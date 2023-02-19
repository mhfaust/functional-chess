import { pieceAt, positionName } from 'positions';
import { BLACK_PIECES, WHITE_PIECES } from 'constants/pieces';
import { PiecePosition } from 'interfaces/PiecePosition';
import { Board } from 'types/Board';

function allPlayerPositions(board: Board, player: Player): Array<PiecePosition>{
    
    const occupiedPositions: Array<PiecePosition> = [];
    const allPlayerPieces = player === Player.Black ? BLACK_PIECES : WHITE_PIECES;

    board.forEach((file, i) => file.forEach((rank,j) => {

        const piece = pieceAt(board, [i, j]);

        if(piece &&  allPlayerPieces.has(piece)){
            occupiedPositions.push({
                position: positionName([i, j]),
                piece
            });
        }
    }));
    return occupiedPositions;
}

export default allPlayerPositions;