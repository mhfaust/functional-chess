import canPawnMove from 'moves/canPawnMove'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';
import { Position } from 'constants/position';
import { locatePiece } from 'position-utils/index';

const locateBlackKing = (board:Board):GridCoordinates => locatePiece(board, Piece.BlackKing)
const locateWhiteKing = (board:Board):GridCoordinates => locatePiece(board, Piece.WhiteKing)

const pawn1Board: Board = [
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
            const answer = canPawnMove(pawn1Board, Position.C3, Position.C4, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(true);
        });
    
        it('cannot move one space forward when IS blocked', () => {
            const answer = canPawnMove(pawn1Board, Position.H4, Position.H5, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
            const answer = canPawnMove(pawn1Board, Position.D4, Position.E5, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {
            const answer = canPawnMove(pawn1Board, Position.C3, Position.B4, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(true);
        });

        it('cannot move foward left to empty square', () => {
            const answer = canPawnMove(pawn1Board, Position.G2, Position.F3, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(false);
        })

        it('cannot move foward right to empty square', () => {
            const answer = canPawnMove(pawn1Board, Position.E2, Position.F3, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(false);
        })

        it('cannot move backward', () => {
            const answer = canPawnMove(pawn1Board, Position.G5, Position.H5, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {
            const answer = canPawnMove(pawn1Board, Position.H4, Position.G4, locateWhiteKing(pawn1Board), null);
            expect(answer).toBe(false);
        })
    });

    describe('black', () => {
        it('can move one space forward when NOT blocked', () => {
            const answer = canPawnMove(pawn1Board, Position.E5, Position.E4, locateBlackKing(pawn1Board), null);
            expect(answer).toBe(true);
        });
    
        it('can move one space forward when IS blocked', () => {
            const answer = canPawnMove(pawn1Board, Position.D5, Position.D4, locateBlackKing(pawn1Board), null);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
            const answer = canPawnMove(pawn1Board, Position.E5, Position.D4, locateBlackKing(pawn1Board), null);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {
            const answer = canPawnMove(pawn1Board, Position.G5, Position.H4, locateBlackKing(pawn1Board), null);
            expect(answer).toBe(true);
        });

        it('cannot move backward', () => {
            const answer = canPawnMove(pawn1Board, Position.B4, Position.B5, locateBlackKing(pawn1Board), null);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {
            const answer = canPawnMove(pawn1Board, Position.H4, Position.G4, locateBlackKing(pawn1Board), null);
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

            const passantInfo:PassantInfo = {
                passedPosition:Position.E3,
                pawnAt:Position.E4
            }

            const answer = canPawnMove(board, Position.D4, Position.E3, locateBlackKing(board), passantInfo);
            expect(answer).toBe(true);
        });

        it('black pawn cannot attack a passant-looking square if passant info is null', () => {
            //this a "control-case" correlate to the previous test.
            const answerNullPassantInfo = canPawnMove(board, Position.D4, Position.E3, locateBlackKing(board), null);
            expect(answerNullPassantInfo).toBe(false);
        });

        it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', () => {

            const passantInfo:PassantInfo = {
                passedPosition:Position.G6,
                pawnAt:Position.G5
            }

            const answer = canPawnMove(board, Position.H5, Position.G6, locateWhiteKing(board), passantInfo);
            expect(answer).toBe(true);
        });

        it('white pawn cannot attack a passant-looking square if passant info is null', () => {
            //this a "control-case" correlate to the previous test.
            const answerNullPassantInfo = canPawnMove(board, Position.H5, Position.G6, locateWhiteKing(board), null);
            expect(answerNullPassantInfo).toBe(false);
        });
    })
});