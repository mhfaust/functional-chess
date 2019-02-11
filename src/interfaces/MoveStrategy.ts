interface MoveStrategy { 
    (
        board: Board, 
        fromPosition: GridCoordinates, 
        toPosition: GridCoordinates, 
        annotations:HasKingPositions
    )
    :boolean
}