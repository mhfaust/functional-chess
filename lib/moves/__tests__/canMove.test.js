System.register(["position-utils/index", "constants/position", "board-utils/pieces-shorthand", "moves/canMove"], function (exports_1, context_1) {
    "use strict";
    var index_1, position_1, pieces_shorthand_1, canMove_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (canMove_1_1) {
                canMove_1 = canMove_1_1;
            }
        ],
        execute: function () {
            describe('canMove Bishop', function () {
                it('Can move bishop only along axis of potential check while blocking check', function () {
                    var board = [
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                    ];
                    var annotations = {
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        whiteKingPosition: index_1.locatePiece(board, "White King")
                    };
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.C3, annotations)).toBe(true);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.B2, annotations)).toBe(true);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.E5, annotations)).toBe(true);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.F6, annotations)).toBe(true);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.G7, annotations)).toBe(true);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.C5, annotations)).toBe(false);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.B6, annotations)).toBe(false);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.A7, annotations)).toBe(false);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, annotations)).toBe(false);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.F2, annotations)).toBe(false);
                    expect(canMove_1["default"](board, position_1.Position.D4, position_1.Position.G1, annotations)).toBe(false);
                });
            });
            describe('canMove King', function () {
            });
            describe('canMove Knight', function () {
            });
            describe('canMove Pawn', function () {
                it('black pawn can attack a square passed by a white pawn moving from rank 2 to 4', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                    ];
                    var annotations = {
                        whiteKingPosition: index_1.locatePiece(board, "White King"),
                        blackKingPosition: index_1.locatePiece(board, "Black King"),
                        passedPosition: position_1.Position.E3,
                        pawnAt: position_1.Position.E4
                    };
                    var answer = canMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, annotations);
                    expect(answer).toBe(true);
                });
            });
            describe('canMove Queen', function () {
            });
            describe('canMove Rook', function () {
            });
        }
    };
});
//# sourceMappingURL=canMove.test.js.map