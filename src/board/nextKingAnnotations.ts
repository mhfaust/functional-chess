import { KingAnnotations } from "interfaces/KingAnnotations";
import { pieceAt } from "positions";

function nextKingAnnotations(
        board:Board,
        moveFrom:GridCoordinates,
        moveTo:GridCoordinates,
        boardAnnotations: KingAnnotations
    ):KingAnnotations {
    
        const revisedKingPosition = pieceAt(board, moveFrom) === Piece.BlackKing 
        ? { blackKingPosition: moveTo }
        : pieceAt(board, moveFrom) === Piece.WhiteKing 
            ? { whiteKingPosition: moveTo }
            : { };

        return {
            ...boardAnnotations,
            ...revisedKingPosition
        }
}

export default nextKingAnnotations;