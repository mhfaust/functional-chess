import allPlayerPositions from '../allPlayerPositions'
import { initialBoard } from 'boards'
import { BLACK, BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,EMPTY,__ } from 'constants/pieces'
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';
import algebraicName from '../algebraicName';
import { WHITE } from '../../constants/pieces';

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

    const result = allPlayerPositions(initialBoard(), WHITE);

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