System.register(["piece-specific-move-mechanics/canBishopMove", "boards/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var canBishopMove_1, index_1, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canBishopMove_1_1) {
                canBishopMove_1 = canBishopMove_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('canBishopMove', function () {
                it('can advance left', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.C5);
                    expect(answer).toBe(true);
                });
                it('can advance right', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.F6);
                    expect(answer).toBe(true);
                });
                it('can retreat left', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.A1);
                    expect(answer).toBe(true);
                });
                it('can retreat right', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.G1);
                    expect(answer).toBe(true);
                });
                it('cannot move unequal forward and right displacements', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.H6);
                    expect(answer).toBe(false);
                });
                it('canot move laterally', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.H4);
                    expect(answer).toBe(false);
                });
                it('canot advance forward', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.D8);
                    expect(answer).toBe(false);
                });
                it('cannot capture own piece', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.B6);
                    expect(answer).toBe(false);
                });
                it('can capture opponent piece', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.G7);
                    expect(answer).toBe(true);
                });
                it('cannot move beyond a piece', function () {
                    var answer = canBishopMove_1["default"](index_1.bishop1Board(), algebraic_1.D4, algebraic_1.H8);
                    expect(answer).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=canBishopMove.tests.js.map