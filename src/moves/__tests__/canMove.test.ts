import { locatePiece } from "position-utils/index";
import { Position } from "constants/position";
import { WK, __, BB, WB, BR } from "board-utils/pieces-shorthand";
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