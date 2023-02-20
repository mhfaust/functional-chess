import { PositionName } from "positions/positionName";

export type EnPassantAnnotations = {
    pawnAt: PositionName;
    passedPosition: PositionName;
};