//Wraps all the fileds required for determining move legalities,

import { Piece } from "enums/piece";
import { MoveAnnotations } from "./MoveAnnotations";

//and included additional info to make UI easier:
export type BoardAnnotations = MoveAnnotations & {
    lastPlayerMoved:Player;
    lastPieceMoved: Piece;
    lastMoveFrom: GridCoordinates;
    lastMoveTo:GridCoordinates;
    whoseTurn:Player;
    isInCheck:boolean;
    isCheckmate:boolean;
    capturedBlackPieces: Array<Piece>,
    capturedWhitePieces: Array<Piece>,
}