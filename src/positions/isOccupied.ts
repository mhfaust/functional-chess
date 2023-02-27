import { ALL_PIECES } from "constants/pieces";
import { pieceAt } from 'positions';
import { Board } from "types/Board";
import { PositionName } from "./positionName";

function isOccupied  (
    board: Board, 
    position: PositionName)
    : boolean {
        return ALL_PIECES.has(pieceAt(board, position));
    }
    
export default isOccupied;