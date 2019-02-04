import { initialBoard } from "board-utils/index";
import { Position } from "constants/position";

const x: AnnotatedBoard = {
    board: initialBoard(),
    lastPlayerMoved: Player.White,
    lastPieceMoved: Piece.WhitePawn,
    lastMoveFrom: Position.E2,
    lastMoveTo:Position.E4,
    whoseTurn: Player.Black,
    isInCheck: false,
    isCheckmate: false,
    passantInfo: { 
        passedPosition: null, 
        pawnAt: null
    },
    CastlingPreclusions:{
        Black:{
            kingSide:false,
            queenSide:false
        },
        White:{
            kingSide:false,
            queenSide:false
        }
    },
    capturedPieces:{
        Black:[],
        White:[]
    }
}

export default () => x;