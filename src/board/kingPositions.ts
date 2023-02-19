import { KingAnnotations } from "interfaces/KingAnnotations";
import { locatePiece } from "positions";

function kingPositions(board: Board): KingAnnotations{
    return {
        whiteKingPosition: locatePiece(board, Piece.WhiteKing),
        blackKingPosition: locatePiece(board, Piece.BlackKing)
    };
}

export default kingPositions;