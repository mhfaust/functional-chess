interface CanMove { 
    (
        board: Board, 
        fromPosition: GridCoordinates, 
        toPosition: GridCoordinates, 
        annotations: MoveAnnotations    
    )
    :boolean
}