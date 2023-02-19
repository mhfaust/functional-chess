import { BoardAnnotations } from "interfaces/BoardAnnotations"
import { Board } from "types/Board"

export type Turn = {
    boardAfterMove: Board,
    annotationsAfterMove: BoardAnnotations
}