import isInCheck from 'check/isInCheck';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { locatePiece } from 'positions';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';

describe('isInCheck: true', () => {
    it('White King  at D4 is in check from Black King at PIECE_POSITION', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,WK,BK,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, Player.White, annotations)).toBe(true)

    });

    it('White King  at D4 is in check from Black King at PIECE_POSITION', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,WK,__,__,__,__],
/*  E  */ [__,__,BK,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, Player.White, annotations)).toBe(true)

    });

    it('White King  at D4 is in check from Black King at PIECE_POSITION', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,BK,__,__,__,__],
/*  D  */ [__,__,__,WK,__,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, Player.White, annotations)).toBe(true)
    });
})

describe('isInCheck: false', () => {
    it('White King at D4 is NOT in check from Black King at D6', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,WK,__,BK,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King')
        };

        expect(isInCheck(board, Player.White, annotations)).toBe(false)

    });

})