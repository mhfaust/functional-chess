import nextBoard from "moves/nextBoard";
import { playerAt, otherPlayer, locatePiece, areSamePositions, rank, pieceAt, file } from "position-utils/index";
import { isInCheck, isCheckmate } from "check/index";
import { Position } from "constants/position";

const makePassantInfo = (prevBoard: Board, from:GridCoordinates, to:GridCoordinates): PassantInfo => {
    const piece = pieceAt(prevBoard, from);
    if(piece === Piece.BlackPawn && rank(from) === 6 && rank(to) === 4){
        return {
            pawnAt: to,
            passedPosition: [file(to), 5]
        };
    } 
    else if(piece !== Piece.WhitePawn && rank(from) === 1 && rank(to) === 3){
        return {
            pawnAt: to,
            passedPosition: [file(to), 2]
        };
    }
    return null;
}

const makeCapturedPieces = (board: Board, prevCaptures:Array<Piece>, defender: Player, moveTo: GridCoordinates) : Array<Piece> => {
    return playerAt(board, moveTo) === defender 
        ? [...prevCaptures, pieceAt(board, moveTo)]
        : prevCaptures
    ;
}

function nextAnnotatedBoard(previous: AnnotatedBoard,  
            pieceMovedFromPosition: GridCoordinates, 
            pieceMovedToPosition: GridCoordinates)
        : AnnotatedBoard
    {
    const lastMoved = playerAt(previous.board, pieceMovedFromPosition);
    const nextPlayer = otherPlayer(lastMoved);
    const board = nextBoard(previous.board, pieceMovedFromPosition, pieceMovedToPosition);
    const nextPlayerKingPosition = locatePiece(board, nextPlayer === Player.Black ? Piece.BlackKing : Piece.WhiteKing);
    const nextTurnIsInCheck = isInCheck(board, nextPlayer, nextPlayerKingPosition);
    const nextTurnIsCheckmate = isCheckmate(board, nextPlayer, nextPlayerKingPosition);

    const movedFrom = (from: GridCoordinates) :boolean => areSamePositions(pieceMovedFromPosition, from)

    const next : AnnotatedBoard = {
        board,
        lastPlayerMoved: lastMoved,
        lastPieceMoved: Piece.WhitePawn,
        lastMoveFrom: pieceMovedFromPosition,
        lastMoveTo: pieceMovedToPosition,
        whoseTurn: nextPlayer,
        isInCheck: nextTurnIsInCheck,
        isCheckmate: nextTurnIsCheckmate,
        passantInfo: makePassantInfo(previous.board, pieceMovedFromPosition, pieceMovedToPosition),
        CastlingPreclusions:{
            Black:{
                kingSide: previous.CastlingPreclusions.Black.kingSide || movedFrom(Position.F8) || movedFrom(Position.H8),
                queenSide: previous.CastlingPreclusions.Black.queenSide || movedFrom(Position.F8) || movedFrom(Position.A8)
            },
            White:{
                kingSide: previous.CastlingPreclusions.White.kingSide || movedFrom(Position.F1) || movedFrom(Position.H1),
                queenSide: previous.CastlingPreclusions.White.queenSide || movedFrom(Position.F1) || movedFrom(Position.A1)
            }
        },
        capturedPieces:{
            Black: makeCapturedPieces(previous.board, previous.capturedPieces.Black, Player.Black, pieceMovedToPosition),
            White:makeCapturedPieces(previous.board, previous.capturedPieces.White, Player.White, pieceMovedToPosition)
        }
    }

    return previous;
}

export default nextAnnotatedBoard;