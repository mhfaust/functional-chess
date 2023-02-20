import { KingAnnotations } from "interfaces/KingAnnotations";
import { locatePiece, positionName } from "positions";
import { Board } from "types/Board";

function kingPositions(board: Board): KingAnnotations{
    return {
        whiteKingPosition: positionName(locatePiece(board, 'White King')),
        blackKingPosition: positionName(locatePiece(board, 'Black King'))
    };
}

export default kingPositions;