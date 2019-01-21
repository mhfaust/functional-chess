import allPlayerPositions from '../allPlayerPositions'
import { initialBoard } from 'boards/index'
import { Position } 
    from 'constants/algebraic';
import algebraicName from '../algebraicName';

import { WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

describe('allPlayerPositions', () => {

    const expectedWhitePositions = [
        {position: algebraicName(Position.A1), piece: WR},
        {position: algebraicName(Position.B1), piece: WN},
        {position: algebraicName(Position.C1), piece: WB},
        {position: algebraicName(Position.D1), piece: WQ},
        {position: algebraicName(Position.E1), piece: WK},
        {position: algebraicName(Position.F1), piece: WB},
        {position: algebraicName(Position.G1), piece: WN},
        {position: algebraicName(Position.H1), piece: WR},
        {position: algebraicName(Position.A2), piece: WP},
        {position: algebraicName(Position.B2), piece: WP},
        {position: algebraicName(Position.C2), piece: WP},
        {position: algebraicName(Position.D2), piece: WP},
        {position: algebraicName(Position.E2), piece: WP},
        {position: algebraicName(Position.F2), piece: WP},
        {position: algebraicName(Position.G2), piece: WP},
        {position: algebraicName(Position.H2), piece: WP},
    ];

    const result = allPlayerPositions(initialBoard(), Player.White);

    expectedWhitePositions.forEach(expected => {
        it(`should report a ${expected.piece} at ${expected.position}`, () => {
            const soughtPiece = r => 
                r.position === expected.position 
                && r.piece === expected.piece;
                
            expect(result.some(soughtPiece)).toBe(true);
        });
    });

    it('should find 16 pieces', () => {
       expect(result.length).toBe(16);
    })

})