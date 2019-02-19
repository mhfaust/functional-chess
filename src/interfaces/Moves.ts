interface Moves { 
    (
        board: Board, 
        fromPosition: GridCoordinates, 
        annotations: HasKingPositions
    )
    :Set<PositionName>
}