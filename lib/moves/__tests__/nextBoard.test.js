System.register(["../nextBoard", "constants/pieces", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var nextBoard_1, pieces_1, algebraic_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (nextBoard_1_1) {
                nextBoard_1 = nextBoard_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, BQ = pieces_1.Piece.BQ, BR = pieces_1.Piece.BR, BN = pieces_1.Piece.BN, BB = pieces_1.Piece.BB, BP = pieces_1.Piece.BP, WK = pieces_1.Piece.WK, WQ = pieces_1.Piece.WQ, WR = pieces_1.Piece.WR, WN = pieces_1.Piece.WN, WB = pieces_1.Piece.WB, WP = pieces_1.Piece.WP, Empty = pieces_1.Piece.Empty, __ = pieces_1.Piece.__;
            describe('nextBoard', function () {
                it('is in checkmate (1)', function () {
                    var boardBefore = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, WP, BP, BR],
                        [__, __, __, __, __, BP, BQ, BK],
                        [__, __, __, __, __, __, BP, __],
                    ];
                    var boardAfter = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, WP, BP, BR],
                        [__, __, __, __, __, BP, BQ, __],
                        [__, __, __, __, __, __, BP, BK],
                    ];
                    expect(nextBoard_1["default"](boardBefore, algebraic_1.Position.G8, algebraic_1.Position.H8)).toEqual(boardAfter);
                });
            });
        }
    };
});
//# sourceMappingURL=nextBoard.test.js.map