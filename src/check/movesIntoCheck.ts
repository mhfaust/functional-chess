import { nextBoard } from "moves/index";
import isInCheck from "check/isInCheck";
import { playerAt } from "position-utils/index";
import updateKingPositions from "board-utils/updateKingPositions";

function movesIntoCheck(board:Board, moveFrom:GridCoordinates, moveTo:GridCoordinates, annotations:HasKingPositions):boolean{
   
    const next = nextBoard(board, moveFrom, moveTo);

    const updatedAnnotations = updateKingPositions(board, moveFrom, moveTo, annotations);
    
    return isInCheck(next, playerAt(board, moveFrom), updatedAnnotations);
}

export default movesIntoCheck;