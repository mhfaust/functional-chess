System.register(["positions/locatePiece", "board", "constants/position"], function (exports_1, context_1) {
    "use strict";
    var locatePiece_1, board_1, position_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (locatePiece_1_1) {
                locatePiece_1 = locatePiece_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            describe('locatePiece', function () {
                it('locates White King in the initial board', function () {
                    expect(locatePiece_1.default(board_1.initialBoard(), "White King")).toEqual(position_1.Position.E1);
                });
                it('locates White Queen in the initial board', function () {
                    expect(locatePiece_1.default(board_1.initialBoard(), "White Queen")).toEqual(position_1.Position.D1);
                });
            });
        }
    };
});
//# sourceMappingURL=locatePiece.test.js.map