import pawnMoves from './pawnMoves';
import { positionName, locatePiece } from 'positions'
import COORDS from 'positions/coordinates'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { kingPositions } from 'board';
import { EnPassantAnnotations } from 'interfaces/EnPassantAnnotations';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';

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

const pawn1boardAnnotations: EnPassantAnnotations & KingAnnotations = {
    ...kingPositions(pawn1Board),
    pawnAt: null,
    passedPosition: null
}

describe('white pawn', () => {

    const testCases = [
        { pawnPosition: COORDS.A2, attackedPositions: [COORDS.A3, COORDS.A4] },
        { pawnPosition: COORDS.B2, attackedPositions: [COORDS.B3] },
        { pawnPosition: COORDS.C3, attackedPositions: [COORDS.C4, COORDS.B4] },
        { pawnPosition: COORDS.D4, attackedPositions: [COORDS.C5, COORDS.D5, COORDS.E5] },
        { pawnPosition: COORDS.E2, attackedPositions: [COORDS.E3, COORDS.E4] },
        { pawnPosition: COORDS.F2, attackedPositions: [COORDS.F3, COORDS.F4] },
        { pawnPosition: COORDS.G2, attackedPositions: [COORDS.G3, COORDS.G4] },
        { pawnPosition: COORDS.H4, attackedPositions: [COORDS.G5] },
    ] ;

    testCases.forEach((testCase) => {
        it(`provides all possible moves from pawn at ${positionName(testCase.pawnPosition)} on pawn1board: `, () => {

            const board =  pawn1Board;
            const foundMoves = pawnMoves(board, testCase.pawnPosition, pawn1boardAnnotations);
    
            expect(foundMoves).toEqual(new Set(testCase.attackedPositions.map(positionName)));
        })
    });

});
    
describe('black pawn', () => {

    const testCases = [
        { pawnPosition: COORDS.A7, attackedPositions: [COORDS.A6, COORDS.A5] },
        { pawnPosition: COORDS.B4, attackedPositions: [COORDS.B3, COORDS.C3] },
        { pawnPosition: COORDS.C5, attackedPositions: [COORDS.C4, COORDS.D4] },
        { pawnPosition: COORDS.D6, attackedPositions: [COORDS.D5] },
        { pawnPosition: COORDS.E5, attackedPositions: [COORDS.D4, COORDS.E4] },
        { pawnPosition: COORDS.F7, attackedPositions: [COORDS.F6, COORDS.F5] },
        { pawnPosition: COORDS.G5, attackedPositions: [COORDS.G4, COORDS.H4] },
        { pawnPosition: COORDS.H5, attackedPositions: [] },
    ] ;

    testCases.forEach((testCase) => {
        it(`provides all possible moves from pawn at ${positionName(testCase.pawnPosition)} on pawn1board: `, () => {

            const board =  pawn1Board;
            const foundMoves = pawnMoves(board, testCase.pawnPosition, pawn1boardAnnotations);
    
            expect(foundMoves).toEqual(new Set(testCase.attackedPositions.map(positionName)));
        })
    });

});

describe('en passant', () => {
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

        const annotations: KingAnnotations & EnPassantAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King'),
            pawnAt: 'E4',
            passedPosition: 'E3'
        }; 

        const foundMoves = pawnMoves(board, COORDS.D4, annotations);
        expect(foundMoves).toContain(positionName(COORDS.E3));
    });

    it('black pawn cannot attack a passant-looking square if passant info is null', () => {
        
        const annotations: EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King'),
            pawnAt: null,
            passedPosition: null
        };

        const foundMoves = pawnMoves(board, COORDS.D4, annotations);
        expect(foundMoves).not.toContain(positionName(COORDS.E3));
    });

    it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', () => {

        const annotations: EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King'),
            pawnAt: 'G5',
            passedPosition: 'G6'
        };


        const foundMoves = pawnMoves(board, COORDS.H5, annotations);
        expect(foundMoves).toContain(positionName(COORDS.G6));
    });

    it('white pawn cannot attack a passant-looking square if passant info is null', () => {
        
        const annotations: EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King'),
            pawnAt: null,
            passedPosition: null
        };

        const foundMoves = pawnMoves(board, COORDS.H5, annotations);
        expect(foundMoves).not.toContain(positionName(COORDS.G6));
    });
});

describe('check', () => {
    it('Only move is capture', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [WK,__,__,__,__,__,__,BK],
            /*  F  */ [__,WP,__,__,__,__,__,__],
            /*  G  */ [__,__,BB,__,__,__,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__],
        ];
        const expectedLegalMoves = new Set([
            'G3',
        ])

        const annotations: EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King'),
            pawnAt: null,
            passedPosition: null
        };
    
        const foundLegalMoves = pawnMoves(board, COORDS.F2, annotations);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });

    it('Pinned pawn cant move', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [WK,__,BP,__,__,__,__,BK],
            /*  F  */ [__,WP,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,__,__],
            /*  H  */ [__,__,__,BQ,__,__,__,__],
        ];
        const expectedLegalMoves = new Set([])

        const annotations: EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, 'Black King'),
            whiteKingPosition: locatePiece(board, 'White King'),
            pawnAt: null,
            passedPosition: null
        };
    
        const foundLegalMoves = pawnMoves(board, COORDS.F2, annotations);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });
})