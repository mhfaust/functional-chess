System.register(["../generateLinesOfAttack", "constants/algebraic", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var generateLinesOfAttack_1, algebraic_1, pieces_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (generateLinesOfAttack_1_1) {
                generateLinesOfAttack_1 = generateLinesOfAttack_1_1;
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
            describe('generateLinesOfAttack', function () {
                it('finds the line from a bishop at C3 to E5', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, BB, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, WP, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                    ];
                    var linesOfAttack = generateLinesOfAttack_1["default"](board, pieces_1.Player.White, algebraic_1.Position.E5);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.D4, algebraic_1.Position.C3]);
                    expect(linesOfAttack.next().done).toBe(true);
                });
                it('does not produce a line from a that is not orthoganally aligned with defender', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, BR, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, WP, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __]
                    ];
                    var linesOfAttack = generateLinesOfAttack_1["default"](board, pieces_1.Player.White, algebraic_1.Position.E5);
                    var returned = linesOfAttack.next();
                    expect(returned.value).toBeNull();
                    expect(returned.done).toBe(true);
                });
                it('does not produce a line from a knight 2 steps away', function () {
                    var board = [
                        [__, __, BN, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, WP, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [BN, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                    ];
                    var linesOfAttack = generateLinesOfAttack_1["default"](board, pieces_1.Player.White, algebraic_1.Position.E5);
                    var returned = linesOfAttack.next();
                    expect(returned.value).toBeNull();
                    expect(returned.done).toBe(true);
                });
                it('Sees a king attack', function () {
                    var board = [
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, BK, __, __, __],
                        [__, __, __, __, WP, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                    ];
                    var linesOfAttack = generateLinesOfAttack_1["default"](board, pieces_1.Player.White, algebraic_1.Position.E5);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.D5]);
                    expect(linesOfAttack.next().done).toBe(true);
                });
                it('finds several lines of attack', function () {
                    var board = [
                        [__, __, WR, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, __, WB, __, __, __],
                        [__, WP, __, __, __, __, __, __],
                        [__, WK, BB, __, __, __, WQ, __],
                        [__, __, __, __, __, __, __, __],
                        [__, __, __, WN, __, __, __, __],
                    ];
                    var linesOfAttack = generateLinesOfAttack_1["default"](board, pieces_1.Player.Black, algebraic_1.Position.F3);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.E2]);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.F2]);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.H4]);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.E4, algebraic_1.Position.D5]);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.F4, algebraic_1.Position.F5, algebraic_1.Position.F6, algebraic_1.Position.F7]);
                    expect(linesOfAttack.next().value).toEqual([algebraic_1.Position.E3, algebraic_1.Position.D3, algebraic_1.Position.C3, algebraic_1.Position.B3, algebraic_1.Position.A3]);
                    expect(linesOfAttack.next().done).toBe(true);
                });
            });
        }
    };
});
//# sourceMappingURL=generateLinesOfAttack.test.js.map