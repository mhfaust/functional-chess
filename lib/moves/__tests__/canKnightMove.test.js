System.register(["moves/canKnightMove", "board/index", "constants/position", "positions/pieces-shorthand", "positions/index"], function (exports_1, context_1) {
    "use strict";
    var canKnightMove_1, index_1, position_1, pieces_shorthand_1, index_2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canKnightMove_1_1) {
                canKnightMove_1 = canKnightMove_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            describe('canKnightMove', function () {
                var initialAnnotations = {
                    whiteKingPosition: index_2.locatePiece(index_1.initialBoard(), "White King"),
                    blackKingPosition: index_2.locatePiece(index_1.initialBoard(), "Black King")
                };
                it('reports true attempting to move to empty square, 2 forward, 1 left.', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), position_1.Position.B1, position_1.Position.A3, initialAnnotations);
                    expect(answer).toBe(true);
                });
                it('reports true attempting to move to empty square, 2 forward, 1 right.', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), position_1.Position.B1, position_1.Position.C3, initialAnnotations);
                    expect(answer).toBe(true);
                });
                it('reports false attempting to move to square occupied by own players piece.', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), position_1.Position.B1, position_1.Position.C2, initialAnnotations);
                    expect(answer).toBe(false);
                });
                it('reports false attempting to move to mechanically disallowed square', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), position_1.Position.B1, position_1.Position.B4, initialAnnotations);
                    expect(answer).toBe(false);
                });
                it('reports false attempting to move off-board', function () {
                    var answer = canKnightMove_1["default"](index_1.initialBoard(), position_1.Position.B1, [-1, 1], initialAnnotations);
                    expect(answer).toBe(false);
                });
                it('cannot move pinned knight', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WN, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "White King")
                    };
                    var answer = canKnightMove_1["default"](board, position_1.Position.E4, position_1.Position.C3, annotations);
                    expect(answer).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=canKnightMove.test.js.map