import { PositionName } from "positions/positionName";
import { Board } from "types/Board";
import { MoveAnnotations } from "./MoveAnnotations";

export type Moves = (
    board: Board, 
    fromPosition: GridCoordinates, 
    annotations: MoveAnnotations
) => Set<PositionName>
