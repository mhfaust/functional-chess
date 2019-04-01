System.register(["moves/knightCanMove", "board", "constants/position", "positions/pieces-shorthand", "board/kingPositions"], function (exports_1, context_1) {
    "use strict";
    var knightCanMove_1, board_1, position_1, pieces_shorthand_1, kingPositions_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (knightCanMove_1_1) {
                knightCanMove_1 = knightCanMove_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
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
            describe('knightCanMove', function () {
                var initialAnnotations = kingPositions_1.default(board_1.initialBoard());
                it('reports true attempting to move to empty square, 2 forward, 1 left.', function () {
                    var answer = knightCanMove_1.default(board_1.initialBoard(), position_1.Position.B1, position_1.Position.A3, initialAnnotations);
                    expect(answer).toBe(true);
                });
                it('reports true attempting to move to empty square, 2 forward, 1 right.', function () {
                    var answer = knightCanMove_1.default(board_1.initialBoard(), position_1.Position.B1, position_1.Position.C3, initialAnnotations);
                    expect(answer).toBe(true);
                });
                it('reports false attempting to move to square occupied by own players piece.', function () {
                    var answer = knightCanMove_1.default(board_1.initialBoard(), position_1.Position.B1, position_1.Position.C2, initialAnnotations);
                    expect(answer).toBe(false);
                });
                it('reports false attempting to move to mechanically disallowed square', function () {
                    var answer = knightCanMove_1.default(board_1.initialBoard(), position_1.Position.B1, position_1.Position.B4, initialAnnotations);
                    expect(answer).toBe(false);
                });
                it('reports false attempting to move off-board', function () {
                    var answer = knightCanMove_1.default(board_1.initialBoard(), position_1.Position.B1, [-1, 1], initialAnnotations);
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
                    var answer = knightCanMove_1.default(board, position_1.Position.E4, position_1.Position.C3, kingPositions_1.default(board));
                    expect(answer).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=knightCanMove.test.js.map