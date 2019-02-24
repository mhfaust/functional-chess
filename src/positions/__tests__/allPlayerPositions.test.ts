import allPlayerPositions from '../allPlayerPositions'
import { initialBoard } from 'board/index'

describe('allPlayerPositions finds all white piecesonr initial board', () => {

    const results = allPlayerPositions(initialBoard(), Player.White);

    const foundWhitePieceAt = (piece: Piece, position: PositionName) =>{
        return results.some((result: PiecePosition) =>
            result.position === position &&
            result.piece === piece
        );
    }

    it('should find a White rook at A1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteRook, PositionName.A1)).toBe(true);
    })
    it('should find a White knight at B1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteKnight, PositionName.B1)).toBe(true);
    })
    it('should find a White bishop at C1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteBishop, PositionName.C1)).toBe(true);
    })
    it('should find a White queen at D1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteQueen, PositionName.D1)).toBe(true);
    })
    it('should find a White king at E1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteKing, PositionName.E1)).toBe(true);
    });
    it('should find a White bishop at F1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteBishop, PositionName.F1)).toBe(true);
    });
    it('should find a White knight at G1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteKnight, PositionName.G1)).toBe(true);
    });
    it('should find a White rook at H1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteRook, PositionName.H1)).toBe(true);
    });
    it('should find a White pawn at A2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.A2)).toBe(true);
    });
    it('should find a White pawn at B2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.B2)).toBe(true);
    });
    it('should find a White pawn at C2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.C2)).toBe(true);
    });
    it('should find a White pawn at D2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.D2)).toBe(true);
    });
    it('should find a White pawn at E2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.E2)).toBe(true);
    });
    it('should find a White pawn at F2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.F2)).toBe(true);
    });
    it('should find a White pawn at G2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.G2)).toBe(true);
    });
    it('should find a White pawn at H2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, PositionName.H2)).toBe(true);
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
        expect(foundBlackPieceAt(Piece.BlackRook, PositionName.A8)).toBe(true);
    })
    it('should find a Black knight at B8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackKnight, PositionName.B8)).toBe(true);
    })
    it('should find a Black bishop at C8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackBishop, PositionName.C8)).toBe(true);
    })
    it('should find a Black queen at D8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackQueen, PositionName.D8)).toBe(true);
    })
    it('should find a Black king at E8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackKing, PositionName.E8)).toBe(true);
    });
    it('should find a Black bishop at F8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackBishop, PositionName.F8)).toBe(true);
    });
    it('should find a Black knight at G8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackKnight, PositionName.G8)).toBe(true);
    });
    it('should find a Black rook at H8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackRook, PositionName.H8)).toBe(true);
    });
    it('should find a Black pawn at A7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.A7)).toBe(true);
    });
    it('should find a Black pawn at B7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.B7)).toBe(true);
    });
    it('should find a Black pawn at C7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.C7)).toBe(true);
    });
    it('should find a Black pawn at D7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.D7)).toBe(true);
    });
    it('should find a Black pawn at E7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.E7)).toBe(true);
    });
    it('should find a Black pawn at F7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.F7)).toBe(true);
    });
    it('should find a Black pawn at G7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.G7)).toBe(true);
    });
    it('should find a Black pawn at H7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, PositionName.H7)).toBe(true);
    });
});