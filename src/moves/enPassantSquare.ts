import { Move } from "game/validateMoves";
import { pieceAt, rank } from "positions"
import COORDS from "positions/coordinates"
import positionName, { PositionName } from "positions/positionName"
import { Board } from "types/Board";

const blackPawnStartRank = 6;
const whitePawnStartRank = 1;

const cache: Map<Board, PositionName> = new Map();

const enPassantSquare = (
  currentBoard: Board,
  lastMovedFrom: PositionName,
  lastMovedTo: PositionName,
): PositionName | null => {

  if(cache.has(currentBoard)){
    return cache.get(currentBoard);
  }

  const piece = pieceAt(currentBoard, COORDS[lastMovedTo]) ;
  const fromCoords = COORDS[lastMovedFrom];
  const toCoords = COORDS[lastMovedTo];

  if (piece === 'Black Pawn' 
    && rank(fromCoords) === blackPawnStartRank 
    && rank(toCoords) === blackPawnStartRank - 2
  ) {
    const position = positionName([rank(fromCoords), blackPawnStartRank - 1])
    cache.set(currentBoard, position)
    return position;
  }

  else if (piece === 'White Pawn'
    && rank(fromCoords) === whitePawnStartRank 
    && rank(toCoords) === whitePawnStartRank + 2
  ){
    const position = positionName([rank(fromCoords), whitePawnStartRank + 1]);
    cache.set(currentBoard, position);
  }
};

export default enPassantSquare;


