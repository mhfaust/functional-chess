import canPawnMove from 'moves/canPawnMove'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';
import { Position } from 'constants/algebraic';

const pawn1Board = (): Board => [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [WR,WP,__,__,__,__,BP,BR],
/*  B  */ [WN,WP,__,BP,__,__,__,BN],
/*  C  */ [WB,__,WP,__,BP,__,__,BB],
/*  D  */ [WQ,__,__,WP,__,BP,__,BQ],
/*  E  */ [WK,WP,__,__,BP,__,__,BK],
/*  F  */ [WB,WP,__,__,__,__,BP,BB],
/*  G  */ [WN,WP,__,__,BP,__,__,BN],
/*  H  */ [WR,__,__,WP,BP,__,__,BR],
];

describe('canPawnMove', () => {

    describe('white', () => {
        it('can move one space forward when NOT blocked', () => {
            const answer = canPawnMove(pawn1Board(), Position.C3, Position.C4);
            expect(answer).toBe(true);
        });
    
        it('cannot move one space forward when IS blocked', () => {
            const answer = canPawnMove(pawn1Board(), Position.H4, Position.H5);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
            const answer = canPawnMove(pawn1Board(), Position.D4, Position.E5);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {
            const answer = canPawnMove(pawn1Board(), Position.C3, Position.B4);
            expect(answer).toBe(true);
        });

        it('cannot move foward left to empty square', () => {
            const answer = canPawnMove(pawn1Board(), Position.G2, Position.F3);
            expect(answer).toBe(false);
        })

        it('cannot move foward right to empty square', () => {
            const answer = canPawnMove(pawn1Board(), Position.E2, Position.F3);
            expect(answer).toBe(false);
        })

        it('cannot move backward', () => {
            const answer = canPawnMove(pawn1Board(), Position.G5, Position.H5);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {
            const answer = canPawnMove(pawn1Board(), Position.H4, Position.G4);
            expect(answer).toBe(false);
        })
    });

    describe('black', () => {
        it('can move one space forward when NOT blocked', () => {
            const answer = canPawnMove(pawn1Board(), Position.E5, Position.E4);
            expect(answer).toBe(true);
        });
    
        it('can move one space forward when IS blocked', () => {
            const answer = canPawnMove(pawn1Board(), Position.D5, Position.D4);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
            const answer = canPawnMove(pawn1Board(), Position.E5, Position.D4);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {
            const answer = canPawnMove(pawn1Board(), Position.G5, Position.H4);
            expect(answer).toBe(true);
        });

        it('cannot move backward', () => {
            const answer = canPawnMove(pawn1Board(), Position.B4, Position.B5);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {
            const answer = canPawnMove(pawn1Board(), Position.H4, Position.G4);
            expect(answer).toBe(false);
        })
    });
});