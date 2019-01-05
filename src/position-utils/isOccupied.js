import { ALL_PIECES } from "../constants/pieces";
import { pieceAt } from 'position-utils';

const isOccupied = (board, position) => ALL_PIECES.has(pieceAt(board, position))
    
export default isOccupied;