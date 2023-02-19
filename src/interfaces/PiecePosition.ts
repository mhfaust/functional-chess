import { Piece } from "enums/piece";
import { PositionName } from "enums/positionName";

export type PiecePosition = {
    position: PositionName;
    piece: Piece;
}