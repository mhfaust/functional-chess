System.register(["../bishop", "position-utils/index", "constants/algebraic", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var bishop_1, index_1, algebraic_1, pieces_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (bishop_1_1) {
                bishop_1 = bishop_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, BQ = pieces_1.Piece.BQ, BR = pieces_1.Piece.BR, BN = pieces_1.Piece.BN, BB = pieces_1.Piece.BB, BP = pieces_1.Piece.BP, WK = pieces_1.Piece.WK, WQ = pieces_1.Piece.WQ, WR = pieces_1.Piece.WR, WN = pieces_1.Piece.WN, WB = pieces_1.Piece.WB, WP = pieces_1.Piece.WP, Empty = pieces_1.Piece.Empty, __ = pieces_1.Piece.__;
            describe('bishop', function () {
                it("provides all possible moves from bishop ", function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, WP, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, WB, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, BP, __],
                        [__, __, __, __, __, __, __, BR],
                    ];
                    var expectedattackedPositions = new Set([
                        algebraic_1.Position.E5,
                        algebraic_1.Position.F6,
                        algebraic_1.Position.G7,
                        algebraic_1.Position.E3,
                        algebraic_1.Position.F2,
                        algebraic_1.Position.G1,
                        algebraic_1.Position.C3,
                        algebraic_1.Position.B2,
                        algebraic_1.Position.A1,
                        algebraic_1.Position.C5
                    ].map(index_1.algebraicName));
                    var foundattackedPositions = bishop_1["default"](board, algebraic_1.Position.D4);
                    expect(foundattackedPositions).toEqual(expectedattackedPositions);
                });
            });
        }
    };
});
//# sourceMappingURL=bishop.test.js.map