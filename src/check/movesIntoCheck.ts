import { nextBoard, updateKingPositions } from "board-utils/index";
import { isInCheck } from "check/index";
import { playerAt } from "position-utils/index";

function movesIntoCheck(board:Board, moveFrom:GridCoordinates, moveTo:GridCoordinates, annotations:HasKingPositions):boolean{
   
    const next = nextBoard(board, moveFrom, moveTo);

    const updatedAnnotations = updateKingPositions(board, moveFrom, moveTo, annotations);
    
    return isInCheck(next, playerAt(board, moveFrom), updatedAnnotations);
}

export default movesIntoCheck;