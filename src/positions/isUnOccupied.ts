import { ALL_PIECES } from "constants/pieces";
import { pieceAt } from 'positions';
import { Board } from "types/Board";
import { PositionName } from "./positionName";

function isUnOccupied (board: Board, position: PositionName): boolean {
    return !ALL_PIECES.has(pieceAt(board, position));
}
    

export default isUnOccupied;