System.register(["positions/pieceAt", "board", "constants/position"], function (exports_1, context_1) {
    "use strict";
    var pieceAt_1, board_1, position_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieceAt_1_1) {
                pieceAt_1 = pieceAt_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            describe('pieceAt', function () {
                it('gets the white queen knight from the initial board', function () {
                    expect(pieceAt_1.default(board_1.initialBoard(), position_1.Position.B1)).toBe("White Knight");
                });
                it('gets the black queen from the inital board', function () {
                    expect(pieceAt_1.default(board_1.initialBoard(), position_1.Position.D8)).toBe("Black Queen");
                });
                it('gets null for a square without a piece', function () {
                    expect(pieceAt_1.default(board_1.initialBoard(), position_1.Position.A3)).toBe("");
                });
            });
        }
    };
});
//# sourceMappingURL=pieceAt.test.js.map