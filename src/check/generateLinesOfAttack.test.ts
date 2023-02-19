import generateLinesOfAttack from './generateLinesOfAttack';
import { Position } from 'constants/position';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ }from 'positions/pieces-shorthand';
import { Board } from 'types/Board';

describe('generateLinesOfAttack', () => {
    it('finds the line from a bishop at C3 to E5', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,BB,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,WP,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];
        const linesOfAttack = generateLinesOfAttack(board, 'White', Position.E5);
        expect(linesOfAttack.next().value).toEqual([Position.D4, Position.C3]);
        expect(linesOfAttack.next().done).toBe(true);       
    });

    it('does not produce a line from a that is not orthoganally aligned with defender', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,BR,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,WP,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__]
        ];
        const linesOfAttack = generateLinesOfAttack(board, 'White', Position.E5)
        const returned = linesOfAttack.next();
        expect(returned.value).toBeNull();       
        expect(returned.done).toBe(true);       
    });

    it('does not produce a line from a knight 2 steps away', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,BN,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,WP,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [BN,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const linesOfAttack = generateLinesOfAttack(board, 'White', Position.E5)
        const returned = linesOfAttack.next();
        expect(returned.value).toBeNull();       
        expect(returned.done).toBe(true);       
    });

    it('Sees a king attack', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,BK,__,__,__],
/*  E  */ [__,__,__,__,WP,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];
        const linesOfAttack = generateLinesOfAttack(board, 'White', Position.E5)
        expect(linesOfAttack.next().value).toEqual([Position.D5]) ;       
        expect(linesOfAttack.next().done).toBe(true); 
    });

    it('finds several lines of attack', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,WR,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,WB,__,__,__],
/*  E  */ [__,WP,__,__,__,__,__,__],
/*  F  */ [__,WK,BB,__,__,__,WQ,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,WN,__,__,__,__], 
        ];
        const linesOfAttack = generateLinesOfAttack(board, 'Black', Position.F3)

        //order of seeking attack-patterns: pawn, king, knight, bishop, rook
        expect(linesOfAttack.next().value).toEqual([Position.E2])
        expect(linesOfAttack.next().value).toEqual([Position.F2])
        expect(linesOfAttack.next().value).toEqual([Position.H4])
        expect(linesOfAttack.next().value).toEqual([Position.E4, Position.D5])
        expect(linesOfAttack.next().value).toEqual([Position.F4, Position.F5, Position.F6, Position.F7])
        expect(linesOfAttack.next().value).toEqual([Position.E3, Position.D3, Position.C3, Position.B3, Position.A3])     
        expect(linesOfAttack.next().done).toBe(true)     
    });    
})