import isInCheck from 'check/isInCheck';
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';
import { locatePiece } from 'position-utils/index';

describe('isInCheck: true', () => {
    it('White King at F3 is IN check from Black Queen at E4', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,BQ,__,__,__,__],
/*  F  */ [__,__,WK,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations:HasKingPositions = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isInCheck(board, Player.White, annotations)).toBe(true)
    });

    it('White King at F3 is IN check from Black Queen at F4', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,__,__,__,__],
/*  F  */ [__,__,WK,BQ,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations:HasKingPositions = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isInCheck(board, Player.White, annotations)).toBe(true)
    });

    it('White King at F3 is NOT in check from Black Queen at E5', () => {
        const board: Board = [
/*         1  2  3  4  5  6  7  8  */
/*  A  */ [__,__,__,__,__,__,__,__],
/*  B  */ [__,__,__,__,__,__,__,__],
/*  C  */ [__,__,__,__,__,__,__,__],
/*  D  */ [__,__,__,__,__,__,__,__],
/*  E  */ [__,__,__,__,BQ,__,__,__],
/*  F  */ [__,__,WK,__,__,__,__,__],
/*  G  */ [__,__,__,__,__,__,__,__],
/*  H  */ [__,__,__,__,__,__,__,__],
        ];

        const annotations:HasKingPositions = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing)
        };

        expect(isInCheck(board, Player.White, annotations)).toBe(false)
    });    

});