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
        blackKingPosition: 'E1',
        whiteKingPosition: 'E8',
        blackKingSideCastlingPrecluded: false,
        blackQueenSideCastlingPrecluded: false,
        whiteKingSideCastlingPrecluded: false,
        whiteQueenSideCastlingPrecluded: false,
        passedPosition: null,
        pawnAt: null
    }
}

export default initialBoardAnnotations;