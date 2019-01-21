export const pieces = {
    WK : Piece.WK,
    WhiteKing: Piece.WhiteKing, 
    WQ: Piece.WhiteQueen, 
    WhiteQueen: Piece.WhiteQueen, 
    WR: Piece.WhiteRook, 
    WhiteRook: Piece.WhiteRook, 
    WN: Piece.WhiteKnight, 
    WhiteKnight: Piece.WhiteKnight, 
    WB: Piece.WhiteBishop, 
    WhiteBishop: Piece.WhiteBishop, 
    WP: Piece.WhitePawn, 
    WhitePawn: Piece.WhitePawn, 
    BK: Piece.BlackKing, 
    BlackKing: Piece.BlackKing, 
    BQ: Piece.BlackQueen, 
    BlackQueen: Piece.BlackQueen, 
    BR: Piece.BlackRook, 
    BlackRook: Piece.BlackRook, 
    BN: Piece.BlackKnight, 
    BlackKnight: Piece.BlackKnight, 
    BB: Piece.BlackBishop, 
    BlackBishop: Piece.BlackBishop, 
    BP: Piece.BlackPawn,
    BlackPawn: Piece.BlackPawn,
    
    __ : '',
    Empty : ''
}


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