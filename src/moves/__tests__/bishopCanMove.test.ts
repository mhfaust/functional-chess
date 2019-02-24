import bishopCanMove from 'moves/bishopCanMove'
import { Position } from 'constants/position';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import kingPositions from 'board-utils/kingPositions';
    
describe('bishopCanMove', () => {

    const bishop1Board : Board = [
        /*         1  2  3  4  5  6  7  8  */
        /*  A  */ [__,__,__,__,__,__,__,__],
        /*  B  */ [__,__,__,__,__,WP,__,__],
        /*  C  */ [__,__,__,__,__,__,__,__],
        /*  D  */ [__,__,__,WB,__,__,__,__],
        /*  E  */ [WK,__,__,__,__,__,__,__],
        /*  F  */ [__,__,__,__,__,__,__,__],
        /*  G  */ [__,__,__,__,__,__,BP,__],
        /*  H  */ [__,__,__,__,__,__,__,BR],
    ];

    it('can advance left', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.C5, kingPositions(bishop1Board));
        expect(answer).toBe(true);
    });

    it('can advance right', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.F6, kingPositions(bishop1Board));
        expect(answer).toBe(true);
    });

    it('can retreat left', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.A1, kingPositions(bishop1Board));
        expect(answer).toBe(true);
    });

    it('can retreat right', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.G1, kingPositions(bishop1Board));
        expect(answer).toBe(true);
    });

    it('cannot move unequal forward and right displacements', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.H6, kingPositions(bishop1Board));
        expect(answer).toBe(false);
    });

    it('canot move laterally', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.H4, kingPositions(bishop1Board));
        expect(answer).toBe(false);
    });

    it('canot advance forward', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.D8, kingPositions(bishop1Board));
        expect(answer).toBe(false);
    });

    it('cannot capture own piece', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.B6, kingPositions(bishop1Board));
        expect(answer).toBe(false);
    });

    it('can capture opponent piece', () => { 

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.G7, kingPositions(bishop1Board));
        expect(answer).toBe(true);
    });

    it('cannot move beyond a piece', () => {

        const answer = bishopCanMove(bishop1Board, Position.D4, Position.H8, kingPositions(bishop1Board));
        expect(answer).toBe(false);
    });

    it('Cannot put self in check', () => {

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
            
        expect(bishopCanMove(board, Position.D4, Position.E3, kingPositions(board))).toBe(false);  
        expect(bishopCanMove(board, Position.D4, Position.C5, kingPositions(board))).toBe(false);  
    });


    it('Can move along axis of potential check while blocking check', () => {
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


        expect(bishopCanMove(board, Position.D4, Position.C3, kingPositions(board))).toBe(true);  
        expect(bishopCanMove(board, Position.D4, Position.B2, kingPositions(board))).toBe(true);  
        expect(bishopCanMove(board, Position.D4, Position.E5, kingPositions(board))).toBe(true);  
        expect(bishopCanMove(board, Position.D4, Position.F6, kingPositions(board))).toBe(true);  
        expect(bishopCanMove(board, Position.D4, Position.G7, kingPositions(board))).toBe(true);  
    });
})