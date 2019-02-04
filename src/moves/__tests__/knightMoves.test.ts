import knight from 'moves/knightMoves';
import { initialBoard } from 'board-utils/index';
import { Position } from 'constants/position';

describe('knight', () => {
    
    it('can move from initial board white queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.B1, Position.E1);
        
        expect(attackedPositions).toContain(PositionName.A3)
        expect(attackedPositions).toContain(PositionName.C3)
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board white king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.G1, Position.E1);
        
        expect(attackedPositions).toContain(PositionName.F3)
        expect(attackedPositions).toContain(PositionName.H3)
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black queen knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.B8, Position.E8);
        
        expect(attackedPositions).toContain(PositionName.A6)
        expect(attackedPositions).toContain(PositionName.C6)
        expect(attackedPositions.size).toBe(2)
    });

    it('can move from initial board black king knight to A3 and C3 only', () => {
        const attackedPositions = knight(initialBoard(), Position.G8, Position.E8);
        
        expect(attackedPositions).toContain('F6')
        expect(attackedPositions).toContain('H6')
        expect(attackedPositions.size).toBe(2)
    });
})