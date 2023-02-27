import { positionName } from 'positions';
import { BLACK_PIECES, WHITE_PIECES } from 'constants/pieces';
import { Board } from 'types/Board';
import { Player } from 'types/Player';
import { Piece } from 'positions/piece';
import { PositionName } from 'positions/positionName';

export type PiecePosition = {
    position: PositionName;
    piece: Piece;
}
function allPlayerPositions(board: Board, player: Player): Array<PiecePosition>{
    
    const occupiedPositions: Array<PiecePosition> = [];
    const allPlayerPieces = player === 'Black' ? BLACK_PIECES : WHITE_PIECES;

    board.forEach((file, i) => file.forEach((piece, j) => {

        if(piece && allPlayerPieces.has(piece)){
            occupiedPositions.push({
                position: positionName([i, j]),
                piece
            });
        }
    }));
    return occupiedPositions;
}

export default allPlayerPositions;