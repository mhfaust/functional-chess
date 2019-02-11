import canKnightMove from 'moves/canKnightMove'
import { initialBoard } from 'board-utils/index'
import { Position } from 'constants/position';
import { __, WK, WN, BK, BQ } from 'board-utils/pieces-shorthand';
import { locatePiece } from 'position-utils/index';

describe('canKnightMove', () => {


    const initialAnnotations = {
        whiteKingPosition: locatePiece(initialBoard(), Piece.WhiteKing),
        blackKingPosition: locatePiece(initialBoard(), Piece.BlackKing)
    };

    it('reports true attempting to move to empty square, 2 forward, 1 left.', () => {

        const answer = canKnightMove(initialBoard(), Position.B1, Position.A3, initialAnnotations)
        expect(answer).toBe(true);
    });

    it('reports true attempting to move to empty square, 2 forward, 1 right.', () => {
       

        const answer = canKnightMove(initialBoard(), Position.B1, Position.C3, initialAnnotations)
        expect(answer).toBe(true);
    });

    it('reports false attempting to move to square occupied by own players piece.', () => {
        
        const answer = canKnightMove(initialBoard(), Position.B1, Position.C2, initialAnnotations)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move to mechanically disallowed square', () => {

        const answer = canKnightMove(initialBoard(), Position.B1, Position.B4, initialAnnotations)
        expect(answer).toBe(false);
    });

    it('reports false attempting to move off-board', () => {

        const answer = canKnightMove(initialBoard(), Position.B1, [-1,1], initialAnnotations)
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

        const annotations = {
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            blackKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        const answer = canKnightMove(board, Position.E4, Position.C3, annotations)
        expect(answer).toBe(false);

    })
})