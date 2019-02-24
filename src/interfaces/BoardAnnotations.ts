//Wraps all the fileds required for determining move legalities,
//and included additional info to make UI easier:
interface BoardAnnotations extends MoveAnnotations {
    lastPlayerMoved:Player;
    lastPieceMoved: Piece;
    lastMoveFrom: GridCoordinates;
    lastMoveTo:GridCoordinates;
    whoseTurn:Player;
    isInCheck:boolean;
    isCheckmate:boolean;
    capturedBlackPieces: Array<Piece>,
    capturedWhitePieces: Array<Piece>,
}