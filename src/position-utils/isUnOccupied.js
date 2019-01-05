import { ALL_PIECES } from "../constants/pieces";
import { pieceAt } from 'position-utils';

const isUnOccupied = (board, position) => !ALL_PIECES.has(pieceAt(board, position));
    

export default isUnOccupied;