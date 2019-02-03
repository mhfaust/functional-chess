import bishop from '../bishopMoves';
import { algebraicName } from 'position-utils/index';
import { Position } from 'constants/algebraic';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

describe('bishop', () => {

    it(`provides all possible moves from bishop `, () => {

        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,WP,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,WB,__,__,__,__],
            /*  E  */ [WK,__,__,__,__,__,__,__],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,BP,__],
            /*  H  */ [__,__,__,__,__,__,__,BR],
            ];
        
        const expectedattackedPositions = new Set([
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
        ].map(algebraicName))

        const foundattackedPositions = bishop(board, Position.D4, Position.E1);

        expect(foundattackedPositions).toEqual(expectedattackedPositions)
    })

    it('does not include moves putting self in check', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [WK,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,WB,__,__,__,__],
            /*  E  */ [__,__,__,__,__,__,__,__],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,BB,__],
            /*  H  */ [__,__,__,__,__,__,__,BR],
            ];
            
        const expectedattackedPositions = new Set([
            Position.E5,
            Position.F6,
            Position.G7,
            Position.C3,
            Position.B2,
        ].map(algebraicName))

        const foundattackedPositions = bishop(board, Position.D4, Position.A1);

        expect(foundattackedPositions).toEqual(expectedattackedPositions)   
    })
})