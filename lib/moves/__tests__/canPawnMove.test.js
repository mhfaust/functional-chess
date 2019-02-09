System.register(["moves/canPawnMove", "board-utils/pieces-shorthand", "constants/position", "position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var canPawnMove_1, pieces_shorthand_1, position_1, index_1, locateBlackKing, locateWhiteKing, pawn1Board;
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
            locateBlackKing = function (board) { return index_1.locatePiece(board, "Black King"); };
            locateWhiteKing = function (board) { return index_1.locatePiece(board, "White King"); };
            pawn1Board = [
                [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                [pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB],
                [pieces_shorthand_1.WQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
            ];
            describe('canPawnMove', function () {
                describe('white', function () {
                    it('can move one space forward when NOT blocked', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.C3, position_1.Position.C4, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(true);
                    });
                    it('cannot move one space forward when IS blocked', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.H4, position_1.Position.H5, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.D4, position_1.Position.E5, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.C3, position_1.Position.B4, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(true);
                    });
                    it('cannot move foward left to empty square', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.G2, position_1.Position.F3, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(false);
                    });
                    it('cannot move foward right to empty square', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.E2, position_1.Position.F3, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(false);
                    });
                    it('cannot move backward', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.G5, position_1.Position.H5, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.H4, position_1.Position.G4, locateWhiteKing(pawn1Board), null);
                        expect(answer).toBe(false);
                    });
                });
                describe('black', function () {
                    it('can move one space forward when NOT blocked', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.E5, position_1.Position.E4, locateBlackKing(pawn1Board), null);
                        expect(answer).toBe(true);
                    });
                    it('can move one space forward when IS blocked', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.D5, position_1.Position.D4, locateBlackKing(pawn1Board), null);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.E5, position_1.Position.D4, locateBlackKing(pawn1Board), null);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.G5, position_1.Position.H4, locateBlackKing(pawn1Board), null);
                        expect(answer).toBe(true);
                    });
                    it('cannot move backward', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.B4, position_1.Position.B5, locateBlackKing(pawn1Board), null);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var answer = canPawnMove_1["default"](pawn1Board, position_1.Position.H4, position_1.Position.G4, locateBlackKing(pawn1Board), null);
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
                        var passantInfo = {
                            passedPosition: position_1.Position.E3,
                            pawnAt: position_1.Position.E4
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, locateBlackKing(board), passantInfo);
                        expect(answer).toBe(true);
                    });
                    it('black pawn cannot attack a passant-looking square if passant info is null', function () {
                        var answerNullPassantInfo = canPawnMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, locateBlackKing(board), null);
                        expect(answerNullPassantInfo).toBe(false);
                    });
                    it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', function () {
                        var passantInfo = {
                            passedPosition: position_1.Position.G6,
                            pawnAt: position_1.Position.G5
                        };
                        var answer = canPawnMove_1["default"](board, position_1.Position.H5, position_1.Position.G6, locateWhiteKing(board), passantInfo);
                        expect(answer).toBe(true);
                    });
                    it('white pawn cannot attack a passant-looking square if passant info is null', function () {
                        var answerNullPassantInfo = canPawnMove_1["default"](board, position_1.Position.H5, position_1.Position.G6, locateWhiteKing(board), null);
                        expect(answerNullPassantInfo).toBe(false);
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=canPawnMove.test.js.map