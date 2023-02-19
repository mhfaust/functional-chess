import { Position } from "constants/position";
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import canMoveTo from "moves/canMoveTo";
import kingPositions from "board/kingPositions";

const defaultMoveAnnotations: MoveAnnotations = {
    whiteKingPosition: null,
    blackKingPosition: null,
    passedPosition: null,
    pawnAt: null,
    blackKingSideCastlingPrecluded:false,
    blackQueenSideCastlingPrecluded:false,
    whiteKingSideCastlingPrecluded:false,
    whiteQueenSideCastlingPrecluded:false
}

describe('canMoveTo Bishop', () => {
    
    it('Can move bishop only along axis of potential check while blocking check', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WK,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [__,__,__,WB,__,__,__,__],
        /*  E  */ [__,__,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,__,__,__,__],
        /*  G  */ [__,__,__,__,__,__,BB,__],
        /*  H  */ [__,__,__,__,__,__,__,BR],
        ];

        const annotations = {
            ...defaultMoveAnnotations,
            ...kingPositions(board)
        }

        expect(canMoveTo(board, Position.D4, Position.C3, annotations)).toBe(true);  
        expect(canMoveTo(board, Position.D4, Position.C5, annotations)).toBe(false);  
    });
});


describe('canMoveTo King', () => {

    const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WR,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [__,__,__,__,__,__,__,BK],
        /*  E  */ [WK,__,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,__,__,__,__],
        /*  G  */ [__,__,__,__,__,__,__,BR],
        /*  H  */ [WR,__,__,__,__,__,__,__], 
        ];
        const noPreclusions:CastlingAnnotations = {
            whiteQueenSideCastlingPrecluded:false,
            whiteKingSideCastlingPrecluded:false,
            blackQueenSideCastlingPrecluded:false,
            blackKingSideCastlingPrecluded:false,
        }
        const boardAnnotations = { ...defaultMoveAnnotations, ...noPreclusions, ...kingPositions(board) };

        expect(canMoveTo(board, Position.E1, Position.G1, boardAnnotations)).toBe(false)
    
});


describe('canMoveTo Knight', () => {

    
});


describe('canMoveTo Pawn', () => {

    it('black pawn can attack a square passed by a white pawn moving from rank 2 to 4', () => {
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
        const annotations = {
            ...defaultMoveAnnotations,
            ...kingPositions(board),
            passedPosition:Position.E3,
            pawnAt:Position.E4
        }

        const answer = canMoveTo(board, Position.D4, Position.E3, annotations);
        expect(answer).toBe(true);
    });
});


describe('canMoveTo Queen', () => {
    const board:Board = [
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

        const annotations = {
            ...defaultMoveAnnotations,
            ...kingPositions(board)
        }

        it('can capture opponent piece, diagonally', () => {
            expect(canMoveTo(board, Position.C2, Position.F5, annotations)).toBe(true)
        });
    
});


describe('canMoveTo Rook', () => {

    
});