import { KingAnnotations } from "interfaces/KingAnnotations";
import { locatePiece } from "positions";
import { Board } from "types/Board";

function kingPositions(board: Board): KingAnnotations{
    return {
        whiteKingPosition: locatePiece(board, 'WhiteKing'),
        blackKingPosition: locatePiece(board, 'BlackKing')
    };
}

export default kingPositions;