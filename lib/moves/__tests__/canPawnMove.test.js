System.register(["moves/canPawnMove", "boards/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var canPawnMove_1, index_1, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canPawnMove_1_1) {
                canPawnMove_1 = canPawnMove_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('canPawnMove', function () {
                describe('white', function () {
                    it('can move one space forward when NOT blocked', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.C3, algebraic_1.Position.C4);
                        expect(answer).toBe(true);
                    });
                    it('cannot move one space forward when IS blocked', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.H4, algebraic_1.Position.H5);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.D4, algebraic_1.Position.E5);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.C3, algebraic_1.Position.B4);
                        expect(answer).toBe(true);
                    });
                    it('cannot move foward left to empty square', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.G2, algebraic_1.Position.F3);
                        expect(answer).toBe(false);
                    });
                    it('cannot move foward right to empty square', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.E2, algebraic_1.Position.F3);
                        expect(answer).toBe(false);
                    });
                    it('cannot move backward', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.G5, algebraic_1.Position.H5);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.H4, algebraic_1.Position.G4);
                        expect(answer).toBe(false);
                    });
                });
                describe('black', function () {
                    it('can move one space forward when NOT blocked', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.E5, algebraic_1.Position.E4);
                        expect(answer).toBe(true);
                    });
                    it('can move one space forward when IS blocked', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.D5, algebraic_1.Position.D4);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.E5, algebraic_1.Position.D4);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.G5, algebraic_1.Position.H4);
                        expect(answer).toBe(true);
                    });
                    it('cannot move backward', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.B4, algebraic_1.Position.B5);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var answer = canPawnMove_1["default"](index_1.pawn1Board(), algebraic_1.Position.H4, algebraic_1.Position.G4);
                        expect(answer).toBe(false);
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=canPawnMove.test.js.map