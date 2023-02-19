import pawnCanMove from 'moves/pawnCanMove'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import COORDS from 'positions/coordinates'
import { locatePiece } from 'positions';
import kingPositions from 'board/kingPositions';
import { EnPassantAnnotations } from 'interfaces/EnPassantAnnotations';
import { KingAnnotations } from 'interfaces/KingAnnotations';
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

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.C3, COORDS.C4, annotations);
            expect(answer).toBe(true);
        });
    
        it('cannot move one space forward when IS blocked', () => {
                        
            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.H4, COORDS.H5, annotations);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
                        
            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.D4, COORDS.E5, annotations);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.C3, COORDS.B4, annotations);
            expect(answer).toBe(true);
        });

        it('cannot move foward left to empty square', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.G2, COORDS.F3, annotations);
            expect(answer).toBe(false);
        })

        it('cannot move foward right to empty square', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.E2, COORDS.F3, annotations);
            expect(answer).toBe(false);
        })

        it('cannot move backward', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.G5, COORDS.H5, annotations);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.H4, COORDS.G4, annotations);
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

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.E5, COORDS.E4, annotations);
            expect(answer).toBe(true);
        });
    
        it('can move one space forward when IS blocked', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.D5, COORDS.D4, annotations);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.E5, COORDS.D4, annotations);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.G5, COORDS.H4, annotations);
            expect(answer).toBe(true);
        });

        it('cannot move backward', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.B4, COORDS.B5, annotations);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answer = pawnCanMove(board, COORDS.H4, COORDS.G4, annotations);
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

            const annotations = {
                ...kingPositions(board),
                passedPosition: COORDS.E3,
                pawnAt: COORDS.E4
            }

            const answer = pawnCanMove(board, COORDS.D4, COORDS.E3, annotations);
            expect(answer).toBe(true);
        });

        it('black pawn cannot attack a passant-looking square if passant info is null', () => {
            
            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }
            const answerNullPassantInfo = pawnCanMove(board, COORDS.D4, COORDS.E3, annotations);
            expect(answerNullPassantInfo).toBe(false);
        });

        it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', () => {

            const annotations = {
                ...kingPositions(board),
                passedPosition: COORDS.G6,
                pawnAt: COORDS.G5
            }

            const answer = pawnCanMove(board, COORDS.H5, COORDS.G6, annotations);
            expect(answer).toBe(true);
        });

        it('white pawn cannot attack a passant-looking square if passant info is null', () => {

            const annotations: EnPassantAnnotations & KingAnnotations = {
                ...kingPositions(board),
                passedPosition: null,
                pawnAt: null
            }

            const answerNullPassantInfo = pawnCanMove(board, COORDS.H5, COORDS.G6, annotations);
            expect(answerNullPassantInfo).toBe(false);
        });
    })
});