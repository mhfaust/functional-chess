import { Position } from "constants/position";
import { BoardAnnotations } from "interfaces/BoardAnnotations";

function initialBoardAnnotations(): BoardAnnotations{
    return{
        lastPlayerMoved: null,
        lastPieceMoved: null,
        lastMoveFrom: null,
        lastMoveTo: null,
        whoseTurn: 'White',
        isInCheck: false,
        isCheckmate: false,
        capturedBlackPieces: [],
        capturedWhitePieces: [],
        blackKingPosition: Position.E1,
        whiteKingPosition: Position.E8,
        blackKingSideCastlingPrecluded: false,
        blackQueenSideCastlingPrecluded: false,
        whiteKingSideCastlingPrecluded: false,
        whiteQueenSideCastlingPrecluded: false,
        passedPosition: null,
        pawnAt: null
    }
}

export default initialBoardAnnotations;