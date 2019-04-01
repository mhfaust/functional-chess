System.register(["moves/queenCanMove", "positions/pieces-shorthand", "constants/position", "board"], function (exports_1, context_1) {
    "use strict";
    var queenCanMove_1, pieces_shorthand_1, position_1, board_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (queenCanMove_1_1) {
                queenCanMove_1 = queenCanMove_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            }
        ],
        execute: function () {
            describe('queenCanMove', function () {
                var queen1Board = [
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.WQ, pieces_shorthand_1.__, pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                ];
                it('can move right one', function () {
                    expect(queenCanMove_1.default(queen1Board, position_1.Position.C2, position_1.Position.C3, board_1.kingPositions(queen1Board))).toBe(true);
                });
                it('cannot take own piece', function () {
                    expect(queenCanMove_1.default(queen1Board, position_1.Position.C2, position_1.Position.C4, board_1.kingPositions(queen1Board))).toBe(false);
                });
                it('can capture opponent piece, diagonally', function () {
                    expect(queenCanMove_1.default(queen1Board, position_1.Position.C2, position_1.Position.F5, board_1.kingPositions(queen1Board))).toBe(true);
                });
            });
        }
    };
});
//# sourceMappingURL=queenCanMove.test.js.map