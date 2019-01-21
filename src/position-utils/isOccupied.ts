import { ALL_PIECES } from "constants/pieces";
import { pieceAt } from 'position-utils/index';

const isOccupied = (board: Board, position: GridCoordinates): boolean => ALL_PIECES.has(pieceAt(board, position))
    
export default isOccupied;