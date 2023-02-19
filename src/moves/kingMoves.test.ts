
import COORDS from 'positions/coordinates'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { kingMoves } from 'moves';
import { locatePiece } from 'positions';
import kingPositions from 'board/kingPositions';
import { CastlingAnnotations } from 'interfaces/CastlingAnnotations';
import { Board } from 'types/Board';

const noPreclusions: CastlingAnnotations = {
    whiteQueenSideCastlingPrecluded: false,
    whiteKingSideCastlingPrecluded: false,
    blackQueenSideCastlingPrecluded: false,
    blackKingSideCastlingPrecluded: false,
}
const allPrecluded: CastlingAnnotations = {
    whiteQueenSideCastlingPrecluded: true,
    whiteKingSideCastlingPrecluded: true,
    blackQueenSideCastlingPrecluded: true,
    blackKingSideCastlingPrecluded: true,
}

describe('kingMoves', () => {
    it('Cannot move, initially', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WR,WP,__,__,__,__,BP,BR],
        /*  B  */ [WN,WP,__,__,__,__,BP,BN],
        /*  C  */ [WB,WP,__,__,__,__,BP,BB],
        /*  D  */ [WQ,WP,__,__,__,__,BP,BQ],
        /*  E  */ [WK,WP,__,__,__,__,BP,BK],
        /*  F  */ [WB,WP,__,__,__,__,BP,BB],
        /*  G  */ [WN,WP,__,__,__,__,BP,BN],
        /*  H  */ [WR,WP,__,__,__,__,BP,BR],
        ];
        const expectedLegalMoves = new Set([]);

        const boardAnnotations = { ...noPreclusions, ...kingPositions(board) };

        const foundLegalMoves = kingMoves(board, COORDS.E1, boardAnnotations);

        expect(foundLegalMoves).toEqual(expectedLegalMoves);
    });

    it('King moves any diection, only one square', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [__,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [__,__,__,__,__,__,BK,__],
        /*  E  */ [WK,__,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,__,__,__,__],
        /*  G  */ [__,__,__,__,__,__,__,__],
        /*  H  */ [__,__,__,__,__,__,__,__], 
        ];
        const expectedLegalMoves = new Set(['C6','C7','C8','D6','D8','E6','E7','E8']);

        const boardAnnotations = { ...allPrecluded, ...kingPositions(board) };
    
        const foundLegalMoves = kingMoves(board, COORDS.D7, boardAnnotations);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });

    it('Cannot put self in check', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WR,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [WQ,WP,__,__,__,__,__,BK],
        /*  E  */ [WK,WP,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,__,__,__,BR],
        /*  G  */ [WN,__,__,__,__,__,__,__],
        /*  H  */ [WR,__,__,__,__,__,__,__], 
        ];

        const boardAnnotations = { ...noPreclusions, ...kingPositions(board) };
    
        const foundLegalMoves = kingMoves(board, COORDS.E1, boardAnnotations);

        expect(foundLegalMoves).toEqual(new Set([]));
    });

    it('White king can castle, king-side', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WR,WP,__,__,__,__,BP,BR],
        /*  B  */ [WN,WP,__,__,__,__,BP,__],
        /*  C  */ [WB,WP,__,__,__,BN,BP,BB],
        /*  D  */ [WQ,WP,WB,__,BP,__,__,BQ],
        /*  E  */ [WK,__,__,WP,BP,__,__,BK],
        /*  F  */ [__,WP,WN,__,__,__,BP,BB],
        /*  G  */ [__,WP,__,__,__,__,BP,BN],
        /*  H  */ [WR,WP,__,__,__,__,BP,BR],
        ]; 

        const boardAnnotations = { ...noPreclusions, ...kingPositions(board) };
    
        const foundLegalMoves = kingMoves(board, COORDS.E1, boardAnnotations);

        expect(foundLegalMoves).toContain('G1')
    });  
    
    
    it('White king cannot castle across check', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WR,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,__,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [__,__,__,__,__,__,__,BK],
        /*  E  */ [WK,__,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,__,__,__,BR],
        /*  G  */ [__,__,__,__,__,__,__,__],
        /*  H  */ [WR,__,__,__,__,__,__,__], 
        ];
    
        const boardAnnotations = { ...noPreclusions, ...kingPositions(board) };

        const foundLegalMoves = kingMoves(board, COORDS.E1, boardAnnotations);

        expect(foundLegalMoves).not.toContain('G1')
    });

     
    it('White king cannot castle into check', () => {
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

        const boardAnnotations = { ...noPreclusions, ...kingPositions(board) };
    
        const foundLegalMoves = kingMoves(board, COORDS.E1, boardAnnotations);

        expect(foundLegalMoves).not.toContain('G1')
    });

    it('Black king can castle, queen-side', () => {
        const board: Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [WR,__,__,WP,__,__,BP,BR],
        /*  B  */ [WN,WP,__,__,__,__,BP,__],
        /*  C  */ [WB,WP,__,__,__,BN,BP,__],
        /*  D  */ [WQ,WP,WB,__,BP,__,__,__],
        /*  E  */ [__,__,__,WP,BP,__,__,BK],
        /*  F  */ [WR,WP,WN,__,__,BQ,BP,BB],
        /*  G  */ [WK,WP,__,BB,__,__,BP,BN],
        /*  H  */ [__,WP,__,__,__,__,BP,BR],
        ]; 

        const boardAnnotations = { ...noPreclusions, ...kingPositions(board) };
    
        const foundLegalMoves = kingMoves(board, COORDS.E8, boardAnnotations);

        expect(foundLegalMoves).toContain('C8')
    });  
})