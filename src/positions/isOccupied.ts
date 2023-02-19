import { ALL_PIECES } from "constants/pieces";
import { pieceAt } from 'positions';
import { Board } from "types/Board";

function isOccupied  (
    board: Board, 
    position: GridCoordinates)
    : boolean {
        return ALL_PIECES.has(pieceAt(board, position));
    }
    
export default isOccupied;