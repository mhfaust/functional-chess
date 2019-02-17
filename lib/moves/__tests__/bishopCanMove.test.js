System.register(["moves/bishopCanMove", "constants/position", "board-utils/pieces-shorthand", "board-utils/kingPositions"], function (exports_1, context_1) {
    "use strict";
    var bishopCanMove_1, position_1, pieces_shorthand_1, kingPositions_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (bishopCanMove_1_1) {
                bishopCanMove_1 = bishopCanMove_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (kingPositions_1_1) {
                kingPositions_1 = kingPositions_1_1;
            }
        ],
        execute: function () {
            describe('bishopCanMove', function () {
                var bishop1Board = [
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                ];
                it('can advance left', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.C5, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(true);
                });
                it('can advance right', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.F6, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(true);
                });
                it('can retreat left', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.A1, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(true);
                });
                it('can retreat right', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.G1, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(true);
                });
                it('cannot move unequal forward and right displacements', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.H6, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(false);
                });
                it('canot move laterally', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.H4, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(false);
                });
                it('canot advance forward', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.D8, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(false);
                });
                it('cannot capture own piece', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.B6, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(false);
                });
                it('can capture opponent piece', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.G7, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(true);
                });
                it('cannot move beyond a piece', function () {
                    var answer = bishopCanMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.H8, kingPositions_1["default"](bishop1Board));
                    expect(answer).toBe(false);
                });
                it('Cannot put self in check', function () {
                    var board = [
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                    ];
                    expect(bishopCanMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, kingPositions_1["default"](board))).toBe(false);
                    expect(bishopCanMove_1["default"](board, position_1.Position.D4, position_1.Position.C5, kingPositions_1["default"](board))).toBe(false);
                });
                it('Can move along axis of potential check while blocking check', function () {
                    var board = [
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                    ];
                    expect(bishopCanMove_1["default"](board, position_1.Position.D4, position_1.Position.C3, kingPositions_1["default"](board))).toBe(true);
                    expect(bishopCanMove_1["default"](board, position_1.Position.D4, position_1.Position.B2, kingPositions_1["default"](board))).toBe(true);
                    expect(bishopCanMove_1["default"](board, position_1.Position.D4, position_1.Position.E5, kingPositions_1["default"](board))).toBe(true);
                    expect(bishopCanMove_1["default"](board, position_1.Position.D4, position_1.Position.F6, kingPositions_1["default"](board))).toBe(true);
                    expect(bishopCanMove_1["default"](board, position_1.Position.D4, position_1.Position.G7, kingPositions_1["default"](board))).toBe(true);
                });
            });
        }
    };
});
//# sourceMappingURL=bishopCanMove.test.js.map