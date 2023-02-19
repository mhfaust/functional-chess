import isInCheck from 'check/isInCheck';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { locatePiece } from 'positions';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';

describe('isInCheck: true', () => {
    it('White King at E1 is in check from Black Pawn at D2', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,BP,__,__,__,__,__,__],
/*  E  */ [WK,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(true)
    });

    it('White King at E1 is in check from Black Pawn at F2', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,__,__,__,__,__,__],
/*  F  */ [__,BP,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];
    })
})

describe('isInCheck: false', () => {
    it('White King at E3 is NOT check from Pawn at E4', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,WK,BP,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('White King at E3 is NOT check from Pawn at D3', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,BP,__,__,__,__,__],
/*  E  */ [__,__,WK,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('White King at E3 is NOT check from Pawn at D2', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,BP,__,__,__,__,__,__],
/*  E  */ [__,__,WK,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('White King at E3 is NOT check from Pawn at E2', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,BP,WK,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('White King at E3 is NOT check from Pawn at F2', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,WK,__,__,__,__,__],
/*  F  */ [__,BP,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('White King at E3 is NOT check from Pawn at F3', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,WK,__,__,__,__,__],
/*  F  */ [__,__,BP,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('White King at E5 is NOT check from Pawn at E7', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,WK,__,BP,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('White King at E5 is NOT check from Pawn at C7', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,BP,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,WK,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });

    it('Black King at G7 IS in check from Pawn at F6', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,WP,BP,BR],
/*  G  */ [__,__,__,__,__,BP,BK,__],
/*  H  */ [__,__,__,__,__,__,BP,__],
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, 'Black', annotations)).toBe(true)
    });
})