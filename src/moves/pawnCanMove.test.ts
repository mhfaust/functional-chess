import pawnCanMove from 'moves/pawnCanMove'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import COORDS from 'positions/coordinates'
import { Board } from 'types/Board';

describe('pawnCanMove', () => {

    const board: Board = [
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

    describe('white', () => {
        it('can move one space forward when NOT blocked', () => {

            const answer = pawnCanMove(board, COORDS.C3, COORDS.C4, null);
            expect(answer).toBe(true);
        });
    
        it('cannot move one space forward when IS blocked', () => {

            const answer = pawnCanMove(board, COORDS.H4, COORDS.H5, null);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {

            const answer = pawnCanMove(board, COORDS.D4, COORDS.E5, null);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {

            const answer = pawnCanMove(board, COORDS.C3, COORDS.B4, null);
            expect(answer).toBe(true);
        });

        it('cannot move foward left to empty square', () => {

            const answer = pawnCanMove(board, COORDS.G2, COORDS.F3, null);
            expect(answer).toBe(false);
        })

        it('can move foward left to empty square if it is the en passant square', () => {

            const answer = pawnCanMove(board, COORDS.G2, COORDS.F3, 'F3');
            expect(answer).toBe(true);
        })

        it('cannot move foward right to empty square', () => {

            const answer = pawnCanMove(board, COORDS.E2, COORDS.F3, null);
            expect(answer).toBe(false);
        })

        it('cannot move backward', () => {

            const answer = pawnCanMove(board, COORDS.G5, COORDS.H5, null);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {

            const answer = pawnCanMove(board, COORDS.H4, COORDS.G4, null);
            expect(answer).toBe(false);
        })
    });

    describe('black', () => {

        const board: Board = [
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

        it('can move one space forward when NOT blocked', () => {

            const answer = pawnCanMove(board, COORDS.E5, COORDS.E4, null);
            expect(answer).toBe(true);
        });
    
        it('can move one space forward when IS blocked', () => {

            const answer = pawnCanMove(board, COORDS.D5, COORDS.D4, null);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {

            const answer = pawnCanMove(board, COORDS.E5, COORDS.D4, null);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {

            const answer = pawnCanMove(board, COORDS.G5, COORDS.H4, null);
            expect(answer).toBe(true);
        });

        it('cannot move backward', () => {

            const answer = pawnCanMove(board, COORDS.B4, COORDS.B5, null);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {

            const answer = pawnCanMove(board, COORDS.H4, COORDS.G4, null);
            expect(answer).toBe(false);
        })
    });

    describe('en-passant rule', () => {
        const board : Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [WR,WP,__,__,__,__,BP,BR],
            /*  B  */ [WN,WP,__,__,__,__,BP,BN],
            /*  C  */ [WB,WP,__,__,__,__,BP,BB],
            /*  D  */ [WQ,WP,__,BP,__,__,__,BQ],
            /*  E  */ [WK,__,__,WP,__,__,BP,BK],
            /*  F  */ [WB,WP,__,__,__,__,BP,BB],
            /*  G  */ [WN,WP,__,__,BP,__,__,BN],
            /*  H  */ [WR,__,__,__,WP,__,BP,BR],
        ];

        it('black pawn can attack a square passed by a white pawn moving from rank 2 to 4', () => {

            const answer = pawnCanMove(board, COORDS.D4, COORDS.E3, 'E3');
            expect(answer).toBe(true);
        });

        it('black pawn cannot attack a passant-looking square if passant info is null', () => {
            
            const answerNullPassantInfo = pawnCanMove(board, COORDS.D4, COORDS.E3, null);
            expect(answerNullPassantInfo).toBe(false);
        });

        it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', () => {

            const answer = pawnCanMove(board, COORDS.H5, COORDS.G6, 'G6');
            expect(answer).toBe(true);
        });

        it('white pawn cannot attack a passant-looking square if passant info is null', () => {

            const answerNullPassantInfo = pawnCanMove(board, COORDS.H5, COORDS.G6, null);
            expect(answerNullPassantInfo).toBe(false);
        });
    })
});