import canBishopMove from 'canMove/canBishopMove'
import { Position } from 'constants/algebraic';
import { pieces } from 'constants/pieces'
const { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,Empty,__ } = pieces;
    
describe('canBishopMove', () => {

    const bishop1Board = () : Board => [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [__,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,WP,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [__,__,__,WB,__,__,__,__],
        /*  E  */ [__,__,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,__,__,__,__],
        /*  G  */ [__,__,__,__,__,__,BP,__],
        /*  H  */ [__,__,__,__,__,__,__,BR],
    ];

    it('can advance left', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.C5);
        expect(answer).toBe(true);
    });

    it('can advance right', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.F6);
        expect(answer).toBe(true);
    });

    it('can retreat left', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.A1);
        expect(answer).toBe(true);
    });

    it('can retreat right', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.G1);
        expect(answer).toBe(true);
    });

    it('cannot move unequal forward and right displacements', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.H6);
        expect(answer).toBe(false);
    });

    it('canot move laterally', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.H4);
        expect(answer).toBe(false);
    });

    it('canot advance forward', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.D8);
        expect(answer).toBe(false);
    });

    it('cannot capture own piece', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.B6);
        expect(answer).toBe(false);
    });

    it('can capture opponent piece', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.G7);
        expect(answer).toBe(true);
    });

    it('cannot move beyond a piece', () => {
        const answer = canBishopMove(bishop1Board(), Position.D4, Position.H8);
        expect(answer).toBe(false);
    });
})