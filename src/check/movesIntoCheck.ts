import { move, nextKingAnnotations } from "board";
import { isInCheck } from "check";
import { KingAnnotations } from "interfaces/KingAnnotations";
import { playerAt, positionName } from "positions";
import { Board } from "types/Board";

function movesIntoCheck(
    board: Board, 
    moveFrom: GridCoordinates, 
    moveTo: GridCoordinates, 
    annotations: KingAnnotations)
    : boolean{
   
    const next = move(board, moveFrom, moveTo);

    const updatedAnnotations = nextKingAnnotations(board, positionName(moveFrom), positionName(moveTo), annotations);
    
    return isInCheck(next, playerAt(board, moveFrom), updatedAnnotations);
}

export default movesIntoCheck;