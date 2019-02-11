import nextBoard from "moves/nextBoard";
import { playerAt, otherPlayer, locatePiece, areSamePositions, rank, pieceAt, file } from "position-utils/index";
import { isInCheck, isCheckmate } from "check/index";
import { Position } from "constants/position";

const makePassantInfo = (prevBoard: Board, from:GridCoordinates, to:GridCoordinates): HasPassantInfo => {
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

function nextBoardAnnotations(previousBoard: Board,
            currentBoard:Board,
            previousAnnotations: BoardAnnotations,  
            pieceMovedFromPosition: GridCoordinates, 
            pieceMovedToPosition: GridCoordinates)
        : BoardAnnotations
    {
    const lastMoved = playerAt(previousBoard, pieceMovedFromPosition);
    const nextPlayer = otherPlayer(lastMoved);
    const nextKingPositions = {
        blackKingPosition: locatePiece(currentBoard, Piece.BlackKing),
        whiteKingPosition: locatePiece(currentBoard, Piece.WhiteKing)
    }
    const nextTurnIsInCheck = isInCheck(currentBoard, nextPlayer, nextKingPositions);
    const nextTurnIsCheckmate = isCheckmate(currentBoard, nextPlayer, nextKingPositions);

    const movedFrom = (from: GridCoordinates) :boolean => areSamePositions(pieceMovedFromPosition, from)

    const passantInfo = makePassantInfo(previousBoard, pieceMovedFromPosition, pieceMovedToPosition)

    const next : BoardAnnotations = {
        lastPlayerMoved: lastMoved,
        lastPieceMoved: Piece.WhitePawn,
        lastMoveFrom: pieceMovedFromPosition,
        lastMoveTo: pieceMovedToPosition,
        whoseTurn: nextPlayer,
        isInCheck: nextTurnIsInCheck,
        isCheckmate: nextTurnIsCheckmate,
        pawnAt: passantInfo.pawnAt,
        passedPosition: passantInfo.passedPosition,
        whiteQueenSideCastlingPrecluded: previousAnnotations.whiteQueenSideCastlingPrecluded || movedFrom(Position.F1) || movedFrom(Position.A1),
        whiteKingSideCastlingPrecluded: previousAnnotations.whiteKingSideCastlingPrecluded || movedFrom(Position.F1) || movedFrom(Position.H1),
        blackQueenSideCastlingPrecluded: previousAnnotations.blackQueenSideCastlingPrecluded || movedFrom(Position.F8) || movedFrom(Position.A8),
        blackKingSideCastlingPrecluded: previousAnnotations.blackKingSideCastlingPrecluded || movedFrom(Position.F8) || movedFrom(Position.H8),
        capturedPieces:{
            Black:makeCapturedPieces(previousBoard, previousAnnotations.capturedPieces.Black, Player.Black, pieceMovedToPosition),
            White:makeCapturedPieces(previousBoard, previousAnnotations.capturedPieces.White, Player.White, pieceMovedToPosition)
        }
    }

    return next;
}

export default nextBoardAnnotations;