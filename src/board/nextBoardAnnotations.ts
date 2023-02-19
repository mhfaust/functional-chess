import { playerAt, otherPlayer, pieceAt } from "positions";
import { isInCheck, isCheckmate } from "check";
import { nextKingAnnotations, nextCastlingAnnotations, nextEnPassantAnnotations } from "board";
import { BoardAnnotations } from "interfaces/BoardAnnotations";
import { Board } from "types/Board";
import { Piece } from "positions/piece";
import { Player } from "board/player";

const makeCapturedPieces = (board: Board, prevCaptures: Array<Piece>, defender: Player, moveTo: GridCoordinates) : Array<Piece> => {
    
    return playerAt(board, moveTo) === defender 
        ? [...prevCaptures, pieceAt(board, moveTo)]
        : prevCaptures
    ;
}

function nextBoardAnnotations(
            previousBoard: Board,
            currentBoard: Board,
            previousAnnotations: BoardAnnotations,  
            pieceMovedFromPosition: GridCoordinates, 
            pieceMovedToPosition: GridCoordinates)
        : BoardAnnotations
    {
    const nextKingPositions = nextKingAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition, previousAnnotations);
    const nextPassantInfo = nextEnPassantAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition);
    const nextCastlingInfo = nextCastlingAnnotations(pieceMovedFromPosition, previousAnnotations);

    const lastMoved = playerAt(previousBoard, pieceMovedFromPosition);
    const nextPlayer = otherPlayer(lastMoved);
    const nextTurnIsInCheck = isInCheck(currentBoard, nextPlayer, nextKingPositions);
    const nextTurnIsCheckmate = isCheckmate(currentBoard, nextPlayer, nextKingPositions);
    const capturedBlackPieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedBlackPieces, 'Black', pieceMovedToPosition);
    const capturedWhitePieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedWhitePieces, 'White', pieceMovedToPosition);
        
    const next : BoardAnnotations = {
        ...nextCastlingInfo,
        ...nextPassantInfo,
        ...nextKingPositions,
        ...{
            lastPlayerMoved: lastMoved,
            lastPieceMoved: 'White Pawn',
            lastMoveFrom: pieceMovedFromPosition,
            lastMoveTo: pieceMovedToPosition,
            whoseTurn: nextPlayer,
            isInCheck: nextTurnIsInCheck,
            isCheckmate: nextTurnIsCheckmate,
            capturedBlackPieces,
            capturedWhitePieces
        }
    }

    return next;
}

export default nextBoardAnnotations;