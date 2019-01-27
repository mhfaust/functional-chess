import nextBoard from "moves/nextBoard";
import { playerAt, otherPlayer, locatePiece } from "position-utils/index";
import { isInCheck, isCheckmate } from "check/index";

function nextAnnotatedBoard(previous: AnnotatedBoard,  
            pieceMovedFromPosition: GridCoordinates, 
            pieceMovedToPosition: GridCoordinates)
        : AnnotatedBoard
    {
    const lastMoved = playerAt(previous.board, pieceMovedFromPosition);
    const nextPlayer = otherPlayer(lastMoved);
    const board = nextBoard(previous.board, pieceMovedFromPosition, pieceMovedToPosition);
    const nextPlayerKingPosition = locatePiece(board, nextPlayer === Player.Black ? Piece.BlackKing : Piece.WhiteKing)
    const nextTurnIsInCheck = isInCheck(board, nextPlayer, nextPlayerKingPosition)
    const nextTurnIsCheckmate = isCheckmate(board, nextPlayer, nextPlayerKingPosition)

    return {
        board,
        lastMoved,
        lastPieceMoved: Piece.WhitePawn,
        lastMoveFrom: pieceMovedFromPosition,
        lastMoveTo: pieceMovedToPosition,
        whoseTurn: nextPlayer,
        isInCheck: nextTurnIsInCheck,
        isCheckmate: nextTurnIsCheckmate,
        passantInfo: null,
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

    return previous;
}

export default nextAnnotatedBoard;