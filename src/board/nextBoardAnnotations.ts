import { playerAt, otherPlayer, pieceAt } from "positions";
import { isInCheck, isCheckmate } from "check";
import { nextCastlingPreclusions } from "board";
import { Board } from "types/Board";
import { Piece } from "positions/piece";
import { Player } from "types/Player";
import { PositionName } from "positions/positionName";
import { BoardAnnotations } from "types/Game";

const makeCapturedPieces = (board: Board, prevCaptures: Array<Piece>, defender: Player, moveTo: PositionName) : Array<Piece> => {
    
    return playerAt(board, moveTo) === defender 
        ? [...prevCaptures, pieceAt(board, moveTo)]
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
    const { castlingPreclusions: prevCastlingPreclusions } = previousAnnotations;
    const castlingPreclusions = nextCastlingPreclusions(pieceMovedFromPosition, prevCastlingPreclusions);
    
    const lastPlayerMoved = playerAt(previousBoard, pieceMovedFromPosition);
    const lastPieceMoved = pieceAt(previousBoard, pieceMovedFromPosition)
    const nextPlayer = otherPlayer(lastPlayerMoved);
    const nextTurnIsInCheck = isInCheck(currentBoard, nextPlayer);
    const nextTurnIsCheckmate = isCheckmate(currentBoard, nextPlayer);
    const capturedBlackPieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedBlackPieces, 'Black', pieceMovedToPosition);
    const capturedWhitePieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedWhitePieces, 'White', pieceMovedToPosition);
        
    const next : BoardAnnotations = {
        castlingPreclusions,
        ...{
            lastPlayerMoved,
            lastPieceMoved,
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