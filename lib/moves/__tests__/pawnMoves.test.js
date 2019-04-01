System.register(["../pawnMoves", "positions", "constants/position", "positions/pieces-shorthand", "board"], function (exports_1, context_1) {
    "use strict";
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var pawnMoves_1, positions_1, position_1, pieces_shorthand_1, board_1, pawn1Board, pawn1boardAnnotations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pawnMoves_1_1) {
                pawnMoves_1 = pawnMoves_1_1;
            },
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            }
        ],
        execute: function () {
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
            pawn1boardAnnotations = __assign({}, board_1.kingPositions(pawn1Board), { pawnAt: null, passedPosition: null });
            describe('white pawn', function () {
                var testCases = [
                    { pawnPosition: position_1.Position.A2, attackedPositions: [position_1.Position.A3, position_1.Position.A4] },
                    { pawnPosition: position_1.Position.B2, attackedPositions: [position_1.Position.B3] },
                    { pawnPosition: position_1.Position.C3, attackedPositions: [position_1.Position.C4, position_1.Position.B4] },
                    { pawnPosition: position_1.Position.D4, attackedPositions: [position_1.Position.C5, position_1.Position.D5, position_1.Position.E5] },
                    { pawnPosition: position_1.Position.E2, attackedPositions: [position_1.Position.E3, position_1.Position.E4] },
                    { pawnPosition: position_1.Position.F2, attackedPositions: [position_1.Position.F3, position_1.Position.F4] },
                    { pawnPosition: position_1.Position.G2, attackedPositions: [position_1.Position.G3, position_1.Position.G4] },
                    { pawnPosition: position_1.Position.H4, attackedPositions: [position_1.Position.G5] },
                ];
                testCases.forEach(function (testCase) {
                    it("provides all possible moves from pawn at " + positions_1.positionName(testCase.pawnPosition) + " on pawn1board: ", function () {
                        var board = pawn1Board;
                        var foundMoves = pawnMoves_1.default(board, testCase.pawnPosition, pawn1boardAnnotations);
                        expect(foundMoves).toEqual(new Set(testCase.attackedPositions.map(positions_1.positionName)));
                    });
                });
            });
            describe('black pawn', function () {
                var testCases = [
                    { pawnPosition: position_1.Position.A7, attackedPositions: [position_1.Position.A6, position_1.Position.A5] },
                    { pawnPosition: position_1.Position.B4, attackedPositions: [position_1.Position.B3, position_1.Position.C3] },
                    { pawnPosition: position_1.Position.C5, attackedPositions: [position_1.Position.C4, position_1.Position.D4] },
                    { pawnPosition: position_1.Position.D6, attackedPositions: [position_1.Position.D5] },
                    { pawnPosition: position_1.Position.E5, attackedPositions: [position_1.Position.D4, position_1.Position.E4] },
                    { pawnPosition: position_1.Position.F7, attackedPositions: [position_1.Position.F6, position_1.Position.F5] },
                    { pawnPosition: position_1.Position.G5, attackedPositions: [position_1.Position.G4, position_1.Position.H4] },
                    { pawnPosition: position_1.Position.H5, attackedPositions: [] },
                ];
                testCases.forEach(function (testCase) {
                    it("provides all possible moves from pawn at " + positions_1.positionName(testCase.pawnPosition) + " on pawn1board: ", function () {
                        var board = pawn1Board;
                        var foundMoves = pawnMoves_1.default(board, testCase.pawnPosition, pawn1boardAnnotations);
                        expect(foundMoves).toEqual(new Set(testCase.attackedPositions.map(positions_1.positionName)));
                    });
                });
            });
            describe('en passant', function () {
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
                        blackKingPosition: positions_1.locatePiece(board, "Black King"),
                        whiteKingPosition: positions_1.locatePiece(board, "White King"),
                        pawnAt: position_1.Position.E4,
                        passedPosition: position_1.Position.E3
                    };
                    var foundMoves = pawnMoves_1.default(board, position_1.Position.D4, annotations);
                    expect(foundMoves).toContain(positions_1.positionName(position_1.Position.E3));
                });
                it('black pawn cannot attack a passant-looking square if passant info is null', function () {
                    var annotations = {
                        blackKingPosition: positions_1.locatePiece(board, "Black King"),
                        whiteKingPosition: positions_1.locatePiece(board, "White King"),
                        pawnAt: null,
                        passedPosition: null
                    };
                    var foundMoves = pawnMoves_1.default(board, position_1.Position.D4, annotations);
                    expect(foundMoves).not.toContain(positions_1.positionName(position_1.Position.E3));
                });
                it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', function () {
                    var annotations = {
                        blackKingPosition: positions_1.locatePiece(board, "Black King"),
                        whiteKingPosition: positions_1.locatePiece(board, "White King"),
                        pawnAt: position_1.Position.G5,
                        passedPosition: position_1.Position.G6
                    };
                    var foundMoves = pawnMoves_1.default(board, position_1.Position.H5, annotations);
                    expect(foundMoves).toContain(positions_1.positionName(position_1.Position.G6));
                });
                it('white pawn cannot attack a passant-looking square if passant info is null', function () {
                    var annotations = {
                        blackKingPosition: positions_1.locatePiece(board, "Black King"),
                        whiteKingPosition: positions_1.locatePiece(board, "White King"),
                        pawnAt: null,
                        passedPosition: null
                    };
                    var foundMoves = pawnMoves_1.default(board, position_1.Position.H5, annotations);
                    expect(foundMoves).not.toContain(positions_1.positionName(position_1.Position.G6));
                });
            });
            describe('check', function () {
                it('Only move is capture', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var expectedLegalMoves = new Set([
                        "g3",
                    ]);
                    var annotations = {
                        blackKingPosition: positions_1.locatePiece(board, "Black King"),
                        whiteKingPosition: positions_1.locatePiece(board, "White King"),
                        pawnAt: null,
                        passedPosition: null
                    };
                    var foundLegalMoves = pawnMoves_1.default(board, position_1.Position.F2, annotations);
                    expect(foundLegalMoves).toEqual(expectedLegalMoves);
                });
                it('Pinned pawn cant move', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var expectedLegalMoves = new Set([]);
                    var annotations = {
                        blackKingPosition: positions_1.locatePiece(board, "Black King"),
                        whiteKingPosition: positions_1.locatePiece(board, "White King"),
                        pawnAt: null,
                        passedPosition: null
                    };
                    var foundLegalMoves = pawnMoves_1.default(board, position_1.Position.F2, annotations);
                    expect(foundLegalMoves).toEqual(expectedLegalMoves);
                });
            });
        }
    };
});
//# sourceMappingURL=pawnMoves.test.js.map