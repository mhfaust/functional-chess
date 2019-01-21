import rook from '../rookMoves';
import { algebraicName } from 'position-utils/index';
import { Position } from 'constants/algebraic';
import { BK,BR,BP,WP,__ } from 'board-utils/pieces-shorthand';

const rook1Board = (): Board => [
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

describe('rook', () => {

    // beforeAll(() => console.log(textRender(rook1Board())))

    it(`provides all possible moves from rook on rook1board: `, () => {

        const board =  rook1Board();
        
        const expectedattackedPositions = new Set([
            Position.D4,
            Position.C4,
            Position.E2,
            Position.E3,
            Position.E5,
            Position.E6,
            Position.E7,
            Position.F4,
            Position.G4,
            Position.H4
        ].map(algebraicName))
        const foundattackedPositions = rook(board, Position.E4);

        expect(foundattackedPositions).toEqual(expectedattackedPositions)
    })
});