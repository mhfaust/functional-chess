import { move, nextKingAnnotations } from "board";
import { isInCheck } from "check";
import { KingAnnotations } from "interfaces/KingAnnotations";
import { playerAt, positionName } from "positions";
import { Board } from "types/Board";

/**
 * Determines whether a player's move would put themself into check.
 * @param board a Board array containing positions of all not-captured pieces
 * @param moveFrom coordinates of the start position of the piece whose move is being assessed, as [0-7, 0-7] = [file, rank].
 * @param moveTo coordinates of the move-to position of the piece whose move is being assessed, as [0-7, 0-7] = [file, rank].
 * @param annotations 
 * @returns true if in check, false if not
 */
function movesIntoCheck(
    board: Board, 
    moveFrom: GridCoordinates, 
    moveTo: GridCoordinates, 
    annotations: KingAnnotations)
    : boolean{
   
    const next = move(board, moveFrom, moveTo);
    
    const { 
        blackKingPosition, 
        whiteKingPosition 
    } = nextKingAnnotations(board, positionName(moveFrom), positionName(moveTo), annotations);

    const player = playerAt(board, moveFrom);
    const kingPosition = player == 'Black' ? blackKingPosition : whiteKingPosition
    return isInCheck(next, playerAt(board, moveFrom), kingPosition);
}

export default movesIntoCheck;