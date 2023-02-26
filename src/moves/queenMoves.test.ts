import queenMoves from './queenMoves';
import { positionName } from 'positions'
import { BQ,BP,WK,WQ,WR,BK,WP,__ } from 'positions/pieces-shorthand';
import { Board } from 'types/Board';
import COORDS from 'positions/coordinates';
describe('queen', () => {

    it(`provides all possible moves from queen on queen1board: `, () => {

        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,WQ,__,WK,__,__,BP,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [WK,__,__,__,__,__,__,BK],
            /*  F  */ [__,__,__,__,BP,__,__,__],
            /*  G  */ [__,WR,__,__,__,__,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__], 
            ];
        
        const expectedattackedPositions = new Set([
            COORDS.C3,
            COORDS.C1,
            COORDS.D2,
            COORDS.E2,
            COORDS.F2,
            COORDS.B2,
            COORDS.A2,
            COORDS.D3,
            COORDS.E4,
            COORDS.F5,
            COORDS.D1,
            COORDS.B1,
            COORDS.B3,
            COORDS.A4
        ].map(positionName))

        const foundattackedPositions = queenMoves(board, COORDS.C2);

        expect(foundattackedPositions).toEqual(expectedattackedPositions)
    });

    it('does not include moves putting self in check', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,WP,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [WK,WR,__,BQ,__,__,__,BK],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,__,__],
            /*  H  */ [__,__,__,WP,__,__,__,__],
            ];
        const expectedLegalMoves = new Set([
            'E2',
            'E3',
            'E5',
            'E6',
            'E7',
        ]);

        const foundLegalMoves = queenMoves(board, COORDS.E4);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });

    
})