System.register(["position-utils/pieceAt", "boards/index", "constants/algebraic", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var pieceAt_1, index_1, algebraic_1, pieces_shorthand_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieceAt_1_1) {
                pieceAt_1 = pieceAt_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            }
        ],
        execute: function () {
            describe('pieceAt', function () {
                it('gets the white queen knight from the initial board', function () {
                    expect(pieceAt_1["default"](index_1.initialBoard(), algebraic_1.B1)).toBe(pieces_shorthand_1.WN);
                });
                it('gets the black queen from the inital board', function () {
                    expect(pieceAt_1["default"](index_1.initialBoard(), [3, 7])).toBe(pieces_shorthand_1.BQ);
                });
                it('gets null for a square without a piece', function () {
                    expect(pieceAt_1["default"](index_1.initialBoard(), [0, 2])).toBe(pieces_shorthand_1.__);
                });
            });
        }
    };
});
//# sourceMappingURL=pieceAt.test.js.map