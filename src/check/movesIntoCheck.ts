import { move } from "board";
import { isInCheck } from "check";
import { playerAt } from "positions";
import { PositionName } from "positions/positionName";
import { Board } from "types/Board";

function movesIntoCheck(
    board: Board, 
    moveFrom: PositionName, 
    moveTo: PositionName)
    : boolean {
   
    const player = playerAt(board, moveFrom);
    const nextBoard = move(board, moveFrom, moveTo);

    return isInCheck(nextBoard, player);
}

export default movesIntoCheck;