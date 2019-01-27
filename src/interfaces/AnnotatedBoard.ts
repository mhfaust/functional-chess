declare type AnnotatedBoard = {
    board: Board,
    lastMoved:Player,
    lastPieceMoved: Piece,
    lastMoveFrom: GridCoordinates,
    lastMoveTo:GridCoordinates,
    whoseTurn:Player,
    isInCheck:boolean,
    isCheckmate:boolean,
    passantInfo:PassantInfo,
    castlingInfo:{
        [Player.Black]:CastlingInfo,
        [Player.White]:CastlingInfo
    }
    capturedPieces:{
        [Player.Black]: Array<Piece>,
        [Player.White]: Array<Piece>
    }
}