System.register(["position-utils/isOccupied", "boards/index", "constants/algebraic", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var isOccupied_1, index_1, algebraic_1, pieces_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (isOccupied_1_1) {
                isOccupied_1 = isOccupied_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.pieces.BK, BQ = pieces_1.pieces.BQ, BR = pieces_1.pieces.BR, BN = pieces_1.pieces.BN, BB = pieces_1.pieces.BB, BP = pieces_1.pieces.BP, WK = pieces_1.pieces.WK, WQ = pieces_1.pieces.WQ, WR = pieces_1.pieces.WR, WN = pieces_1.pieces.WN, WB = pieces_1.pieces.WB, WP = pieces_1.pieces.WP, Empty = pieces_1.pieces.Empty, __ = pieces_1.pieces.__;
            describe('isOccupied', function () {
                it('reports true for initially positioned rook', function () {
                    expect(isOccupied_1["default"](index_1.initialBoard(), algebraic_1.A1)).toBe(true);
                });
                it('reports false for empty square', function () {
                    expect(isOccupied_1["default"](index_1.initialBoard(), algebraic_1.A3)).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=isOccupied.test.js.map