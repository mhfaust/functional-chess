import allPlayerPositions from 'positions/allPlayerPositions'
import { initialBoard } from 'board'
import { PiecePosition } from 'interfaces/PiecePosition';
import { PositionName } from 'enums/positionName';
import { Piece } from 'enums/piece';

describe('allPlayerPositions finds all white piecesonr initial board', () => {

    const results = allPlayerPositions(initialBoard(), Player.White);

    const foundWhitePieceAt = (piece: Piece, position: PositionName) =>{
        return results.some((result: PiecePosition) =>
            result.position === position &&
            result.piece === piece
        );
    }

    it('should find a White rook at A1 ', () => {
        expect(foundWhitePieceAt('WhiteRook', 'A1')).toBe(true);
    })
    it('should find a White knight at B1 ', () => {
        expect(foundWhitePieceAt('WhiteKnight', 'B1')).toBe(true);
    })
    it('should find a White bishop at C1 ', () => {
        expect(foundWhitePieceAt('WhiteBishop', 'C1')).toBe(true);
    })
    it('should find a White queen at D1 ', () => {
        expect(foundWhitePieceAt('WhiteQueen', 'D1')).toBe(true);
    })
    it('should find a White king at E1 ', () => {
        expect(foundWhitePieceAt('WhiteKing', 'E1')).toBe(true);
    });
    it('should find a White bishop at F1 ', () => {
        expect(foundWhitePieceAt('WhiteBishop', 'F1')).toBe(true);
    });
    it('should find a White knight at G1 ', () => {
        expect(foundWhitePieceAt('WhiteKnight', 'G1')).toBe(true);
    });
    it('should find a White rook at H1 ', () => {
        expect(foundWhitePieceAt('WhiteRook', 'H1')).toBe(true);
    });
    it('should find a White pawn at A2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'A2')).toBe(true);
    });
    it('should find a White pawn at B2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'B2')).toBe(true);
    });
    it('should find a White pawn at C2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'C2')).toBe(true);
    });
    it('should find a White pawn at D2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'D2')).toBe(true);
    });
    it('should find a White pawn at E2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'E2')).toBe(true);
    });
    it('should find a White pawn at F2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'F2')).toBe(true);
    });
    it('should find a White pawn at G2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'G2')).toBe(true);
    });
    it('should find a White pawn at H2 ', () => {
        expect(foundWhitePieceAt('WhitePawn', 'H2')).toBe(true);
    });
});

describe('allPlayerPositions finds all white piecesonr initial board', () => {

    const results = allPlayerPositions(initialBoard(), Player.Black);

    const foundBlackPieceAt = (piece: Piece, position: PositionName) =>{
        return results.some((result: PiecePosition) =>
            result.position === position &&
            result.piece === piece
        );
    }
    it('should find a Black rook at A8 ', () => {
        expect(foundBlackPieceAt('BlackRook', 'A8')).toBe(true);
    })
    it('should find a Black knight at B8 ', () => {
        expect(foundBlackPieceAt('BlackKnight', 'B8')).toBe(true);
    })
    it('should find a Black bishop at C8 ', () => {
        expect(foundBlackPieceAt('BlackBishop', 'C8')).toBe(true);
    })
    it('should find a Black queen at D8 ', () => {
        expect(foundBlackPieceAt('BlackQueen', 'D8')).toBe(true);
    })
    it('should find a Black king at E8 ', () => {
        expect(foundBlackPieceAt('BlackKing', 'E8')).toBe(true);
    });
    it('should find a Black bishop at F8 ', () => {
        expect(foundBlackPieceAt('BlackBishop', 'F8')).toBe(true);
    });
    it('should find a Black knight at G8 ', () => {
        expect(foundBlackPieceAt('BlackKnight', 'G8')).toBe(true);
    });
    it('should find a Black rook at H8 ', () => {
        expect(foundBlackPieceAt('BlackRook', 'H8')).toBe(true);
    });
    it('should find a Black pawn at A7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'A7')).toBe(true);
    });
    it('should find a Black pawn at B7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'B7')).toBe(true);
    });
    it('should find a Black pawn at C7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'C7')).toBe(true);
    });
    it('should find a Black pawn at D7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'D7')).toBe(true);
    });
    it('should find a Black pawn at E7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'E7')).toBe(true);
    });
    it('should find a Black pawn at F7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'F7')).toBe(true);
    });
    it('should find a Black pawn at G7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'G7')).toBe(true);
    });
    it('should find a Black pawn at H7 ', () => {
        expect(foundBlackPieceAt('BlackPawn', 'H7')).toBe(true);
    });
});