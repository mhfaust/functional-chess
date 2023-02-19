import queenMoves from './queenMoves';
import { positionName, locatePiece } from 'positions'
import { Position } 
    from 'constants/position';
import { BQ,BP,WK,WQ,WR,BK,WP,__ } from 'positions/pieces-shorthand';
import { kingPositions } from 'board';
describe('queen', () => {

    it(`provides all possible moves from queen on queen1board: `, () => {

        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,WQ,__,WK,__,__,BP,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [WK,__,__,__,__,__,__,__],
            /*  F  */ [__,__,__,__,BP,__,__,__],
            /*  G  */ [__,WR,__,__,__,__,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__], 
            ];
        
        const expectedattackedPositions = new Set([
            Position.C3,
            Position.C1,
            Position.D2,
            Position.E2,
            Position.F2,
            Position.B2,
            Position.A2,
            Position.D3,
            Position.E4,
            Position.F5,
            Position.D1,
            Position.B1,
            Position.B3,
            Position.A4
        ].map(positionName))

        const foundattackedPositions = queenMoves(board, Position.C2, kingPositions(board));

        expect(foundattackedPositions).toEqual(expectedattackedPositions)
    });

    it('does not include moves putting self in check', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,WP,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [__,WR,__,BQ,__,__,__,BK],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,__,__,__,__,__],
            /*  H  */ [__,__,__,WP,__,__,__,__],
            ];
        const expectedLegalMoves = new Set([
            PositionName.E2,
            PositionName.E3,
            PositionName.E5,
            PositionName.E6,
            PositionName.E7,
        ]);

        const foundLegalMoves = queenMoves(board, Position.E4, kingPositions(board));

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });

    
})