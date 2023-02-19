import COORDS from 'positions/coordinates'
import { BoardAnnotations } from "interfaces/BoardAnnotations";

const x: BoardAnnotations = {
    lastPlayerMoved: 'White',
    lastPieceMoved: 'White Pawn',
    lastMoveFrom: COORDS.E2,
    lastMoveTo: COORDS.E4,
    whoseTurn: 'Black',
    isInCheck: false,
    isCheckmate: false,
    passedPosition: null, 
    pawnAt: null,
    whiteQueenSideCastlingPrecluded: false,
    whiteKingSideCastlingPrecluded: false,
    blackQueenSideCastlingPrecluded: false,
    blackKingSideCastlingPrecluded: false,
    whiteKingPosition: COORDS.E1,
    blackKingPosition: COORDS.E8,
    capturedWhitePieces: [],
    capturedBlackPieces: []
}

export default () => x;