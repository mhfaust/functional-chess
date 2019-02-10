interface BoardAnnotations  {
    lastPlayerMoved:Player,
    lastPieceMoved: Piece,
    lastMoveFrom: GridCoordinates,
    lastMoveTo:GridCoordinates,
    whoseTurn:Player,
    isInCheck:boolean,
    isCheckmate:boolean,
    passantInfo:PassantInfo,
    CastlingPreclusions:{
        Black:CastlingPreclusion,
        White:CastlingPreclusion
    }
    capturedPieces:{
        Black: Array<Piece>,
        White: Array<Piece>
    }
}