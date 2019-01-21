System.register(["../allPlayerPositions", "boards/index", "constants/pieces", "constants/algebraic", "../algebraicName"], function (exports_1, context_1) {
    "use strict";
    var allPlayerPositions_1, index_1, pieces_1, algebraic_1, algebraicName_1, WK, WQ, WR, WN, WB, WP, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (allPlayerPositions_1_1) {
                allPlayerPositions_1 = allPlayerPositions_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            },
            function (algebraicName_1_1) {
                algebraicName_1 = algebraicName_1_1;
            }
        ],
        execute: function () {
            WK = pieces_1.pieces.WK, WQ = pieces_1.pieces.WQ, WR = pieces_1.pieces.WR, WN = pieces_1.pieces.WN, WB = pieces_1.pieces.WB, WP = pieces_1.pieces.WP, __ = pieces_1.pieces.__;
            describe('allPlayerPositions', function () {
                var expectedWhitePositions = [
                    { position: algebraicName_1["default"](algebraic_1.A1), piece: WR },
                    { position: algebraicName_1["default"](algebraic_1.B1), piece: WN },
                    { position: algebraicName_1["default"](algebraic_1.C1), piece: WB },
                    { position: algebraicName_1["default"](algebraic_1.D1), piece: WQ },
                    { position: algebraicName_1["default"](algebraic_1.E1), piece: WK },
                    { position: algebraicName_1["default"](algebraic_1.F1), piece: WB },
                    { position: algebraicName_1["default"](algebraic_1.G1), piece: WN },
                    { position: algebraicName_1["default"](algebraic_1.H1), piece: WR },
                    { position: algebraicName_1["default"](algebraic_1.A2), piece: WP },
                    { position: algebraicName_1["default"](algebraic_1.B2), piece: WP },
                    { position: algebraicName_1["default"](algebraic_1.C2), piece: WP },
                    { position: algebraicName_1["default"](algebraic_1.D2), piece: WP },
                    { position: algebraicName_1["default"](algebraic_1.E2), piece: WP },
                    { position: algebraicName_1["default"](algebraic_1.F2), piece: WP },
                    { position: algebraicName_1["default"](algebraic_1.G2), piece: WP },
                    { position: algebraicName_1["default"](algebraic_1.H2), piece: WP },
                ];
                var result = allPlayerPositions_1["default"](index_1.initialBoard(), "White");
                expectedWhitePositions.forEach(function (expected) {
                    it("should report a " + expected.piece + " at " + expected.position, function () {
                        var soughtPiece = function (r) {
                            return r.position === expected.position
                                && r.piece === expected.piece;
                        };
                        expect(result.some(soughtPiece)).toBe(true);
                    });
                });
                it('should find 16 pieces', function () {
                    expect(result.length).toBe(16);
                });
            });
        }
    };
});
//# sourceMappingURL=allPlayerPositions.test.js.map