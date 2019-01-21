import allPlayerPositions from '../allPlayerPositions'
import { initialBoard } from 'boards/index'

describe('allPlayerPositions finds all white piecesonr initial board', () => {

    const results = allPlayerPositions(initialBoard(), Player.White);

    const foundWhitePieceAt = (piece: Piece, position: AlgebraicName) =>{
        return results.some((result: PiecePosition) =>
            result.position === position &&
            result.piece === piece
        );
    }

    it('should find a White rook at A1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteRook, AlgebraicName.A1)).toBe(true);
    })
    it('should find a White knight at B1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteKnight, AlgebraicName.B1)).toBe(true);
    })
    it('should find a White bishop at C1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteBishop, AlgebraicName.C1)).toBe(true);
    })
    it('should find a White queen at D1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteQueen, AlgebraicName.D1)).toBe(true);
    })
    it('should find a White king at E1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteKing, AlgebraicName.E1)).toBe(true);
    });
    it('should find a White bishop at F1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteBishop, AlgebraicName.F1)).toBe(true);
    });
    it('should find a White knight at G1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteKnight, AlgebraicName.G1)).toBe(true);
    });
    it('should find a White rook at H1 ', () => {
        expect(foundWhitePieceAt(Piece.WhiteRook, AlgebraicName.H1)).toBe(true);
    });
    it('should find a White pawn at A2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.A2)).toBe(true);
    });
    it('should find a White pawn at B2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.B2)).toBe(true);
    });
    it('should find a White pawn at C2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.C2)).toBe(true);
    });
    it('should find a White pawn at D2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.D2)).toBe(true);
    });
    it('should find a White pawn at E2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.E2)).toBe(true);
    });
    it('should find a White pawn at F2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.F2)).toBe(true);
    });
    it('should find a White pawn at G2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.G2)).toBe(true);
    });
    it('should find a White pawn at H2 ', () => {
        expect(foundWhitePieceAt(Piece.WhitePawn, AlgebraicName.H2)).toBe(true);
    });
});

describe('allPlayerPositions finds all white piecesonr initial board', () => {

    const results = allPlayerPositions(initialBoard(), Player.Black);

    const foundBlackPieceAt = (piece: Piece, position: AlgebraicName) =>{
        return results.some((result: PiecePosition) =>
            result.position === position &&
            result.piece === piece
        );
    }
    it('should find a Black rook at A8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackRook, AlgebraicName.A8)).toBe(true);
    })
    it('should find a Black knight at B8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackKnight, AlgebraicName.B8)).toBe(true);
    })
    it('should find a Black bishop at C8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackBishop, AlgebraicName.C8)).toBe(true);
    })
    it('should find a Black queen at D8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackQueen, AlgebraicName.D8)).toBe(true);
    })
    it('should find a Black king at E8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackKing, AlgebraicName.E8)).toBe(true);
    });
    it('should find a Black bishop at F8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackBishop, AlgebraicName.F8)).toBe(true);
    });
    it('should find a Black knight at G8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackKnight, AlgebraicName.G8)).toBe(true);
    });
    it('should find a Black rook at H8 ', () => {
        expect(foundBlackPieceAt(Piece.BlackRook, AlgebraicName.H8)).toBe(true);
    });
    it('should find a Black pawn at A7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.A7)).toBe(true);
    });
    it('should find a Black pawn at B7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.B7)).toBe(true);
    });
    it('should find a Black pawn at C7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.C7)).toBe(true);
    });
    it('should find a Black pawn at D7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.D7)).toBe(true);
    });
    it('should find a Black pawn at E7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.E7)).toBe(true);
    });
    it('should find a Black pawn at F7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.F7)).toBe(true);
    });
    it('should find a Black pawn at G7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.G7)).toBe(true);
    });
    it('should find a Black pawn at H7 ', () => {
        expect(foundBlackPieceAt(Piece.BlackPawn, AlgebraicName.H7)).toBe(true);
    });
});