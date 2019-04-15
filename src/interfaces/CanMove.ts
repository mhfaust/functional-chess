interface canMoveTo { 
    (
        board: Board, 
        fromPosition: GridCoordinates, 
        toPosition: GridCoordinates, 
        annotations: MoveAnnotations    
    )
    :boolean
}