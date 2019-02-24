System.register(["moves/canPawnMove", "positions/pieces-shorthand", "constants/position", "positions/index"], function (exports_1, context_1) {
    "use strict";
    var canPawnMove_1, pieces_shorthand_1, position_1, index_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canPawnMove_1_1) {
                canPawnMove_1 = canPawnMove_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            describe('canPawnMove', function () {
                var board = [
                    [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                    [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                    [pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB],
                    [pieces_shorthand_1.WQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                    [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                    [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                    [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                    [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                ];
                describe('white', function () {
                    it('can move one space forward when NOT blocked', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.C3, position_1.Position.C4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('cannot move one space forward when IS blocked', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.H4, position_1.Position.H5, annotations);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.D4, position_1.Position.E5, annotations);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.C3, position_1.Position.B4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('cannot move foward left to empty square', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.G2, position_1.Position.F3, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move foward right to empty square', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.E2, position_1.Position.F3, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move backward', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.G5, position_1.Position.H5, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.H4, position_1.Position.G4, annotations);
                        expect(answer).toBe(false);
                    });
                });
                describe('black', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                    ];
                    it('can move one space forward when NOT blocked', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.E5, position_1.Position.E4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('can move one space forward when IS blocked', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.D5, position_1.Position.D4, annotations);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.E5, position_1.Position.D4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.G5, position_1.Position.H4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('cannot move backward', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.B4, position_1.Position.B5, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.H4, position_1.Position.G4, annotations);
                        expect(answer).toBe(false);
                    });
                });
                describe('en-passant rule', function () {
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
                    it('black pawn can attack a square passed by a white pawn moving from rank 2 to 4', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: position_1.Position.E3,
                            pawnAt: position_1.Position.E4
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, annotations);
                        expect(answer).toBe(true);
                    });
                    it('black pawn cannot attack a passant-looking square if passant info is null', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answerNullPassantInfo = canPawnMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, annotations);
                        expect(answerNullPassantInfo).toBe(false);
                    });
                    it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: position_1.Position.G6,
                            pawnAt: position_1.Position.G5
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.H5, position_1.Position.G6, annotations);
                        expect(answer).toBe(true);
                    });
                    it('white pawn cannot attack a passant-looking square if passant info is null', function () {
                        var annotations = {
                            whiteKingPosition: index_1.locatePiece(board, "White King"),
                            blackKingPosition: index_1.locatePiece(board, "Black King"),
                            passedPosition: null,
                            pawnAt: null
                        };
                        var answerNullPassantInfo = canPawnMove_1["default"](board, position_1.Position.H5, position_1.Position.G6, annotations);
                        expect(answerNullPassantInfo).toBe(false);
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=canPawnMove.test.js.map