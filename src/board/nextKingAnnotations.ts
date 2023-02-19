import { KingAnnotations } from "interfaces/KingAnnotations";
import { pieceAt } from "positions";
import { Board } from "types/Board";

function nextKingAnnotations(
        board:Board,
        moveFrom:GridCoordinates,
        moveTo:GridCoordinates,
        boardAnnotations: KingAnnotations
    ):KingAnnotations {
    
        const revisedKingPosition = pieceAt(board, moveFrom) === 'BlackKing' 
        ? { blackKingPosition: moveTo }
        : pieceAt(board, moveFrom) === 'WhiteKing' 
            ? { whiteKingPosition: moveTo }
            : { };

        return {
            ...boardAnnotations,
            ...revisedKingPosition
        }
}

export default nextKingAnnotations;