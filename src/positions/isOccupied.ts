import { ALL_PIECES } from "constants/pieces";
import { pieceAt } from 'positions/index';

const isOccupied = (board: Board, position: GridCoordinates): boolean => ALL_PIECES.has(pieceAt(board, position))
    
export default isOccupied;