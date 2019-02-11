import canPawnMove from 'moves/canPawnMove'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';
import { Position } from 'constants/position';
import { locatePiece } from 'position-utils/index';

describe('canPawnMove', () => {

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

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.C3, Position.C4, annotations);
            expect(answer).toBe(true);
        });
    
        it('cannot move one space forward when IS blocked', () => {
                        
            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.H4, Position.H5, annotations);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {
                        
            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.D4, Position.E5, annotations);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.C3, Position.B4, annotations);
            expect(answer).toBe(true);
        });

        it('cannot move foward left to empty square', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.G2, Position.F3, annotations);
            expect(answer).toBe(false);
        })

        it('cannot move foward right to empty square', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.E2, Position.F3, annotations);
            expect(answer).toBe(false);
        })

        it('cannot move backward', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.G5, Position.H5, annotations);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.H4, Position.G4, annotations);
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

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.E5, Position.E4, annotations);
            expect(answer).toBe(true);
        });
    
        it('can move one space forward when IS blocked', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.D5, Position.D4, annotations);
            expect(answer).toBe(false);
        });
    
        it('can capture forward right', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.E5, Position.D4, annotations);
            expect(answer).toBe(true);
        });
    
        it('can capture forward left', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.G5, Position.H4, annotations);
            expect(answer).toBe(true);
        });

        it('cannot move backward', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.B4, Position.B5, annotations);
            expect(answer).toBe(false);
        });

        it('cannot move sideways', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answer = canPawnMove(board, Position.H4, Position.G4, annotations);
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
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:Position.E3,
                pawnAt:Position.E4
            }

            const answer = canPawnMove(board, Position.D4, Position.E3, annotations);
            expect(answer).toBe(true);
        });

        it('black pawn cannot attack a passant-looking square if passant info is null', () => {
            
            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }
            const answerNullPassantInfo = canPawnMove(board, Position.D4, Position.E3, annotations);
            expect(answerNullPassantInfo).toBe(false);
        });

        it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', () => {

            const annotations = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:Position.G6,
                pawnAt:Position.G5
            }

            const answer = canPawnMove(board, Position.H5, Position.G6, annotations);
            expect(answer).toBe(true);
        });

        it('white pawn cannot attack a passant-looking square if passant info is null', () => {

            const annotations:HasPassantInfo & HasKingPositions = {
                whiteKingPosition: locatePiece(board, Piece.WhiteKing),
                blackKingPosition: locatePiece(board, Piece.BlackKing),
                passedPosition:null,
                pawnAt:null
            }

            const answerNullPassantInfo = canPawnMove(board, Position.H5, Position.G6, annotations);
            expect(answerNullPassantInfo).toBe(false);
        });
    })
});