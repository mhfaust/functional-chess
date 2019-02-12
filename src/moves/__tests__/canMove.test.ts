import { locatePiece } from "position-utils/index";
import { Position } from "constants/position";
import { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP,__ } from 'board-utils/pieces-shorthand';
import canMove from "moves/canMove";

describe('canMove Bishop', () => {
    
    it('Can move bishop only along axis of potential check while blocking check', () => {
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

        const annotations = {
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
        }

        expect(canMove(board, Position.D4, Position.C3, annotations)).toBe(true);  
        expect(canMove(board, Position.D4, Position.B2, annotations)).toBe(true);  
        expect(canMove(board, Position.D4, Position.E5, annotations)).toBe(true);  
        expect(canMove(board, Position.D4, Position.F6, annotations)).toBe(true);  
        expect(canMove(board, Position.D4, Position.G7, annotations)).toBe(true);

        expect(canMove(board, Position.D4, Position.C5, annotations)).toBe(false);  
        expect(canMove(board, Position.D4, Position.B6, annotations)).toBe(false);  
        expect(canMove(board, Position.D4, Position.A7, annotations)).toBe(false);  
        expect(canMove(board, Position.D4, Position.E3, annotations)).toBe(false);  
        expect(canMove(board, Position.D4, Position.F2, annotations)).toBe(false);  
        expect(canMove(board, Position.D4, Position.G1, annotations)).toBe(false);  
    });
});


describe('canMove King', () => {

    
});


describe('canMove Knight', () => {

    
});


describe('canMove Pawn', () => {

    it('black pawn can attack a square passed by a white pawn moving from rank 2 to 4', () => {
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
        const annotations = {
            whiteKingPosition: locatePiece(board, Piece.WhiteKing),
            blackKingPosition: locatePiece(board, Piece.BlackKing),
            passedPosition:Position.E3,
            pawnAt:Position.E4
        }

        const answer = canMove(board, Position.D4, Position.E3, annotations);
        expect(answer).toBe(true);
    });
});


describe('canMove Queen', () => {

    
});


describe('canMove Rook', () => {

    
});