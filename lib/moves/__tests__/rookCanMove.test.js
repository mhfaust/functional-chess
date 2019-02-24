System.register(["moves/rookCanMove", "constants/position", "positions/pieces-shorthand", "board-utils/index"], function (exports_1, context_1) {
    "use strict";
    var rookCanMove_1, position_1, pieces_shorthand_1, index_1, rook1Board;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rookCanMove_1_1) {
                rookCanMove_1 = rookCanMove_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            rook1Board = [
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
            ];
            describe('rookCanMove', function () {
                it('cannot move to its current position', function () {
                    expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E4, index_1.kingPositions(rook1Board))).toBe(false);
                });
                describe('along rank', function () {
                    it('cannot pass over opponent piece: (E4 -> E1)', function () {
                        expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E1, index_1.kingPositions(rook1Board))).toBe(false);
                    });
                    it('can capture: (E4 -> E2)', function () {
                        expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E2, index_1.kingPositions(rook1Board))).toBe(true);
                    });
                    it('can: (E4 -> E3)', function () {
                        expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E3, index_1.kingPositions(rook1Board))).toBe(true);
                    });
                    it('can: (E4 -> E5)', function () {
                        expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E5, index_1.kingPositions(rook1Board))).toBe(true);
                    });
                    it('can : (E4 -> E6)', function () {
                        expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E6, index_1.kingPositions(rook1Board))).toBe(true);
                    });
                    it('can move along rank  (E4 -> E7)', function () {
                        expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E7, index_1.kingPositions(rook1Board))).toBe(true);
                    });
                    it('cannot move onto own players piece', function () {
                        expect(rookCanMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E8, index_1.kingPositions(rook1Board))).toBe(false);
                    });
                });
                describe('along file', function () {
                });
            });
        }
    };
});
//# sourceMappingURL=rookCanMove.test.js.map