import canKnightMove from 'moves/canKnightMove'
import { initialBoard } from 'board-utils/index'
import { Position } from 'constants/position';
import { __, WK, WN, BK, BQ } from 'board-utils/pieces-shorthand';
import { locatePiece } from 'position-utils/index';

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

    it('cannot move pinned knight',() =>{
        const board:Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [WK,__,__,WN,__,__,__,BQ],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const answer = canKnightMove(board, Position.E4, Position.C3, locatePiece(board, Piece.WhiteKing))
        expect(answer).toBe(false);

    })
})