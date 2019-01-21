const blackPieces : Array<string> = [Piece.BK,Piece.BQ,Piece.BR,Piece.BN,Piece.BB,Piece.BP];
const whitePieces  : Array<string> = [Piece.WK,Piece.WQ,Piece.WR,Piece.WN,Piece.WB,Piece.WP];

export const BLACK_PIECES = Object.freeze(new Set(blackPieces));
export const WHITE_PIECES = Object.freeze(new Set(whitePieces));
export const ALL_PIECES = Object.freeze(new Set([...blackPieces, ...whitePieces]));

export const unicodeSymbols = {
    [Piece.WK]: '♔',
    [Piece.WQ]: '♕',
    [Piece.WR]: '♖',
    [Piece.WB]: '♗',
    [Piece.WN]: '♘',
    [Piece.WP]: '♙',
    [Piece.BK]: '♚',
    [Piece.BQ]: '♛',
    [Piece.BR]: '♜',
    [Piece.BB]: '♝',
    [Piece.BN]: '♞',
    [Piece.BP]: '♟',
    [Piece.__]: ' '
}