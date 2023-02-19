import { KingAnnotations } from "interfaces/KingAnnotations";
import { locatePiece } from "positions";
import { Board } from "types/Board";

function kingPositions(board: Board): KingAnnotations{
    return {
        whiteKingPosition: locatePiece(board, 'White King'),
        blackKingPosition: locatePiece(board, 'Black King')
    };
}

export default kingPositions;