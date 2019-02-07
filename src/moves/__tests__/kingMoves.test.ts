
import { initialBoard } from 'board-utils/index';
import { Position } from 'constants/position';
import { positionName } from 'position-utils/index'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';
import { kingMoves } from 'moves/index';

const noPreclusions:CastlingPreclusion = {
    kingSide:false,
    queenSide:false
}
const noCastling:CastlingPreclusion = {
    kingSide:true,
    queenSide:true
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
    
        const foundLegalMoves = kingMoves(board, Position.E1, noPreclusions);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
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
        const expectedLegalMoves = new Set([
            PositionName.C6,
            PositionName.C7,
            PositionName.C8,
            PositionName.D6,
            PositionName.D8,
            PositionName.E6,
            PositionName.E7,
            PositionName.E8,
        ]);
    
        const foundLegalMoves = kingMoves(board, Position.D7, noCastling);

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
    
        const foundLegalMoves = kingMoves(board, Position.E1, noPreclusions);

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
    
        const foundLegalMoves = kingMoves(board, Position.E1, noPreclusions);

        expect(foundLegalMoves).toContain(PositionName.G1)
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
    
        const foundLegalMoves = kingMoves(board, Position.E1, noPreclusions);

        expect(foundLegalMoves).not.toContain(PositionName.G1)
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
    
        const foundLegalMoves = kingMoves(board, Position.E1, noPreclusions);

        expect(foundLegalMoves).not.toContain(PositionName.G1)
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
    
        const foundLegalMoves = kingMoves(board, Position.E8, noPreclusions);

        expect(foundLegalMoves).toContain(PositionName.C8)
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
    
        const foundLegalMoves = kingMoves(board, Position.E1, noPreclusions);

        expect(foundLegalMoves).not.toContain(PositionName.G1)
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
    
        const foundLegalMoves = kingMoves(board, Position.E1, noPreclusions);

        expect(foundLegalMoves).not.toContain(PositionName.G1)
    });
})