import canKnightMove from 'piece-specific-move-mechanics/canKnightMove'
import { initialBoard } from 'boards'
import { A1,A2,A3,A4,A5,A6,A7,A8,B1,B2,B3,B4,B5,B6,B7,B8,C1,C2,C3,C4,C5,C6,C7,C8,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,E5,E6,E7,E8,F1,F2,F3,F4,F5,F6,F7,F8,G1,G2,G3,G4,G5,G6,G7,G8,H1,H2,H3,H4,H5,H6,H7,H8 } 
    from 'constants/algebraic';

describe('canKnightMove', () => {
    it('reports true attempting to move to empty square, 2 forward, 1 left.', () => {
        const answer = canKnightMove(initialBoard(), B1, A3)
        expect(answer).toBe(true);
    });

    it('reports true attempting to move to empty square, 2 forward, 1 right.', () => {
        const answer = canKnightMove(initialBoard(), B1, C3)
        expect(answer).toBe(true);
    });

    it('reports false attempting to move to square occupied by own players piece.', () => {
        const answer = canKnightMove(initialBoard(), B1, C2)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move to mechanically disallowed square', () => {
        const answer = canKnightMove(initialBoard(), B1, B4)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move off-board', () => {
        const answer = canKnightMove(initialBoard(), B1, [-1,1])
        expect(answer).toBe(false);
    })
})