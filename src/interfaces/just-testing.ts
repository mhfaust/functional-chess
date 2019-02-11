import { initialBoard } from "board-utils/index";
import { Position } from "constants/position";

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
    capturedPieces:{
        Black:[],
        White:[]
    }
}

export default () => x;