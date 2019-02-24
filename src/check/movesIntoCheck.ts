import { nextBoard, updateKingPositions } from "board-utils/index";
import { isInCheck } from "check/index";
import { playerAt } from "positions/index";

function movesIntoCheck(board:Board, moveFrom:GridCoordinates, moveTo:GridCoordinates, annotations:KingAnnotations):boolean{
   
    const next = nextBoard(board, moveFrom, moveTo);

    const updatedAnnotations = updateKingPositions(board, moveFrom, moveTo, annotations);
    
    return isInCheck(next, playerAt(board, moveFrom), updatedAnnotations);
}

export default movesIntoCheck;