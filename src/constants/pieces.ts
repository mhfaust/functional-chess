const blackPieces : Array<string> = [
    Piece.BlackKing,
    Piece.BlackQueen,
    Piece.BlackRook,
    Piece.BlackKnight,
    Piece.BlackBishop,
    Piece.BlackPawn
];
const whitePieces  : Array<string> = [
    Piece.WhiteKing,
    Piece.WhiteQueen,
    Piece.WhiteRook,
    Piece.WhiteKnight,
    Piece.WhiteBishop,
    Piece.WhitePawn];

export const BLACK_PIECES = Object.freeze(new Set(blackPieces));
export const WHITE_PIECES = Object.freeze(new Set(whitePieces));
export const ALL_PIECES = Object.freeze(new Set([...blackPieces, ...whitePieces]));

export const unicodeSymbols = {
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
}