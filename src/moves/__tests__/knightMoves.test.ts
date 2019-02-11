import knightMoves from 'moves/knightMoves';
import { initialBoard } from 'board-utils/index';
import { Position } from 'constants/position';
import { positionName, locatePiece } from 'position-utils/index'
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';

describe('knight', () => {

    const initialBoardAnnotations = { 
        blackKingPosition: locatePiece(initialBoard(), Piece.BlackKing),
        whiteKingPosition: locatePiece(initialBoard(), Piece.WhiteKing) 
    };

    
    it('can move from initial board white queen knight to A3 and C3 only', () => {
        
        const legalMoves = knightMoves(initialBoard(), Position.B1, initialBoardAnnotations);
        
        expect(legalMoves).toContain(PositionName.A3)
        expect(legalMoves).toContain(PositionName.C3)
        expect(legalMoves.size).toBe(2)
    });

    it('can move from initial board white king knight to A3 and C3 only', () => {
        const legalMoves = knightMoves(initialBoard(), Position.G1, initialBoardAnnotations);
        
        expect(legalMoves).toContain(PositionName.F3)
        expect(legalMoves).toContain(PositionName.H3)
        expect(legalMoves.size).toBe(2)
    });

    it('can move from initial board black queen knight to A3 and C3 only', () => {
        const legalMoves = knightMoves(initialBoard(), Position.B8, initialBoardAnnotations);
        
        expect(legalMoves).toContain(PositionName.A6)
        expect(legalMoves).toContain(PositionName.C6)
        expect(legalMoves.size).toBe(2)
    });

    it('can move from initial board black king knight to A3 and C3 only', () => {
        const legalMoves = knightMoves(initialBoard(), Position.G8, initialBoardAnnotations);
        
        expect(legalMoves).toContain('F6')
        expect(legalMoves).toContain('H6')
        expect(legalMoves.size).toBe(2)
    });

    it('Can capture enemy pieces', () => {
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
            PositionName.C6,
            PositionName.G4
        ]);

        const boardAnnotations = { 
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing) 
        };
    
        const foundLegalMoves = knightMoves(board, Position.E5, boardAnnotations);

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

        const boardAnnotations = { 
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing) 
        };

        const expectedLegalMoves = new Set([]);
    
        const foundLegalMoves = knightMoves(board, Position.E5, boardAnnotations);

        expect(foundLegalMoves).toEqual(expectedLegalMoves)
    });
})