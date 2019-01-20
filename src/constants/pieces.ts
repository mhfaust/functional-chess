export enum Player{
    Black = 'Black',
    White = 'White'
}


export enum Piece {
    WK = 'White King', 
    WhiteKing = 'White King', 
    WQ = 'White Queen', 
    WhiteQueen = 'White Queen', 
    WR = 'White Rook', 
    WhiteRook = 'White Rook', 
    WN = 'White Knight', 
    WhiteKnight = 'White Knight', 
    WB = 'White Bishop', 
    WhiteBishop = 'White Bishop', 
    WP = 'White Pawn', 
    WhitePawn = 'White Pawn', 
    BK = 'Black King', 
    BlackKing = 'Black King', 
    BQ = 'Black Queen', 
    BlackQueen = 'Black Queen', 
    BR = 'Black Rook', 
    BlackRook = 'Black Rook', 
    BN = 'Black Knight', 
    BlackKnight = 'Black Knight', 
    BB = 'Black Bishop', 
    BlackBishop = 'Black Bishop', 
    BP = 'Black Pawn',
    BlackPawn = 'Black Pawn',
    
    __ = '',
    Empty = ''
}

const { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,Empty,__ } = Piece;


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