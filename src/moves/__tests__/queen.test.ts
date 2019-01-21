import queen from '../queen';
import { algebraicName } from 'position-utils/index'
import { textRender } from 'board-utils/index';
import { Position } 
    from 'constants/algebraic';
import { BP,WK,WQ,WR,__ } from 'board-utils/pieces-shorthand';
describe('queen', () => {

    it(`provides all possible moves from queen on queen1board: `, () => {

        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,WQ,__,WK,__,__,BP,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [__,__,__,__,__,__,__,__],
            /*  F  */ [__,__,__,__,BP,__,__,__],
            /*  G  */ [__,WR,__,__,__,__,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__], 
            ];
        
        const expectedattackedPositions = new Set([
            Position.C3,
            Position.C1,
            Position.D2,
            Position.E2,
            Position.F2,
            Position.B2,
            Position.A2,
            Position.D3,
            Position.E4,
            Position.F5,
            Position.D1,
            Position.B1,
            Position.B3,
            Position.A4
        ].map(algebraicName))
        const foundattackedPositions = queen(board, Position.C2);

        expect(foundattackedPositions).toEqual(expectedattackedPositions)
    })
})