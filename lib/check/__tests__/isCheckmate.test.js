System.register(["../isCheckmate", "constants/pieces", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var isCheckmate_1, pieces_1, algebraic_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (isCheckmate_1_1) {
                isCheckmate_1 = isCheckmate_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.pieces.BK, BQ = pieces_1.pieces.BQ, BR = pieces_1.pieces.BR, BN = pieces_1.pieces.BN, BB = pieces_1.pieces.BB, BP = pieces_1.pieces.BP, WK = pieces_1.pieces.WK, WQ = pieces_1.pieces.WQ, WR = pieces_1.pieces.WR, WN = pieces_1.pieces.WN, WB = pieces_1.pieces.WB, WP = pieces_1.pieces.WP, Empty = pieces_1.pieces.Empty, __ = pieces_1.pieces.__;
            describe('isCheckmate', function () {
                it('Not in check --> not in checkmate', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [WK, __, __, __, __, __, __, __],
                        [__, __, __, __, __, WP, BP, BR],
                        [__, __, __, __, __, BP, __, BK],
                        [__, __, __, __, __, WQ, BP, __],
                    ];
                    expect(isCheckmate_1["default"](board, "Black", algebraic_1.Position.G8)).toBe(false);
                });
                it('is NOT in checkmate (king can move out of check)', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [WK, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, BP, BR],
                        [__, __, __, __, __, __, BP, BK],
                        [__, __, __, __, __, __, WB, __],
                    ];
                    expect(isCheckmate_1["default"](board, "Black", algebraic_1.Position.G8)).toBe(false);
                });
                it('is NOT in checkmate (king can take attacker)', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [WK, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, BP, BR],
                        [__, __, __, __, __, __, BP, BK],
                        [__, __, __, __, __, __, WB, __],
                    ];
                    expect(isCheckmate_1["default"](board, "Black", algebraic_1.Position.G8)).toBe(false);
                });
                it('is in checkmate (1)', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [WK, __, __, __, __, __, __, __],
                        [__, __, __, __, __, WP, BP, BR],
                        [__, __, __, __, __, BP, WQ, BK],
                        [__, __, __, __, __, __, BP, __],
                    ];
                    expect(isCheckmate_1["default"](board, "Black", algebraic_1.Position.G8)).toBe(true);
                });
                it('is in checkmate (2)', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, WB, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [WK, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, BP, BR],
                        [__, __, __, __, __, __, BP, BK],
                        [__, __, __, __, __, __, WQ, __],
                    ];
                    expect(isCheckmate_1["default"](board, "Black", algebraic_1.Position.G8)).toBe(true);
                });
                it('is in checkmate (3)', function () {
                    var board = [
                        [__, __, __, __, __, BP, __, __],
                        [__, __, WP, __, BP, __, __, __],
                        [__, __, __, __, __, BP, __, __],
                        [__, __, __, WP, BP, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [WR, __, __, __, __, __, __, __],
                        [WK, BR, __, WP, __, BP, __, BK],
                        [__, BR, __, WP, __, WQ, BP, __],
                    ];
                    expect(isCheckmate_1["default"](board, "White", algebraic_1.Position.G1)).toBe(true);
                });
                it('is in checkmate (4) -- double check!', function () {
                    var board = [
                        [BQ, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, WP, BN, __, __, __, __, __],
                        [WK, WP, __, BR, __, __, __, BK],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                    ];
                    expect(isCheckmate_1["default"](board, "White", algebraic_1.Position.D1)).toBe(true);
                });
                it('is in checkmate (5)', function () {
                    var board = [
                        [__, __, __, BB, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, WP, __, __, __, __, __, __],
                        [WK, WP, BN, __, __, __, __, BK],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, BQ, __, __, __],
                    ];
                    expect(isCheckmate_1["default"](board, "White", algebraic_1.Position.D1)).toBe(true);
                });
                it('is NOT in checkmate (5 - knight removed)', function () {
                    var board = [
                        [__, __, __, BB, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, WP, __, __, __, __, __, __],
                        [WK, WP, __, __, __, __, __, BK],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, BQ, __, __, __],
                    ];
                    expect(isCheckmate_1["default"](board, "White", algebraic_1.Position.D1)).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=isCheckmate.test.js.map