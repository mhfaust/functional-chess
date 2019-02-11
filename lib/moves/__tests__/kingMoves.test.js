System.register(["constants/position", "board-utils/pieces-shorthand", "moves/index", "position-utils/index"], function (exports_1, context_1) {
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
    var position_1, pieces_shorthand_1, index_1, index_2, noPreclusions, allPrecluded;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            noPreclusions = {
                whiteQueenSideCastlingPrecluded: false,
                whiteKingSideCastlingPrecluded: false,
                blackQueenSideCastlingPrecluded: false,
                blackKingSideCastlingPrecluded: false
            };
            allPrecluded = {
                whiteQueenSideCastlingPrecluded: true,
                whiteKingSideCastlingPrecluded: true,
                blackQueenSideCastlingPrecluded: true,
                blackKingSideCastlingPrecluded: true
            };
            describe('kingMoves', function () {
                it('Cannot move, initially', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BQ],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                    ];
                    var expectedLegalMoves = new Set([]);
                    var kingPositions = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "Black King")
                    };
                    var boardAnnotations = __assign({}, noPreclusions, kingPositions);
                    var foundLegalMoves = index_1.kingMoves(board, position_1.Position.E1, boardAnnotations);
                    expect(foundLegalMoves).toEqual(expectedLegalMoves);
                });
                it('King moves any diection, only one square', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var expectedLegalMoves = new Set([
                        "C6",
                        "C7",
                        "C8",
                        "D6",
                        "D8",
                        "E6",
                        "E7",
                        "E8",
                    ]);
                    var kingPositions = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "Black King")
                    };
                    var boardAnnotations = __assign({}, allPrecluded, kingPositions);
                    var foundLegalMoves = index_1.kingMoves(board, position_1.Position.D7, boardAnnotations);
                    expect(foundLegalMoves).toEqual(expectedLegalMoves);
                });
                it('Cannot put self in check', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var kingPositions = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "Black King")
                    };
                    var boardAnnotations = __assign({}, noPreclusions, kingPositions);
                    var foundLegalMoves = index_1.kingMoves(board, position_1.Position.E1, boardAnnotations);
                    expect(foundLegalMoves).toEqual(new Set([]));
                });
                it('White king can castle, king-side', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.WP, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.WN, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                    ];
                    var kingPositions = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "Black King")
                    };
                    var boardAnnotations = __assign({}, noPreclusions, kingPositions);
                    var foundLegalMoves = index_1.kingMoves(board, position_1.Position.E1, boardAnnotations);
                    expect(foundLegalMoves).toContain("G1");
                });
                it('White king cannot castle across check', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var kingPositions = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "Black King")
                    };
                    var boardAnnotations = __assign({}, noPreclusions, kingPositions);
                    var foundLegalMoves = index_1.kingMoves(board, position_1.Position.E1, boardAnnotations);
                    expect(foundLegalMoves).not.toContain("G1");
                });
                it('White king cannot castle into check', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var kingPositions = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "Black King")
                    };
                    var boardAnnotations = __assign({}, noPreclusions, kingPositions);
                    var foundLegalMoves = index_1.kingMoves(board, position_1.Position.E1, boardAnnotations);
                    expect(foundLegalMoves).not.toContain("G1");
                });
                it('Black king can castle, queen-side', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.WP, pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.WN, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BB, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                    ];
                    var kingPositions = {
                        whiteKingPosition: index_2.locatePiece(board, "White King"),
                        blackKingPosition: index_2.locatePiece(board, "Black King")
                    };
                    var boardAnnotations = __assign({}, noPreclusions, kingPositions);
                    var foundLegalMoves = index_1.kingMoves(board, position_1.Position.E8, boardAnnotations);
                    expect(foundLegalMoves).toContain("C8");
                });
            });
        }
    };
});
//# sourceMappingURL=kingMoves.test.js.map