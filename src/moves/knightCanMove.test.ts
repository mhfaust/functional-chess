import knightCanMove from 'moves/knightCanMove'
import { initialBoard } from 'board'
import COORDS from 'positions/coordinates'
import { __, WK, WN, BK, BQ } from 'positions/pieces-shorthand';
import { locatePiece } from 'positions';
import kingPositions from 'board/kingPositions';
import { Board } from 'types/Board';

describe('knightCanMove', () => {


    const initialAnnotations = kingPositions(initialBoard());

    it('reports true attempting to move to empty square, 2 forward, 1 left.', () => {

        const answer = knightCanMove(initialBoard(), COORDS.B1, COORDS.A3, initialAnnotations)
        expect(answer).toBe(true);
    });

    it('reports true attempting to move to empty square, 2 forward, 1 right.', () => {
       

        const answer = knightCanMove(initialBoard(), COORDS.B1, COORDS.C3, initialAnnotations)
        expect(answer).toBe(true);
    });

    it('reports false attempting to move to square occupied by own players piece.', () => {
        
        const answer = knightCanMove(initialBoard(), COORDS.B1, COORDS.C2, initialAnnotations)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move to mechanically disallowed square', () => {

        const answer = knightCanMove(initialBoard(), COORDS.B1, COORDS.B4, initialAnnotations)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move off-board', () => {

        const answer = knightCanMove(initialBoard(), COORDS.B1, [-1,1], initialAnnotations)
        expect(answer).toBe(false);
    })

    it('cannot move pinned knight',() =>{
        const board: Board = [
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

        const answer = knightCanMove(board, COORDS.E4, COORDS.C3, kingPositions(board))
        expect(answer).toBe(false);

    })
})