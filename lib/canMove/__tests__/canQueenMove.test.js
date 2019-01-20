System.register(["constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, BP, WK, WQ, WR, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BP = pieces_1.Piece.BP, WK = pieces_1.Piece.WK, WQ = pieces_1.Piece.WQ, WR = pieces_1.Piece.WR, __ = pieces_1.Piece.__;
            describe('canQueenMove', function () {
                var queen1Board = [
                    [__, __, __, __, __, __, __, __],
                    [__, __, __, __, __, __, __, __],
                    [__, WQ, __, WK, __, __, BP, __],
                    [__, __, __, __, __, __, __, __],
                    [__, __, __, __, __, __, __, __],
                    [__, __, __, __, BP, __, __, __],
                    [__, WR, __, __, __, __, __, __],
                    [__, __, __, __, __, __, __, __],
                ];
                it('can move right one', function () {
                });
            });
        }
    };
});
//# sourceMappingURL=canQueenMove.test.js.map