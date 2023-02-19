import { Position } from "constants/position";
import { BoardAnnotations } from "interfaces/BoardAnnotations";

const x: BoardAnnotations = {
    lastPlayerMoved: Player.White,
    lastPieceMoved: Piece.WhitePawn,
    lastMoveFrom: Position.E2,
    lastMoveTo:Position.E4,
    whoseTurn: Player.Black,
    isInCheck: false,
    isCheckmate: false,
    passedPosition: null, 
    pawnAt: null,
    whiteQueenSideCastlingPrecluded:false,
    whiteKingSideCastlingPrecluded:false,
    blackQueenSideCastlingPrecluded:false,
    blackKingSideCastlingPrecluded:false,
    whiteKingPosition:Position.E1,
    blackKingPosition:Position.E8,
    capturedWhitePieces:[],
    capturedBlackPieces:[]
}

export default () => x;