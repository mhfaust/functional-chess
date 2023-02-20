//Wraps all the fileds required for determining move legalities,

import { Piece } from "positions/piece";
import { Player } from "board/player";
import { MoveAnnotations } from "./MoveAnnotations";
import { PositionName } from "positions/positionName";

//and included additional info to make UI easier:
export type BoardAnnotations = MoveAnnotations & {
    lastPlayerMoved: Player;
    lastPieceMoved: Piece;
    lastMoveFrom: PositionName;
    lastMoveTo: PositionName;
    whoseTurn: Player;
    isInCheck: boolean;
    isCheckmate: boolean;
    capturedBlackPieces: Array<Piece>,
    capturedWhitePieces: Array<Piece>,
}