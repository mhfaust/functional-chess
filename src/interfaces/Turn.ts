import { BoardAnnotations } from "interfaces/BoardAnnotations"

export type Turn = {
    boardAfterMove: Board,
    annotationsAfterMove: BoardAnnotations
}