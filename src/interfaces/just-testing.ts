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
    castlingPreclusions: new Set(['A1']),
    capturedWhitePieces: [],
    capturedBlackPieces: []
}

export default () => x;