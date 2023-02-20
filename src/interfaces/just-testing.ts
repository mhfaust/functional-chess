import COORDS from 'positions/coordinates'
import { BoardAnnotations } from "interfaces/BoardAnnotations";

const x: BoardAnnotations = {
    lastPlayerMoved: 'White',
    lastPieceMoved: 'White Pawn',
    lastMoveFrom: 'E2',
    lastMoveTo: 'E4',
    whoseTurn: 'Black',
    isInCheck: false,
    isCheckmate: false,
    passedPosition: null, 
    pawnAt: null,
    whiteQueenSideCastlingPrecluded: false,
    whiteKingSideCastlingPrecluded: false,
    blackQueenSideCastlingPrecluded: false,
    blackKingSideCastlingPrecluded: false,
    whiteKingPosition: 'E1',
    blackKingPosition: 'E8',
    capturedWhitePieces: [],
    capturedBlackPieces: []
}

export default () => x;