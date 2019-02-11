type BoardAnnotations = {
    lastPlayerMoved:Player;
    lastPieceMoved: Piece;
    lastMoveFrom: GridCoordinates;
    lastMoveTo:GridCoordinates;
    whoseTurn:Player;
    isInCheck:boolean;
    isCheckmate:boolean;
    pawnAt: GridCoordinates,
    passedPosition:GridCoordinates,
    whiteQueenSideCastlingPrecluded:boolean;
    whiteKingSideCastlingPrecluded:boolean;
    blackQueenSideCastlingPrecluded:boolean;
    blackKingSideCastlingPrecluded:boolean;
    capturedPieces:{
        Black: Array<Piece>;
        White: Array<Piece>
    }
}