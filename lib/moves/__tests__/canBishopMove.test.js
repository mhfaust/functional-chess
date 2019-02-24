System.register(["moves/canBishopMove", "constants/position", "positions/pieces-shorthand", "positions/index"], function (exports_1, context_1) {
    "use strict";
    var canBishopMove_1, position_1, pieces_shorthand_1, index_1;
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
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            describe('canBishopMove', function () {
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
                var bishop1BoardAnnotations = {
                    blackKingPosition: index_1.locatePiece(bishop1Board, "Black King"),
                    whiteKingPosition: index_1.locatePiece(bishop1Board, "White King")
                };
                it('can advance left', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.C5, bishop1BoardAnnotations);
                    expect(answer).toBe(true);
                });
                it('can advance right', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.F6, bishop1BoardAnnotations);
                    expect(answer).toBe(true);
                });
                it('can retreat left', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.A1, bishop1BoardAnnotations);
                    expect(answer).toBe(true);
                });
                it('can retreat right', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.G1, bishop1BoardAnnotations);
                    expect(answer).toBe(true);
                });
                it('cannot move unequal forward and right displacements', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.H6, bishop1BoardAnnotations);
                    expect(answer).toBe(false);
                });
                it('canot move laterally', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.H4, bishop1BoardAnnotations);
                    expect(answer).toBe(false);
                });
                it('canot advance forward', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.D8, bishop1BoardAnnotations);
                    expect(answer).toBe(false);
                });
                it('cannot capture own piece', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.B6, bishop1BoardAnnotations);
                    expect(answer).toBe(false);
                });
                it('can capture opponent piece', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.G7, bishop1BoardAnnotations);
                    expect(answer).toBe(true);
                });
                it('cannot move beyond a piece', function () {
                    var answer = canBishopMove_1["default"](bishop1Board, position_1.Position.D4, position_1.Position.H8, bishop1BoardAnnotations);
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
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(canBishopMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, annotations)).toBe(false);
                    expect(canBishopMove_1["default"](board, position_1.Position.D4, position_1.Position.C5, annotations)).toBe(false);
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
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(canBishopMove_1["default"](board, position_1.Position.D4, position_1.Position.C3, annotations)).toBe(true);
                    expect(canBishopMove_1["default"](board, position_1.Position.D4, position_1.Position.B2, annotations)).toBe(true);
                    expect(canBishopMove_1["default"](board, position_1.Position.D4, position_1.Position.E5, annotations)).toBe(true);
                    expect(canBishopMove_1["default"](board, position_1.Position.D4, position_1.Position.F6, annotations)).toBe(true);
                    expect(canBishopMove_1["default"](board, position_1.Position.D4, position_1.Position.G7, annotations)).toBe(true);
                });
            });
        }
    };
});
//# sourceMappingURL=canBishopMove.test.js.map