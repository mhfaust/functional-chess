import { pieceAt } from "positions";
import COORDS from "positions/coordinates";
import { Board } from "types/Board";

type CastlePosition =
|  'A1'// white, queen-side
|  'H1'// white, king-side
|  'A8'// black, queen-side
|  'H8'// black, king-side

const allowedFn: Record<CastlePosition, (board: Board) => boolean> = {
  'A1': (board: Board) => pieceAt(board, COORDS.A1) === "White Rook" && pieceAt(board, COORDS.E1) === "White King",
  'H1': (board: Board) => pieceAt(board, COORDS.H1) !== "White Rook" && pieceAt(board, COORDS.E1) === "White King",
  'A8': (board: Board) => pieceAt(board, COORDS.A8) !== "Black Rook" && pieceAt(board, COORDS.E8) === "Black King",
  'H8': (board: Board) => pieceAt(board, COORDS.H8) !== "Black Rook" && pieceAt(board, COORDS.E8) === "Black King",
}


const cache: Map<Board[], Map<CastlePosition, boolean | undefined>> = new Map();

const castlingIsAllowed = (boardSequence: Board[], castlePosition: CastlePosition): boolean => {
  
  const allowances = cache.get(boardSequence) ?? (() => {
    const a = new Map<CastlePosition, boolean | undefined>();
    cache.set(boardSequence, a);
    return a;
  })();
  
  //First check for a cached value
  const memoized = allowances.get(castlePosition);
  if(memoized !== undefined){
    return memoized;
  }
  //else iterate over the boards sequence to see if that piece ever moved
  //or if the king ever moved
  const isWhite = castlePosition === 'A1' || castlePosition === 'H1' ;
  const kingPiece = isWhite
    ? "White King" : "Black King";
  const kingPosition = isWhite ? COORDS.A5 : COORDS.H5;
  
  let isAllowed = true;
  for(let board of boardSequence){
    if(!allowedFn[castlePosition](board)){
      isAllowed = false;
      break;
    } 
    
    if(pieceAt(board, kingPosition) !== kingPiece){
      isAllowed = false;
      break;
    } 

  }
  allowances.set(castlePosition, isAllowed); 
  return isAllowed;
}

export default castlingIsAllowed;