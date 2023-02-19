import { MoveAnnotations } from "./MoveAnnotations"

export type CanMoveTo = 
    (
        board: Board, 
        fromPosition: GridCoordinates, 
        toPosition: GridCoordinates, 
        annotations: MoveAnnotations    
    ) => boolean;
