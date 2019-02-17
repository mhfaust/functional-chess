import { locatePiece } from "position-utils/index";

function kingPositions(board: Board): HasKingPositions{
    return {
        whiteKingPosition: locatePiece(board, Piece.WhiteKing),
        blackKingPosition: locatePiece(board, Piece.BlackKing)
    };
}

export default kingPositions;