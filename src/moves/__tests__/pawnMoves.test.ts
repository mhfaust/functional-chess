import pawnMoves from '../pawnMoves';
import { positionName, locatePiece } from 'positions/index'
import { Position }  from 'constants/position';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { kingPositions } from 'board/index';

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

const pawn1boardAnnotations:EnPassantAnnotations & KingAnnotations = {
    ...kingPositions(pawn1Board),
    pawnAt: null,
    passedPosition:null
}

describe('white pawn', () => {

    const testCases = [
        { pawnPosition: Position.A2, attackedPositions: [Position.A3, Position.A4] },
        { pawnPosition: Position.B2, attackedPositions: [Position.B3] },
        { pawnPosition: Position.C3, attackedPositions: [Position.C4, Position.B4] },
        { pawnPosition: Position.D4, attackedPositions: [Position.C5, Position.D5, Position.E5] },
        { pawnPosition: Position.E2, attackedPositions: [Position.E3, Position.E4] },
        { pawnPosition: Position.F2, attackedPositions: [Position.F3, Position.F4] },
        { pawnPosition: Position.G2, attackedPositions: [Position.G3, Position.G4] },
        { pawnPosition: Position.H4, attackedPositions: [Position.G5] },
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
        { pawnPosition: Position.A7, attackedPositions: [Position.A6, Position.A5] },
        { pawnPosition: Position.B4, attackedPositions: [Position.B3, Position.C3] },
        { pawnPosition: Position.C5, attackedPositions: [Position.C4, Position.D4] },
        { pawnPosition: Position.D6, attackedPositions: [Position.D5] },
        { pawnPosition: Position.E5, attackedPositions: [Position.D4, Position.E4] },
        { pawnPosition: Position.F7, attackedPositions: [Position.F6, Position.F5] },
        { pawnPosition: Position.G5, attackedPositions: [Position.G4, Position.H4] },
        { pawnPosition: Position.H5, attackedPositions: [] },
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

        const annotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            pawnAt: Position.E4,
            passedPosition:Position.E3
        }; 

        const foundMoves = pawnMoves(board, Position.D4, annotations);
        expect(foundMoves).toContain(positionName(Position.E3));
    });

    it('black pawn cannot attack a passant-looking square if passant info is null', () => {
        
        const annotations:EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            pawnAt: null,
            passedPosition:null
        };

        const foundMoves = pawnMoves(board, Position.D4, annotations);
        expect(foundMoves).not.toContain(positionName(Position.E3));
    });

    it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', () => {

        const annotations:EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            pawnAt: Position.G5,
            passedPosition:Position.G6
        };


        const foundMoves = pawnMoves(board, Position.H5, annotations);
        expect(foundMoves).toContain(positionName(Position.G6));
    });

    it('white pawn cannot attack a passant-looking square if passant info is null', () => {
        
        const annotations:EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            pawnAt: null,
            passedPosition:null
        };

        const foundMoves = pawnMoves(board, Position.H5, annotations);
        expect(foundMoves).not.toContain(positionName(Position.G6));
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
            /*  E  */ [WK,__,__,__,__,__,__,__],
            /*  F  */ [__,WP,__,__,__,__,__,__],
            /*  G  */ [__,__,BB,__,__,__,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__],
        ];
        const expectedLegalMoves = new Set([
            PositionName.G3,
        ])

        const annotations:EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            pawnAt: null,
            passedPosition:null
        };
    
        const foundLegalMoves = pawnMoves(board, Position.F2, annotations);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });

    it('Pinned pawn cant move', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,__,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [WK,__,BP,__,__,__,__,__],
            /*  F  */ [__,WP,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,__,__],
            /*  H  */ [__,__,__,BQ,__,__,__,__],
        ];
        const expectedLegalMoves = new Set([])

        const annotations:EnPassantAnnotations & KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            pawnAt: null,
            passedPosition:null
        };
    
        const foundLegalMoves = pawnMoves(board, Position.F2, annotations);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });
})