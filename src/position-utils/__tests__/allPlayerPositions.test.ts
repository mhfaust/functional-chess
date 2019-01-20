import allPlayerPositions from '../allPlayerPositions'
import { initialBoard } from 'boards/index'
import { Piece } from 'constants/pieces';
import { A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2,H1,H2 } 
    from 'constants/algebraic';
import algebraicName from '../algebraicName';

const { WK,WQ,WR,WN,WB,WP,__ } = Piece;

describe('allPlayerPositions', () => {

    const expectedWhitePositions = [
        {position: algebraicName(A1), piece: WR},
        {position: algebraicName(B1), piece: WN},
        {position: algebraicName(C1), piece: WB},
        {position: algebraicName(D1), piece: WQ},
        {position: algebraicName(E1), piece: WK},
        {position: algebraicName(F1), piece: WB},
        {position: algebraicName(G1), piece: WN},
        {position: algebraicName(H1), piece: WR},
        {position: algebraicName(A2), piece: WP},
        {position: algebraicName(B2), piece: WP},
        {position: algebraicName(C2), piece: WP},
        {position: algebraicName(D2), piece: WP},
        {position: algebraicName(E2), piece: WP},
        {position: algebraicName(F2), piece: WP},
        {position: algebraicName(G2), piece: WP},
        {position: algebraicName(H2), piece: WP},
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