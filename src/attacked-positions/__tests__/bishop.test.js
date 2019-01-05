import bishop from '../bishop';
import { bishop1Board } from 'boards';
import { algebraicName } from 'position-utils'
import { textRender } from 'board-utils';
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';

describe('bishop', () => {

    beforeAll(() => console.log(textRender(bishop1Board())))

    it(`provides all possible moves from bishop on bishop1board: `, () => {

        const board =  bishop1Board();
        
        const expectedattackedPositions = new Set([E5,F6,G7,E3,F2,G1,C3,B2,A1,C5].map(algebraicName))
        const foundattackedPositions = bishop(board, D4);

        expect(foundattackedPositions).toEqual(expectedattackedPositions)
    })
})