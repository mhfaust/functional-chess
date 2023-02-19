import { Piece } from "enums/piece";

const blackPieces : ReadonlyArray<Piece> = Object.freeze([
    'BlackKing',
    'BlackQueen',
    'BlackRook',
    'BlackKnight',
    'BlackBishop',
    'BlackPawn'
]);
const whitePieces  : ReadonlyArray<Piece> = Object.freeze([
    'WhiteKing',
    'WhiteQueen',
    'WhiteRook',
    'WhiteKnight',
    'WhiteBishop',
    'WhitePawn'
]);

export const BLACK_PIECES = Object.freeze(new Set(blackPieces));
export const WHITE_PIECES = Object.freeze(new Set(whitePieces));
export const ALL_PIECES = Object.freeze(new Set([...blackPieces, ...whitePieces]));

export const unicodeSymbols = Object.freeze({
    WhiteKing: '♔',
    WhiteQueen: '♕',
    WhiteRook: '♖',
    WhiteBishop: '♗',
    WhiteKnight: '♘',
    WhitePawn: '♙',
    BlackKing: '♚',
    BlackQueen: '♛',
    BlackRook: '♜',
    BlackBishop: '♝',
    BlackKnight: '♞',
    BlackPawn: '♟',
    Empty: ' '
});