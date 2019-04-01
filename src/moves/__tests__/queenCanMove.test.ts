import queenCanMove  from 'moves/queenCanMove'
import { BP,WK,WQ,WR,__ } from 'positions/pieces-shorthand';
import { Position } from 'constants/position';
import { kingPositions } from 'board';

describe('queenCanMove', () => {
    const queen1Board:Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [__,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,WQ,__,WK,__,__,BP,__],
        /*  D  */ [__,__,__,__,__,__,__,__],
        /*  E  */ [__,__,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,BP,__,__,__],
        /*  G  */ [__,WR,__,__,__,__,__,__],
        /*  H  */ [__,__,__,__,__,__,__,__], 
        ];

    it('can move right one', () => {
        expect(queenCanMove(queen1Board, Position.C2, Position.C3, kingPositions(queen1Board))).toBe(true)
    });

    it('cannot take own piece', () => {
        expect(queenCanMove(queen1Board, Position.C2, Position.C4, kingPositions(queen1Board))).toBe(false)
    });

    it('can capture opponent piece, diagonally', () => {
        expect(queenCanMove(queen1Board, Position.C2, Position.F5, kingPositions(queen1Board))).toBe(true)
    });
})