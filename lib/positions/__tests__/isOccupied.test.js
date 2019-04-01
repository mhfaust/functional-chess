System.register(["positions/isOccupied", "board", "constants/position"], function (exports_1, context_1) {
    "use strict";
    var isOccupied_1, board_1, position_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (isOccupied_1_1) {
                isOccupied_1 = isOccupied_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            describe('isOccupied', function () {
                it('reports true for initially positioned rook', function () {
                    expect(isOccupied_1.default(board_1.initialBoard(), position_1.Position.A1)).toBe(true);
                });
                it('reports false for empty square', function () {
                    expect(isOccupied_1.default(board_1.initialBoard(), position_1.Position.A3)).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=isOccupied.test.js.map