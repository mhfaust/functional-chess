import knightMoves from 'moves/knightMoves';
import { initialBoard } from 'board';
import { Position } from 'constants/position';
import { positionName, locatePiece } from 'positions'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import kingPositions from 'board/kingPositions';

describe('knight', () => {

    it('can move from initial board white queen knight to A3 and C3 only', () => {
        
        const legalMoves = knightMoves(initialBoard(), Position.B1, kingPositions(initialBoard()));
        
        expect(legalMoves).toContain('A3')
        expect(legalMoves).toContain('C3')
        expect(legalMoves.size).toBe(2)
    });

    it('can move from initial board white king knight to A3 and C3 only', () => {
        const legalMoves = knightMoves(initialBoard(), Position.G1, kingPositions(initialBoard()));
        
        expect(legalMoves).toContain('F3')
        expect(legalMoves).toContain('H3')
        expect(legalMoves.size).toBe(2)
    });

    it('can move from initial board black queen knight to A3 and C3 only', () => {
        const legalMoves = knightMoves(initialBoard(), Position.B8, kingPositions(initialBoard()));
        
        expect(legalMoves).toContain('A6')
        expect(legalMoves).toContain('C6')
        expect(legalMoves.size).toBe(2)
    });

    it('can move from initial board black king knight to A3 and C3 only', () => {
        const legalMoves = knightMoves(initialBoard(), Position.G8, kingPositions(initialBoard()));
        
        expect(legalMoves).toContain('F6')
        expect(legalMoves).toContain('H6')
        expect(legalMoves.size).toBe(2)
    });

    it('Can capture only enemy pieces', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,BK],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,BP,__,WP,__,__],
            /*  D  */ [__,__,BP,__,__,__,BP,__],
            /*  E  */ [__,__,__,__,BK,__,__,__],
            /*  F  */ [__,__,BP,__,__,__,BP,__],
            /*  G  */ [__,__,__,WP,__,BP,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__],
            ];
        const expectedLegalMoves = new Set([
            'C6',
            'G4'
        ]);

        const foundLegalMoves = knightMoves(board, Position.E5, kingPositions(board));

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });

    it('Pinned knight cant move', () => {
        const board: Board = [
            /*         1  2  3  4  5  6  7  8  */
            /*  A  */ [__,__,__,__,__,__,__,__],
            /*  B  */ [__,__,__,__,__,__,__,__],
            /*  C  */ [__,__,__,__,__,WP,__,__],
            /*  D  */ [__,__,__,__,__,__,__,__],
            /*  E  */ [__,WR,__,__,BN,__,__,BK],
            /*  F  */ [__,__,__,__,__,__,__,__],
            /*  G  */ [__,__,__,WP,__,__,__,__],
            /*  H  */ [__,__,__,__,__,__,__,__],
            ];

        const expectedLegalMoves = new Set([]);
    
        const foundLegalMoves = knightMoves(board, Position.E5, kingPositions(board));

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });
})