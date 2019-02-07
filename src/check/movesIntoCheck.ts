import { nextBoard } from "moves/index";
import isInCheck from "check/isInCheck";
import { playerAt } from "position-utils/index";

function movesIntoCheck(board:Board, moveFrom:GridCoordinates, moveTo:GridCoordinates, kingPosition:GridCoordinates):boolean{
    const next = nextBoard(board, moveFrom, moveTo);
    return isInCheck(next, playerAt(board, moveFrom), kingPosition);
}

export default movesIntoCheck;