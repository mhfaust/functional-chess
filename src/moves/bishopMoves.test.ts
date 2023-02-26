import bishopMoves from './bishopMoves';
import { positionName } from 'positions';
import COORDS from 'positions/coordinates'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { Board } from 'types/Board';

describe('bishop', () => {

    it(`provides all possible moves from bishop `, () => {

        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,WP,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,WB,__,__,__,__],
            /*  E  */ [WK,__,__,__,__,__,__,BK],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,BP,__],
            /*  H  */ [__,__,__,__,__,__,__,BR],
            ];
        
        const expectedLegalMoves = new Set([
            COORDS.E5,
            COORDS.F6,
            COORDS.G7,
            COORDS.E3,
            COORDS.F2,
            COORDS.G1,
            COORDS.C3,
            COORDS.B2,
            COORDS.A1,
            COORDS.C5
        ].map(positionName));

        const foundLegalMoves = bishopMoves(board, COORDS.D4);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    })

    it('does not include moves putting self in check', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [WK,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,WB,__,__,__,__],
            /*  E  */ [__,__,__,__,__,__,__,BK],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,BB,__],
            /*  H  */ [__,__,__,__,__,__,__,BR],
            ];
            
        const expecteLegalMoves = new Set([
            COORDS.E5,
            COORDS.F6,
            COORDS.G7,
            COORDS.C3,
            COORDS.B2,
        ].map(positionName));


        const foundLegalMoves = bishopMoves(board, COORDS.D4);

        expect(foundLegalMoves).toEqual(expecteLegalMoves)   
    })
})