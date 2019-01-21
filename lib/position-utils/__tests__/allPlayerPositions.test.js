System.register(["../allPlayerPositions", "boards/index", "constants/algebraic", "../algebraicName", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var allPlayerPositions_1, index_1, algebraic_1, algebraicName_1, pieces_shorthand_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (allPlayerPositions_1_1) {
                allPlayerPositions_1 = allPlayerPositions_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            },
            function (algebraicName_1_1) {
                algebraicName_1 = algebraicName_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            }
        ],
        execute: function () {
            describe('allPlayerPositions', function () {
                var expectedWhitePositions = [
                    { position: algebraicName_1["default"](algebraic_1.Position.A1), piece: pieces_shorthand_1.WR },
                    { position: algebraicName_1["default"](algebraic_1.Position.B1), piece: pieces_shorthand_1.WN },
                    { position: algebraicName_1["default"](algebraic_1.Position.C1), piece: pieces_shorthand_1.WB },
                    { position: algebraicName_1["default"](algebraic_1.Position.D1), piece: pieces_shorthand_1.WQ },
                    { position: algebraicName_1["default"](algebraic_1.Position.E1), piece: pieces_shorthand_1.WK },
                    { position: algebraicName_1["default"](algebraic_1.Position.F1), piece: pieces_shorthand_1.WB },
                    { position: algebraicName_1["default"](algebraic_1.Position.G1), piece: pieces_shorthand_1.WN },
                    { position: algebraicName_1["default"](algebraic_1.Position.H1), piece: pieces_shorthand_1.WR },
                    { position: algebraicName_1["default"](algebraic_1.Position.A2), piece: pieces_shorthand_1.WP },
                    { position: algebraicName_1["default"](algebraic_1.Position.B2), piece: pieces_shorthand_1.WP },
                    { position: algebraicName_1["default"](algebraic_1.Position.C2), piece: pieces_shorthand_1.WP },
                    { position: algebraicName_1["default"](algebraic_1.Position.D2), piece: pieces_shorthand_1.WP },
                    { position: algebraicName_1["default"](algebraic_1.Position.E2), piece: pieces_shorthand_1.WP },
                    { position: algebraicName_1["default"](algebraic_1.Position.F2), piece: pieces_shorthand_1.WP },
                    { position: algebraicName_1["default"](algebraic_1.Position.G2), piece: pieces_shorthand_1.WP },
                    { position: algebraicName_1["default"](algebraic_1.Position.H2), piece: pieces_shorthand_1.WP },
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