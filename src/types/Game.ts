
import { Board } from "./Board";
import { Piece } from "positions/piece";
import { Player } from "board/player";
import { PositionName } from "positions/positionName";
import { CastlingPreclusions } from "types/CastlingPreclusions";

export type Turn = {
  boardAfterMove: Board,
  annotationsAfterMove: BoardAnnotations
}

export type BoardAnnotations = {
  lastPlayerMoved: Player;
  lastPieceMoved: Piece;
  lastMoveFrom: PositionName;
  lastMoveTo: PositionName;
  whoseTurn: Player;
  isInCheck: boolean;
  isCheckmate: boolean;
  capturedBlackPieces: Array<Piece>,
  capturedWhitePieces: Array<Piece>,
  castlingPreclusions: CastlingPreclusions
}

export type Game = Array<Turn>


