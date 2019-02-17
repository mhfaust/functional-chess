import bishopMoves from '../bishopMoves';
import { positionName } from 'position-utils/index';
import { Position } from 'constants/position';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';
import kingPositions from 'board-utils/kingPositions';

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
            Position.E5,
            Position.F6,
            Position.G7,
            Position.E3,
            Position.F2,
            Position.G1,
            Position.C3,
            Position.B2,
            Position.A1,
            Position.C5
        ].map(positionName));

        const foundLegalMoves = bishopMoves(board, Position.D4, kingPositions(board));

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
            Position.E5,
            Position.F6,
            Position.G7,
            Position.C3,
            Position.B2,
        ].map(positionName));


        const foundLegalMoves = bishopMoves(board, Position.D4, kingPositions(board));

        expect(foundLegalMoves).toEqual(expecteLegalMoves)   
    })
})