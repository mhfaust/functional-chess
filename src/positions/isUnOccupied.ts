import { ALL_PIECES } from "constants/pieces";
import { pieceAt } from 'positions/index';

function isUnOccupied (board: Board, position: GridCoordinates): boolean {
    return !ALL_PIECES.has(pieceAt(board, position));
}
    

export default isUnOccupied;