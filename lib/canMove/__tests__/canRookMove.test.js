System.register(["canMove/canRookMove", "boards/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var canRookMove_1, index_1, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canRookMove_1_1) {
                canRookMove_1 = canRookMove_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('canRookMove', function () {
                it('cannot move to its current position', function () {
                    expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E4)).toBe(false);
                });
                describe('along rank', function () {
                    it('cannot pass over opponent piece: (E4 -> E1)', function () {
                        expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E1)).toBe(false);
                    });
                    it('can capture: (E4 -> E2)', function () {
                        expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E2)).toBe(true);
                    });
                    it('can: (E4 -> E3)', function () {
                        expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E3)).toBe(true);
                    });
                    it('can: (E4 -> E5)', function () {
                        expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E5)).toBe(true);
                    });
                    it('can : (E4 -> E6)', function () {
                        expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E6)).toBe(true);
                    });
                    it('can move along rank  (E4 -> E7)', function () {
                        expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E7)).toBe(true);
                    });
                    it('cannot move onto own players piece', function () {
                        expect(canRookMove_1["default"](index_1.rook1Board(), algebraic_1.E4, algebraic_1.E8)).toBe(false);
                    });
                });
                describe('along file', function () {
                });
            });
        }
    };
});
//# sourceMappingURL=canRookMove.test.js.map