import knight from 'attacked-positions/knight';
import { initialBoard } from 'boards';
import { logBoard } from 'board-utils';
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';
    
describe('knight', () => {
    it('can move from initial board white queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), B1);
        
        expect(attackedPositions).toContain('A3')
        expect(attackedPositions).toContain('C3')
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board white king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), G1);
        
        expect(attackedPositions).toContain('F3')
        expect(attackedPositions).toContain('H3')
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), B8);
        
        expect(attackedPositions).toContain('A6')
        expect(attackedPositions).toContain('C6')
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), G8);
        
        expect(attackedPositions).toContain('F6')
        expect(attackedPositions).toContain('H6')
        expect(attackedPositions.size).toBe(2)
    });
})