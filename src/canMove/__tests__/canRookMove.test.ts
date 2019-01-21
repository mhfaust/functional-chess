import canRookMove from 'canMove/canRookMove';
import { rook1Board } from 'boards/index';
import { Position } 
    from 'constants/algebraic';

describe('canRookMove', () => {

    it('cannot move to its current position', () => {
        expect(canRookMove(rook1Board(), Position.E4, Position.E4)).toBe(false);
    });

    describe('along rank', () => {
        it('cannot pass over opponent piece: (E4 -> E1)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E1)).toBe(false);
        });

        it('can capture: (E4 -> E2)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E2)).toBe(true);
        });

        it('can: (E4 -> E3)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E3)).toBe(true);
        });

        it('can: (E4 -> E5)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E5)).toBe(true);
        });

        it('can : (E4 -> E6)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E6)).toBe(true);
        });
    
        it('can move along rank  (E4 -> E7)', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E7)).toBe(true);
        });
    
        it('cannot move onto own players piece', () => {
            expect(canRookMove(rook1Board(), Position.E4, Position.E8)).toBe(false);
        })
    })

    describe('along file', () => {

    })
    
})