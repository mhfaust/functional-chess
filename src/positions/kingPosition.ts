import { Player } from "board/player";
import { Board } from "types/Board";
import COORDS from "./coordinates";
import positionName, { PositionName, positionNames } from "./positionName";

const whiteCache: Map<Board, PositionName> = new Map();
const blackCache: Map<Board, PositionName> = new Map();

const kingPosition = (board: Board, player: Player): PositionName => {
  if(player === "Black"){
    if(blackCache.has(board)){
      return blackCache.get(board);
    }
    const found = positionNames.find(n =>  board[COORDS[n][0]][COORDS[n][1]] === "Black King") as PositionName;
    blackCache.set(board, found);
    return found;
  } else {
    if(whiteCache.has(board)){
      return whiteCache.get(board);
    }
    const found = positionNames.find(n =>  board[COORDS[n][0]][COORDS[n][1]] === "White King") as PositionName;
    whiteCache.set(board, found);
    return found;
  }
}

export default kingPosition;