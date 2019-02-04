System.register(["moves/canBishopMove", "constants/position", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var canBishopMove_1, position_1, pieces_shorthand_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canBishopMove_1_1) {
                canBishopMove_1 = canBishopMove_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            }
        ],
        execute: function () {
            describe('canBishopMove', function () {
                var bishop1Board = function () { return [
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                ]; };
                it('can advance left', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.C5);
                    expect(answer).toBe(true);
                });
                it('can advance right', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.F6);
                    expect(answer).toBe(true);
                });
                it('can retreat left', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.A1);
                    expect(answer).toBe(true);
                });
                it('can retreat right', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.G1);
                    expect(answer).toBe(true);
                });
                it('cannot move unequal forward and right displacements', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.H6);
                    expect(answer).toBe(false);
                });
                it('canot move laterally', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.H4);
                    expect(answer).toBe(false);
                });
                it('canot advance forward', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.D8);
                    expect(answer).toBe(false);
                });
                it('cannot capture own piece', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.B6);
                    expect(answer).toBe(false);
                });
                it('can capture opponent piece', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.G7);
                    expect(answer).toBe(true);
                });
                it('cannot move beyond a piece', function () {
                    var answer = canBishopMove_1["default"](bishop1Board(), position_1.Position.D4, position_1.Position.H8);
                    expect(answer).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=canBishopMove.test.js.map