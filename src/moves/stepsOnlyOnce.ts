const oneSteppers : Set<Piece> = new Set([
    Piece.BlackKing, 
    Piece.WhiteKing,
    Piece.BlackKnight,
    Piece.WhiteKnight,
    Piece.BlackPawn,
    Piece.WhitePawn,
]);

const stepsOnlyOnce = (piece: Piece): boolean => oneSteppers.has(piece)

export default stepsOnlyOnce; 