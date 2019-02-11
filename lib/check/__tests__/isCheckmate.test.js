System.register(["../isCheckmate", "board-utils/pieces-shorthand", "position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var isCheckmate_1, pieces_shorthand_1, index_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (isCheckmate_1_1) {
                isCheckmate_1 = isCheckmate_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            describe('isCheckmate', function () {
                it('Not in check --> not in checkmate', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WQ, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "Black", annotations)).toBe(false);
                });
                it('is NOT in checkmate (king can move out of check)', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "Black", annotations)).toBe(false);
                });
                it('is NOT in checkmate (king can take attacker)', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "Black", annotations)).toBe(false);
                });
                it('is in checkmate (1)', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.WQ, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "Black", annotations)).toBe(true);
                });
                it('is in checkmate (2)', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WQ, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "Black", annotations)).toBe(true);
                });
                it('is in checkmate (3)', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.BR, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.BR, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.WQ, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "White", annotations)).toBe(true);
                });
                it('is in checkmate (4) -- double check!', function () {
                    var board = [
                        [pieces_shorthand_1.BQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BN, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "White", annotations)).toBe(true);
                });
                it('is in checkmate (5)', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.BN, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "White", annotations)).toBe(true);
                });
                it('is NOT in checkmate (5 - knight removed)', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(isCheckmate_1["default"](board, "White", annotations)).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=isCheckmate.test.js.map