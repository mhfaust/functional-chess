import { KingAnnotations } from "interfaces/KingAnnotations";
import { pieceAt } from "positions";
import COORDS from "positions/coordinates";
import { PositionName } from "positions/positionName";
import { Board } from "types/Board";

function nextKingAnnotations(
        board: Board,
        moveFrom: PositionName,
        moveTo: PositionName,
        boardAnnotations: KingAnnotations
    ): KingAnnotations {
    
        const revisedKingPosition = pieceAt(board, COORDS[moveFrom]) === 'Black King' 
        ? { blackKingPosition: moveTo }
        : pieceAt(board, COORDS[moveFrom]) === 'White King' 
            ? { whiteKingPosition: moveTo }
            : { };

        return {
            ...boardAnnotations,
            ...revisedKingPosition
        }
}

export default nextKingAnnotations;