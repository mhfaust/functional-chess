interface BoardAnnotations extends MoveAnnotations {
    lastPlayerMoved:Player;
    lastPieceMoved: Piece;
    lastMoveFrom: GridCoordinates;
    lastMoveTo:GridCoordinates;
    whoseTurn:Player;
    isInCheck:boolean;
    isCheckmate:boolean;
    capturedPieces:{
        Black: Array<Piece>;
        White: Array<Piece>
    }
}