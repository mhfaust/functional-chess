import { move } from "board";
import { isInCheck } from "check";
import { playerAt } from "positions";
import { Board } from "types/Board";

function movesIntoCheck(
    board: Board, 
    moveFrom: GridCoordinates, 
    moveTo: GridCoordinates)
    : boolean {
   
    const player = playerAt(board, moveFrom);
    const nextBoard = move(board, moveFrom, moveTo);

    return isInCheck(nextBoard, player);
}

export default movesIntoCheck;