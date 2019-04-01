import { nextBoard, nextKingAnnotations } from "board";
import { isInCheck } from "check";
import { playerAt } from "positions";

function movesIntoCheck(
    board:Board, 
    moveFrom:GridCoordinates, 
    moveTo:GridCoordinates, 
    annotations:KingAnnotations)
    : boolean{
   
    const next = nextBoard(board, moveFrom, moveTo);

    const updatedAnnotations = nextKingAnnotations(board, moveFrom, moveTo, annotations);
    
    return isInCheck(next, playerAt(board, moveFrom), updatedAnnotations);
}

export default movesIntoCheck;