import rook from '../rookMoves';
import { Position } from 'constants/position';
import { BK,BR,BP,WP,WR,__ } from 'positions/pieces-shorthand';
import { locatePiece } from 'positions';
import { kingPositions } from 'board';

describe('rook', () => {

 

    it(`provides all possible moves from rook on rook1board: `, () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,BP,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [__,WP,__,BR,__,__,__,BK],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,__,__],
            /*  H  */ [__,__,__,WP,__,__,__,__],
        ];

        const expectedLegalMoves = new Set([
            PositionName.D4,
            PositionName.C4,
            PositionName.E2,
            PositionName.E3,
            PositionName.E5,
            PositionName.E6,
            PositionName.E7,
            PositionName.F4,
            PositionName.G4,
            PositionName.H4
        ]);

        const foundLegalMoves = rook(board, Position.E4, kingPositions(board));

        expect(foundLegalMoves).toEqual(expectedLegalMoves);
    })

    it('does not include moves putting self in check', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,BP,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [__,WR,__,BR,__,__,__,BK],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,__,__],
            /*  H  */ [__,__,__,WP,__,__,__,__],
            ];
        const expectedLegalMoves = new Set([
            PositionName.E2,
            PositionName.E3,
            PositionName.E5,
            PositionName.E6,
            PositionName.E7,
        ]);

        const foundLegalMoves = rook(board, Position.E4, kingPositions(board));

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });
});