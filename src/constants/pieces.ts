export enum Player{
    Black = 'Black',
    White = 'White'
}


export enum Piece {
    King = 'King',
    Queen = 'Queen',
    Rook = 'Rook',
    Knight = 'Knight',
    Bishop = 'Bishop',
    Pawn = 'Pawn',
    WK = 'White King', 
    WQ = 'White Queen', 
    WR = 'White Rook', 
    WN = 'White Knight', 
    WB = 'White Bishop', 
    WP = 'White Pawn', 
    BK = 'Black King', 
    BQ = 'Black Queen', 
    BR = 'Black Rook', 
    BN = 'Black Knight', 
    BB = 'Black Bishop', 
    BP = 'Black Pawn',
    __ = '',
    Empty = ''
}

const { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,Empty,__ } = Piece;

// export const __ = null;
// export const EMPTY = __;

const blackPieces : Array<string> = [BK,BQ,BR,BN,BB,BP];
const whitePieces  : Array<string> = [WK,WQ,WR,WN,WB,WP];

export const BLACK_PIECES = Object.freeze(new Set(blackPieces));
export const WHITE_PIECES = Object.freeze(new Set(whitePieces));
export const ALL_PIECES = Object.freeze(new Set([...blackPieces, ...whitePieces]));

export const unicodeSymbols = {
    [WK]: '♔',
    [WQ]: '♕',
    [WR]: '♖',
    [WB]: '♗',
    [WN]: '♘',
    [WP]: '♙',
    [BK]: '♚',
    [BQ]: '♛',
    [BR]: '♜',
    [BB]: '♝',
    [BN]: '♞',
    [BP]: '♟',
    [__]: ' '
}