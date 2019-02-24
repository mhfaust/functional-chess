interface Moves { 
    (
        board: Board, 
        fromPosition: GridCoordinates, 
        annotations: MoveAnnotations
    )
    :Set<PositionName>
}