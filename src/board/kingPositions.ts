import { locatePiece } from "positions/index";

function kingPositions(board: Board): KingAnnotations{
    return {
        whiteKingPosition: locatePiece(board, Piece.WhiteKing),
        blackKingPosition: locatePiece(board, Piece.BlackKing)
    };
}

export default kingPositions;