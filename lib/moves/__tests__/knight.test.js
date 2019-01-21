System.register(["moves/knight", "boards/index", "board-utils/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var knight_1, index_1, index_2, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (knight_1_1) {
                knight_1 = knight_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            beforeAll(function () { return console.log(index_2.textRender(index_1.initialBoard())); });
            describe('knight', function () {
                it('can move from initial board white queen knight to A3 and C3 only', function () {
                    var attackedPositions = knight_1["default"](index_1.initialBoard(), algebraic_1.Position.B1);
                    expect(attackedPositions).toContain('A3');
                    expect(attackedPositions).toContain('C3');
                    expect(attackedPositions.size).toBe(2);
                });
                it('can move from initial board white king knight to A3 and C3 only', function () {
                    var attackedPositions = knight_1["default"](index_1.initialBoard(), algebraic_1.Position.G1);
                    expect(attackedPositions).toContain('F3');
                    expect(attackedPositions).toContain('H3');
                    expect(attackedPositions.size).toBe(2);
                });
                it('can move from initial board black queen knight to A3 and C3 only', function () {
                    var attackedPositions = knight_1["default"](index_1.initialBoard(), algebraic_1.Position.B8);
                    expect(attackedPositions).toContain('A6');
                    expect(attackedPositions).toContain('C6');
                    expect(attackedPositions.size).toBe(2);
                });
                it('can move from initial board black king knight to A3 and C3 only', function () {
                    var attackedPositions = knight_1["default"](index_1.initialBoard(), algebraic_1.Position.G8);
                    expect(attackedPositions).toContain('F6');
                    expect(attackedPositions).toContain('H6');
                    expect(attackedPositions.size).toBe(2);
                });
            });
        }
    };
});
//# sourceMappingURL=knight.test.js.map