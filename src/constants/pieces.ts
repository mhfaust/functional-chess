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

export const BLACK = 'Black';
export const WHITE = 'White';
export const KING = 'King';
export const QUEEN = 'Queen';
export const ROOK = 'Rook';
export const KNIGHT = 'Knight';
export const BISHOP = 'Bishop';
export const PAWN = 'Pawn';

export const WK = `${WHITE} ${KING}`; 
export const WQ = `${WHITE} ${QUEEN}`; 
export const WR = `${WHITE} ${ROOK}`; 
export const WN = `${WHITE} ${KNIGHT}`; 
export const WB = `${WHITE} ${BISHOP}`; 
export const WP = `${WHITE} ${PAWN}`; 
export const BK = `${BLACK} ${KING}`; 
export const BQ = `${BLACK} ${QUEEN}`; 
export const BR = `${BLACK} ${ROOK}`; 
export const BN = `${BLACK} ${KNIGHT}`; 
export const BB = `${BLACK} ${BISHOP}`; 
export const BP = `${BLACK} ${PAWN}`;

export const __ = null;
export const EMPTY = __;

const blackPieces = [BK,BQ,BR,BN,BB,BP];
const whitePieces = [WK,WQ,WR,WN,WB,WP];

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