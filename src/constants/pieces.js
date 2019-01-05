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

export const ALL_PIECES = Object.freeze(new Set([BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP]));
export const BLACK_PIECES = Object.freeze(new Set([BK,BQ,BR,BN,BB,BP]));
export const WHITE_PIECES = Object.freeze(new Set([WK,WQ,WR,WN,WB,WP]));

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