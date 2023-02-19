import isCheckmate from './isCheckmate';
import { Position } from 'constants/position';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'positions/pieces-shorthand';
import { locatePiece } from 'positions';

describe('isCheckmate', () => {
   
    it('Not in check --> not in checkmate', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,WP,BP,BR],
/*  G  */ [__,__,__,__,__,BP,__,BK],
/*  H  */ [__,__,__,__,__,WQ,BP,__],
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.Black, annotations)).toBe(false)
    });

    it('is NOT in checkmate (king can move out of check)', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,BP,BR],
/*  G  */ [__,__,__,__,__,__,BP,BK],
/*  H  */ [__,__,__,__,__,__,WB,__],
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.Black, annotations)).toBe(false)
    });  

    it('is NOT in checkmate (king can take attacker)', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,BP,BR],
/*  G  */ [__,__,__,__,__,__,BP,BK],
/*  H  */ [__,__,__,__,__,__,WB,__],
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.Black, annotations)).toBe(false)
    });

    it('is in checkmate (1)', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,WP,BP,BR],
/*  G  */ [__,__,__,__,__,BP,WQ,BK],
/*  H  */ [__,__,__,__,__,__,BP,__],
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.Black, annotations)).toBe(true)
    });

    it('is in checkmate (2)', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,WB,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [WK,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,BP,BR],
/*  G  */ [__,__,__,__,__,__,BP,BK],
/*  H  */ [__,__,__,__,__,__,WQ,__],
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.Black, annotations)).toBe(true)
    });    

    it('is in checkmate (3)', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,BP,__,__],
/*  B  */ [__,__,WP,__,BP,__,__,__],
/*  C  */ [__,__,__,__,__,BP,__,__],
/*  D  */ [__,__,__,WP,BP,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [WR,__,__,__,__,__,__,__],
/*  G  */ [WK,BR,__,WP,__,BP,__,BK],
/*  H  */ [__,BR,__,WP,__,WQ,BP,__],
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.White, annotations)).toBe(true)
    });  
   
    it('is in checkmate (4) -- double check!', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [BQ,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,WP,BN,__,__,__,__,__],
/*  D  */ [WK,WP,__,BR,__,__,__,BK],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__], 
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.White, annotations)).toBe(true)
    });     
    
    it('is in checkmate (5)', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,BB,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,WP,__,__,__,__,__,__],
/*  D  */ [WK,WP,BN,__,__,__,__,BK],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,BQ,__,__,__], 
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.White, annotations)).toBe(true)
    }); 

    it('is NOT in checkmate (5 - knight removed)', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,BB,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,WP,__,__,__,__,__,__],
/*  D  */ [WK,WP,__,__,__,__,__,BK],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,__,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,BQ,__,__,__], 
        ];

        const annotations:KingAnnotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isCheckmate(board, Player.White, annotations)).toBe(false)
    });
})