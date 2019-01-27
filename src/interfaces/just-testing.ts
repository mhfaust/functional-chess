import { initialBoard } from "board-utils/index";
import { Position } from "constants/algebraic";

const x: AnnotatedBoard = {
    board: initialBoard(),
    lastMoved: Player.White,
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
    castlingInfo:{
        Black:{
            kingEverMoved:false,
            kingRookEverMoved:false,
            queenRookEverMoved:false
        },
        White:{
            kingEverMoved:false,
            kingRookEverMoved:false,
            queenRookEverMoved:false
        }
    },
    capturedPieces:{
        Black:[],
        White:[]
    }
}

export default () => x;