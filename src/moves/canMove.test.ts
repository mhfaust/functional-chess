import COORDS from 'positions/coordinates'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import canMoveTo from "moves/canMoveTo";
import kingPositions from "board/kingPositions";
import { CastlingAnnotations } from "interfaces/CastlingAnnotations";
import { MoveAnnotations } from "interfaces/MoveAnnotations";
import { Board } from "types/Board";
import { coordinates } from 'positions';

const defaultMoveAnnotations: MoveAnnotations = {
    whiteKingPosition: null,
    blackKingPosition: null,
    passedPosition: null,
    pawnAt: null,
    blackKingSideCastlingPrecluded: false,
    blackQueenSideCastlingPrecluded: false,
    whiteKingSideCastlingPrecluded: false,
    whiteQueenSideCastlingPrecluded: false
}

describe('canMoveTo (Bishop)', () => {
    
    it('Can move bishop only along axis of potential check while blocking check', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WK,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [__,__,__,WB,__,__,__,__],
        /*  E  */ [__,__,__,__,__,__,__,BK],
        /*  F  */ [__,__,__,__,__,__,__,__],
        /*  G  */ [__,__,__,__,__,__,BB,__],
        /*  H  */ [__,__,__,__,__,__,__,BR],
        ];

        const annotations = {
            ...defaultMoveAnnotations,
            ...kingPositions(board)
        }

        expect(canMoveTo(board, coordinates.D4, coordinates.C3, annotations)).toBe(true);  
        expect(canMoveTo(board, coordinates.D4, coordinates.C5, annotations)).toBe(false);  
    });
});


describe('canMoveTo (King)', () => {

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
        const noPreclusions: CastlingAnnotations = {
            whiteQueenSideCastlingPrecluded: false,
            whiteKingSideCastlingPrecluded: false,
            blackQueenSideCastlingPrecluded: false,
            blackKingSideCastlingPrecluded: false,
        }
        const boardAnnotations = { ...defaultMoveAnnotations, ...noPreclusions, ...kingPositions(board) };

        expect(canMoveTo(board, coordinates.E1, coordinates.G1, boardAnnotations)).toBe(false)
    
});


describe('canMoveTo Knight', () => {

    
});


describe('canMoveTo (Pawn)', () => {

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
        const annotations: MoveAnnotations = {
            ...defaultMoveAnnotations,
            ...kingPositions(board),
            passedPosition: 'E3',
            pawnAt: 'E4'
        }

        const answer = canMoveTo(board, coordinates.D4, coordinates.E3, annotations);
        expect(answer).toBe(true);
    });
});


describe('canMoveTo (Queen)', () => {
    const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [__,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,WQ,__,WK,__,__,BP,__],
        /*  D  */ [__,__,__,__,__,__,__,__],
        /*  E  */ [__,__,__,__,__,__,__,BK],
        /*  F  */ [__,__,__,__,BP,__,__,__],
        /*  G  */ [__,WR,__,__,__,__,__,__],
        /*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations = {
            ...defaultMoveAnnotations,
            ...kingPositions(board)
        }

        it('can capture opponent piece, diagonally', () => {
            expect(canMoveTo(board, coordinates.C2, coordinates.F5, annotations)).toBe(true)
        });
    
});


describe('canMoveTo (Rook)', () => {

    
});