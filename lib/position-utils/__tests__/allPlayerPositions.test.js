System.register(["../allPlayerPositions", "board/index"], function (exports_1, context_1) {
    "use strict";
    var allPlayerPositions_1, index_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (allPlayerPositions_1_1) {
                allPlayerPositions_1 = allPlayerPositions_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            describe('allPlayerPositions finds all white piecesonr initial board', function () {
                var results = allPlayerPositions_1["default"](index_1.initialBoard(), "White");
                var foundWhitePieceAt = function (piece, position) {
                    return results.some(function (result) {
                        return result.position === position &&
                            result.piece === piece;
                    });
                };
                it('should find a White rook at A1 ', function () {
                    expect(foundWhitePieceAt("White Rook", "A1")).toBe(true);
                });
                it('should find a White knight at B1 ', function () {
                    expect(foundWhitePieceAt("White Knight", "B1")).toBe(true);
                });
                it('should find a White bishop at C1 ', function () {
                    expect(foundWhitePieceAt("White Bishop", "C1")).toBe(true);
                });
                it('should find a White queen at D1 ', function () {
                    expect(foundWhitePieceAt("White Queen", "D1")).toBe(true);
                });
                it('should find a White king at E1 ', function () {
                    expect(foundWhitePieceAt("White King", "E1")).toBe(true);
                });
                it('should find a White bishop at F1 ', function () {
                    expect(foundWhitePieceAt("White Bishop", "F1")).toBe(true);
                });
                it('should find a White knight at G1 ', function () {
                    expect(foundWhitePieceAt("White Knight", "G1")).toBe(true);
                });
                it('should find a White rook at H1 ', function () {
                    expect(foundWhitePieceAt("White Rook", "H1")).toBe(true);
                });
                it('should find a White pawn at A2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "A2")).toBe(true);
                });
                it('should find a White pawn at B2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "B2")).toBe(true);
                });
                it('should find a White pawn at C2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "C2")).toBe(true);
                });
                it('should find a White pawn at D2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "D2")).toBe(true);
                });
                it('should find a White pawn at E2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "E2")).toBe(true);
                });
                it('should find a White pawn at F2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "F2")).toBe(true);
                });
                it('should find a White pawn at G2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "G2")).toBe(true);
                });
                it('should find a White pawn at H2 ', function () {
                    expect(foundWhitePieceAt("White Pawn", "H2")).toBe(true);
                });
            });
            describe('allPlayerPositions finds all white piecesonr initial board', function () {
                var results = allPlayerPositions_1["default"](index_1.initialBoard(), "Black");
                var foundBlackPieceAt = function (piece, position) {
                    return results.some(function (result) {
                        return result.position === position &&
                            result.piece === piece;
                    });
                };
                it('should find a Black rook at A8 ', function () {
                    expect(foundBlackPieceAt("Black Rook", "A8")).toBe(true);
                });
                it('should find a Black knight at B8 ', function () {
                    expect(foundBlackPieceAt("Black Knight", "B8")).toBe(true);
                });
                it('should find a Black bishop at C8 ', function () {
                    expect(foundBlackPieceAt("Black Bishop", "C8")).toBe(true);
                });
                it('should find a Black queen at D8 ', function () {
                    expect(foundBlackPieceAt("Black Queen", "D8")).toBe(true);
                });
                it('should find a Black king at E8 ', function () {
                    expect(foundBlackPieceAt("Black King", "E8")).toBe(true);
                });
                it('should find a Black bishop at F8 ', function () {
                    expect(foundBlackPieceAt("Black Bishop", "F8")).toBe(true);
                });
                it('should find a Black knight at G8 ', function () {
                    expect(foundBlackPieceAt("Black Knight", "G8")).toBe(true);
                });
                it('should find a Black rook at H8 ', function () {
                    expect(foundBlackPieceAt("Black Rook", "H8")).toBe(true);
                });
                it('should find a Black pawn at A7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "A7")).toBe(true);
                });
                it('should find a Black pawn at B7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "B7")).toBe(true);
                });
                it('should find a Black pawn at C7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "C7")).toBe(true);
                });
                it('should find a Black pawn at D7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "D7")).toBe(true);
                });
                it('should find a Black pawn at E7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "E7")).toBe(true);
                });
                it('should find a Black pawn at F7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "F7")).toBe(true);
                });
                it('should find a Black pawn at G7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "G7")).toBe(true);
                });
                it('should find a Black pawn at H7 ', function () {
                    expect(foundBlackPieceAt("Black Pawn", "H7")).toBe(true);
                });
            });
        }
    };
});
//# sourceMappingURL=allPlayerPositions.test.js.map