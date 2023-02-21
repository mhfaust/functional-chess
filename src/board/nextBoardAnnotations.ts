import { playerAt, otherPlayer, pieceAt } from "positions";
import { isInCheck, isCheckmate } from "check";
import { nextKingAnnotations, nextCastlingAnnotations, nextEnPassantAnnotations } from "board";
import { BoardAnnotations } from "interfaces/BoardAnnotations";
import { Board } from "types/Board";
import { Piece } from "positions/piece";
import { Player } from "board/player";
import { PositionName } from "positions/positionName";
import COORDS from "positions/coordinates";

const makeCapturedPieces = (board: Board, prevCaptures: Array<Piece>, defender: Player, moveTo: PositionName) : Array<Piece> => {
    
    return playerAt(board, COORDS[moveTo]) === defender 
        ? [...prevCaptures, pieceAt(board, COORDS[moveTo])]
        : prevCaptures
    ;
}

function nextBoardAnnotations(
            previousBoard: Board,
            currentBoard: Board,
            previousAnnotations: BoardAnnotations,  
            pieceMovedFromPosition: PositionName, 
            pieceMovedToPosition: PositionName)
        : BoardAnnotations
    {
    const nextKingPositions = nextKingAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition, previousAnnotations);
    const nextPassantInfo = nextEnPassantAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition);
    const nextCastlingInfo = nextCastlingAnnotations(pieceMovedFromPosition, previousAnnotations);

    const lastPlayerMoved = playerAt(previousBoard, COORDS[pieceMovedFromPosition]);
    const lastPieceMoved = pieceAt(previousBoard, COORDS[pieceMovedFromPosition])
    const nextPlayer = otherPlayer(lastPlayerMoved);
    const nextTurnIsInCheck = isInCheck(currentBoard, nextPlayer, nextKingPositions);
    const nextTurnIsCheckmate = isCheckmate(currentBoard, nextPlayer, nextKingPositions);
    const capturedBlackPieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedBlackPieces, 'Black', pieceMovedToPosition);
    const capturedWhitePieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedWhitePieces, 'White', pieceMovedToPosition);
        
    const next : BoardAnnotations = {
        ...nextCastlingInfo,
        ...nextPassantInfo,
        ...nextKingPositions,
        ...{
            lastPlayerMoved,
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