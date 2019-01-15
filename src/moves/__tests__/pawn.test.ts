import pawn from '../pawn';
import { pawn1Board } from 'boards';
import { algebraicName } from 'position-utils/index'
import { textRender } from 'board-utils';
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';

describe('pawn', () => {

    beforeAll(() => console.log(textRender(pawn1Board())))

    const testCases = [
        { pawnPosition: A2, attackedPositions: [A3, A4] },
        { pawnPosition: B2, attackedPositions: [B3] },
        { pawnPosition: C3, attackedPositions: [C4, B4] },
        { pawnPosition: D4, attackedPositions: [C5, D5, E5] },
        { pawnPosition: E2, attackedPositions: [E3, E4] },
        { pawnPosition: F2, attackedPositions: [F3, F4] },
        { pawnPosition: G2, attackedPositions: [G3, G4] },
        { pawnPosition: H4, attackedPositions: [G5] },
        { pawnPosition: A7, attackedPositions: [A6, A5] },
        { pawnPosition: B4, attackedPositions: [B3, C3] },
        { pawnPosition: C5, attackedPositions: [C4, D4] },
        { pawnPosition: D6, attackedPositions: [D5] },
        { pawnPosition: E5, attackedPositions: [D4, E4] },
        { pawnPosition: F7, attackedPositions: [F6, F5] },
        { pawnPosition: G5, attackedPositions: [G4, H4] },
        { pawnPosition: H5, attackedPositions: [] },
    ] ;

    testCases.forEach((testCase) => {
        it(`provides all possible moves from pawn at ${algebraicName(testCase.pawnPosition)} on pawn1board: `, () => {

            const board =  pawn1Board();
            const foundattackedPositions = pawn(board, testCase.pawnPosition);
    
            expect(foundattackedPositions).toEqual(new Set(testCase.attackedPositions.map(algebraicName)));
        })
    });

})