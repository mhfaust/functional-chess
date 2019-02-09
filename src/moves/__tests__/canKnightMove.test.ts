import canKnightMove from 'moves/canKnightMove'
import { initialBoard } from 'board-utils/index'
import { Position } from 'constants/position';

describe('canKnightMove', () => {
    it('reports true attempting to move to empty square, 2 forward, 1 left.', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.A3, Position.E1)
        expect(answer).toBe(true);
    });

    it('reports true attempting to move to empty square, 2 forward, 1 right.', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.C3, Position.E1)
        expect(answer).toBe(true);
    });

    it('reports false attempting to move to square occupied by own players piece.', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.C2, Position.E1)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move to mechanically disallowed square', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, Position.B4, Position.E1)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move off-board', () => {
        const answer = canKnightMove(initialBoard(), Position.B1, [-1,1], Position.E1)
        expect(answer).toBe(false);
    })
})