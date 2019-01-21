import rook from '../rook';
import { rook1Board } from 'boards/index';
import { algebraicName } from 'position-utils/index'
// import { textRender } from 'board-utils/index';
import { Position } from 'constants/algebraic';

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