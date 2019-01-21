System.register(["position-utils/isOccupied", "boards/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var isOccupied_1, index_1, algebraic_1;
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
            }
        ],
        execute: function () {
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