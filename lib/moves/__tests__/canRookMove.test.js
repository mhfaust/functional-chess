System.register(["moves/canRookMove", "constants/position", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var canRookMove_1, position_1, pieces_shorthand_1, rook1Board;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (canRookMove_1_1) {
                canRookMove_1 = canRookMove_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            }
        ],
        execute: function () {
            rook1Board = function () { return [
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
            ]; };
            describe('canRookMove', function () {
                it('cannot move to its current position', function () {
                    expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E4, position_1.Position.E8)).toBe(false);
                });
                describe('along rank', function () {
                    it('cannot pass over opponent piece: (E4 -> E1)', function () {
                        expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E1, position_1.Position.E8)).toBe(false);
                    });
                    it('can capture: (E4 -> E2)', function () {
                        expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E2, position_1.Position.E8)).toBe(true);
                    });
                    it('can: (E4 -> E3)', function () {
                        expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E3, position_1.Position.E8)).toBe(true);
                    });
                    it('can: (E4 -> E5)', function () {
                        expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E5, position_1.Position.E8)).toBe(true);
                    });
                    it('can : (E4 -> E6)', function () {
                        expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E6, position_1.Position.E8)).toBe(true);
                    });
                    it('can move along rank  (E4 -> E7)', function () {
                        expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E7, position_1.Position.E8)).toBe(true);
                    });
                    it('cannot move onto own players piece', function () {
                        expect(canRookMove_1["default"](rook1Board(), position_1.Position.E4, position_1.Position.E8, position_1.Position.E8)).toBe(false);
                    });
                });
                describe('along file', function () {
                });
            });
        }
    };
});
//# sourceMappingURL=canRookMove.test.js.map