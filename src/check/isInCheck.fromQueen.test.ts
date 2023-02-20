import isInCheck from 'check/isInCheck';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { locatePiece, positionName } from 'positions';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';

describe('isInCheck: true', () => {
    it('White King at F3 is IN check from Black Queen at E4', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,BQ,__,__,__,BK],
/*  F  */ [__,__,WK,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: positionName(locatePiece(board, 'Black King')),
            whiteKingPosition: positionName(locatePiece(board, 'White King'))
        };

        expect(isInCheck(board, 'White', annotations)).toBe(true)
    });

    it('White King at F3 is IN check from Black Queen at F4', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,BK],
/*  F  */ [__,__,WK,BQ,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: positionName(locatePiece(board, 'Black King')),
            whiteKingPosition: positionName(locatePiece(board, 'White King'))
        };

        expect(isInCheck(board, 'White', annotations)).toBe(true)
    });

    it('White King at F3 is NOT in check from Black Queen at E5', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,BQ,__,__,BK],
/*  F  */ [__,__,WK,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations: KingAnnotations = {
            blackKingPosition: positionName(locatePiece(board, 'Black King')),
            whiteKingPosition: positionName(locatePiece(board, 'White King'))
        };

        expect(isInCheck(board, 'White', annotations)).toBe(false)
    });    

});