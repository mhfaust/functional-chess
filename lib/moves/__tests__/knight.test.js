System.register(["moves/knightMoves", "boards/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var knightMoves_1, index_1, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (knightMoves_1_1) {
                knightMoves_1 = knightMoves_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('knight', function () {
                it('can move from initial board white queen knight to A3 and C3 only', function () {
                    var attackedPositions = knightMoves_1["default"](index_1.initialBoard(), algebraic_1.Position.B1);
                    expect(attackedPositions).toContain('A3');
                    expect(attackedPositions).toContain('C3');
                    expect(attackedPositions.size).toBe(2);
                });
                it('can move from initial board white king knight to A3 and C3 only', function () {
                    var attackedPositions = knightMoves_1["default"](index_1.initialBoard(), algebraic_1.Position.G1);
                    expect(attackedPositions).toContain('F3');
                    expect(attackedPositions).toContain('H3');
                    expect(attackedPositions.size).toBe(2);
                });
                it('can move from initial board black queen knight to A3 and C3 only', function () {
                    var attackedPositions = knightMoves_1["default"](index_1.initialBoard(), algebraic_1.Position.B8);
                    expect(attackedPositions).toContain('A6');
                    expect(attackedPositions).toContain('C6');
                    expect(attackedPositions.size).toBe(2);
                });
                it('can move from initial board black king knight to A3 and C3 only', function () {
                    var attackedPositions = knightMoves_1["default"](index_1.initialBoard(), algebraic_1.Position.G8);
                    expect(attackedPositions).toContain('F6');
                    expect(attackedPositions).toContain('H6');
                    expect(attackedPositions.size).toBe(2);
                });
            });
        }
    };
});
//# sourceMappingURL=knight.test.js.map