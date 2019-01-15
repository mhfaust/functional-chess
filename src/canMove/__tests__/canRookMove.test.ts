import canRookMove from 'canMove/canRookMove';
import { rook1Board } from 'boards';
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';

describe('canRookMove', () => {

    it('cannot move to its current position', () => {
        expect(canRookMove(rook1Board(), E4, E4)).toBe(false);
    });

    describe('along rank', () => {
        it('cannot pass over opponent piece: (E4 -> E1)', () => {
            expect(canRookMove(rook1Board(), E4, E1)).toBe(false);
        });

        it('can capture: (E4 -> E2)', () => {
            expect(canRookMove(rook1Board(), E4, E2)).toBe(true);
        });

        it('can: (E4 -> E3)', () => {
            expect(canRookMove(rook1Board(), E4, E3)).toBe(true);
        });

        it('can: (E4 -> E5)', () => {
            expect(canRookMove(rook1Board(), E4, E5)).toBe(true);
        });

        it('can : (E4 -> E6)', () => {
            expect(canRookMove(rook1Board(), E4, E6)).toBe(true);
        });
    
        it('can move along rank  (E4 -> E7)', () => {
            expect(canRookMove(rook1Board(), E4, E7)).toBe(true);
        });
    
        it('cannot move onto own players piece', () => {
            expect(canRookMove(rook1Board(), E4, E8)).toBe(false);
        })
    })

    describe('along file', () => {

    })
    
})