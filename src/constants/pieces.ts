const blackPieces : ReadonlyArray<Piece> = Object.freeze([
    Piece.BlackKing,
    Piece.BlackQueen,
    Piece.BlackRook,
    Piece.BlackKnight,
    Piece.BlackBishop,
    Piece.BlackPawn
]);
const whitePieces  : ReadonlyArray<Piece> = Object.freeze([
    Piece.WhiteKing,
    Piece.WhiteQueen,
    Piece.WhiteRook,
    Piece.WhiteKnight,
    Piece.WhiteBishop,
    Piece.WhitePawn
]);

export const BLACK_PIECES = Object.freeze(new Set(blackPieces));
export const WHITE_PIECES = Object.freeze(new Set(whitePieces));
export const ALL_PIECES = Object.freeze(new Set([...blackPieces, ...whitePieces]));

export const unicodeSymbols = Object.freeze({
    [Piece.WhiteKing]: '♔',
    [Piece.WhiteQueen]: '♕',
    [Piece.WhiteRook]: '♖',
    [Piece.WhiteBishop]: '♗',
    [Piece.WhiteKnight]: '♘',
    [Piece.WhitePawn]: '♙',
    [Piece.BlackKing]: '♚',
    [Piece.BlackQueen]: '♛',
    [Piece.BlackRook]: '♜',
    [Piece.BlackBishop]: '♝',
    [Piece.BlackKnight]: '♞',
    [Piece.BlackPawn]: '♟',
    [Piece.Empty]: ' '
});