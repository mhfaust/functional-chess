System.register(["moves/knightMoves", "board-utils/index", "constants/position", "positions/pieces-shorthand", "board-utils/kingPositions"], function (exports_1, context_1) {
    "use strict";
    var knightMoves_1, index_1, position_1, pieces_shorthand_1, kingPositions_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (knightMoves_1_1) {
                knightMoves_1 = knightMoves_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (kingPositions_1_1) {
                kingPositions_1 = kingPositions_1_1;
            }
        ],
        execute: function () {
            describe('knight', function () {
                it('can move from initial board white queen knight to A3 and C3 only', function () {
                    var legalMoves = knightMoves_1["default"](index_1.initialBoard(), position_1.Position.B1, kingPositions_1["default"](index_1.initialBoard()));
                    expect(legalMoves).toContain("A3");
                    expect(legalMoves).toContain("C3");
                    expect(legalMoves.size).toBe(2);
                });
                it('can move from initial board white king knight to A3 and C3 only', function () {
                    var legalMoves = knightMoves_1["default"](index_1.initialBoard(), position_1.Position.G1, kingPositions_1["default"](index_1.initialBoard()));
                    expect(legalMoves).toContain("F3");
                    expect(legalMoves).toContain("H3");
                    expect(legalMoves.size).toBe(2);
                });
                it('can move from initial board black queen knight to A3 and C3 only', function () {
                    var legalMoves = knightMoves_1["default"](index_1.initialBoard(), position_1.Position.B8, kingPositions_1["default"](index_1.initialBoard()));
                    expect(legalMoves).toContain("A6");
                    expect(legalMoves).toContain("C6");
                    expect(legalMoves.size).toBe(2);
                });
                it('can move from initial board black king knight to A3 and C3 only', function () {
                    var legalMoves = knightMoves_1["default"](index_1.initialBoard(), position_1.Position.G8, kingPositions_1["default"](index_1.initialBoard()));
                    expect(legalMoves).toContain('F6');
                    expect(legalMoves).toContain('H6');
                    expect(legalMoves.size).toBe(2);
                });
                it('Can capture only enemy pieces', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var expectedLegalMoves = new Set([
                        "C6",
                        "G4"
                    ]);
                    var foundLegalMoves = knightMoves_1["default"](board, position_1.Position.E5, kingPositions_1["default"](board));
                    expect(foundLegalMoves).toEqual(expectedLegalMoves);
                });
                it('Pinned knight cant move', function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var expectedLegalMoves = new Set([]);
                    var foundLegalMoves = knightMoves_1["default"](board, position_1.Position.E5, kingPositions_1["default"](board));
                    expect(foundLegalMoves).toEqual(expectedLegalMoves);
                });
            });
        }
    };
});
//# sourceMappingURL=knightMoves.test.js.map