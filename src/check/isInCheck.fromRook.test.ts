import isInCheck from 'check/isInCheck';
import COORDS from 'positions/coordinates'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { locatePiece, positionName } from 'positions';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';

describe('isInCheck: true', () => {
    it('rook checks king along a rank', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,WR,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,BK,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const kingPosition = locatePiece(board, 'Black King');

        expect(isInCheck(board, 'Black', kingPosition)).toBe(true)
    });

    it('rook checks king along a file', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,BK,__,__,__,__,WR],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const kingPosition = locatePiece(board, 'Black King');

        expect(isInCheck(board, 'Black', kingPosition)).toBe(true)
    });
})