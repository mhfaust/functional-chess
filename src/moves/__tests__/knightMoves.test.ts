import knight from 'moves/knightMoves';
import { initialBoard } from 'board-utils/index';
import { Position } from 'constants/algebraic';

describe('knight', () => {
    it('can move from initial board white queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.B1);
        
        expect(attackedPositions).toContain(AlgebraicName.A3)
        expect(attackedPositions).toContain(AlgebraicName.C3)
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board white king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.G1);
        
        expect(attackedPositions).toContain(AlgebraicName.F3)
        expect(attackedPositions).toContain(AlgebraicName.H3)
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.B8);
        
        expect(attackedPositions).toContain(AlgebraicName.A6)
        expect(attackedPositions).toContain(AlgebraicName.C6)
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.G8);
        
        expect(attackedPositions).toContain('F6')
        expect(attackedPositions).toContain('H6')
        expect(attackedPositions.size).toBe(2)
    });
})