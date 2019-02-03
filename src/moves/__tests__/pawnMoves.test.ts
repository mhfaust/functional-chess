import pawnMoves from '../pawnMoves';
import { algebraicName } from 'position-utils/index'
import { Position }  from 'constants/algebraic';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

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
describe('pawn', () => {

    // beforeAll(() => console.log(textRender(pawn1Board())))

    const testCases = [
        { pawnPosition: Position.A2, attackedPositions: [Position.A3, Position.A4] },
        { pawnPosition: Position.B2, attackedPositions: [Position.B3] },
        { pawnPosition: Position.C3, attackedPositions: [Position.C4, Position.B4] },
        { pawnPosition: Position.D4, attackedPositions: [Position.C5, Position.D5, Position.E5] },
        { pawnPosition: Position.E2, attackedPositions: [Position.E3, Position.E4] },
        { pawnPosition: Position.F2, attackedPositions: [Position.F3, Position.F4] },
        { pawnPosition: Position.G2, attackedPositions: [Position.G3, Position.G4] },
        { pawnPosition: Position.H4, attackedPositions: [Position.G5] },
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
        it(`provides all possible moves from pawn at ${algebraicName(testCase.pawnPosition)} on pawn1board: `, () => {

            const board =  pawn1Board();
            const foundMoves = pawnMoves(board, testCase.pawnPosition);
    
            expect(foundMoves).toEqual(new Set(testCase.attackedPositions.map(algebraicName)));
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

        const passantInfo:PassantInfo = {
            passedPosition:Position.E3,
            pawnAt:Position.E4
        }

        const foundMoves = pawnMoves(board, Position.D4, passantInfo);
        expect(foundMoves).toContain(algebraicName(Position.E3));
    });

    it('black pawn cannot attack a passant-looking square if passant info is null', () => {
        //this a "control-case" correlate to the previous test.
        const foundMoves = pawnMoves(board, Position.D4, null);
        expect(foundMoves).not.toContain(algebraicName(Position.E3));
    });

    it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', () => {

        const passantInfo:PassantInfo = {
            passedPosition:Position.G6,
            pawnAt:Position.G5
        }

        const foundMoves = pawnMoves(board, Position.H5, passantInfo);
        expect(foundMoves).toContain(algebraicName(Position.G6));
    });

    it('white pawn cannot attack a passant-looking square if passant info is null', () => {
        //this a "control-case" correlate to the previous test.
        const foundMoves = pawnMoves(board, Position.H5, null);
        expect(foundMoves).not.toContain(algebraicName(Position.G6));
    });
})