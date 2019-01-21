import canKnightMove from 'moves/canKnightMove'
import { initialBoard } from 'board-utils/index'
import { Position } from 'constants/algebraic';

describe('canKnightMove', () => {
    it('reports true attempting to move to empty square, 2 forward, 1 left.', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.A3)
        expect(answer).toBe(true);
    });

    it('reports true attempting to move to empty square, 2 forward, 1 right.', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.C3)
        expect(answer).toBe(true);
    });

    it('reports false attempting to move to square occupied by own players piece.', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.C2)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move to mechanically disallowed square', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.B4)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move off-board', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, [-1,1])
        expect(answer).toBe(false);
    })
})