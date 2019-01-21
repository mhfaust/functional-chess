System.register(["moves/canKnightMove", "boards/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var canKnightMove_1, index_1, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canKnightMove_1_1) {
                canKnightMove_1 = canKnightMove_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('canKnightMove', function () {
                it('reports true attempting to move to empty square, 2 forward, 1 left.', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), algebraic_1.Position.B1, algebraic_1.Position.A3);
                    expect(answer).toBe(true);
                });
                it('reports true attempting to move to empty square, 2 forward, 1 right.', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), algebraic_1.Position.B1, algebraic_1.Position.C3);
                    expect(answer).toBe(true);
                });
                it('reports false attempting to move to square occupied by own players piece.', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), algebraic_1.Position.B1, algebraic_1.Position.C2);
                    expect(answer).toBe(false);
                });
                it('reports false attempting to move to mechanically disallowed square', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), algebraic_1.Position.B1, algebraic_1.Position.B4);
                    expect(answer).toBe(false);
                });
                it('reports false attempting to move off-board', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), algebraic_1.Position.B1, [-1, 1]);
                    expect(answer).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=canKnightMove.test.js.map