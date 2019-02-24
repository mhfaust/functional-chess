System.register(["moves/canRookMove", "constants/position", "positions/pieces-shorthand", "positions/index"], function (exports_1, context_1) {
    "use strict";
    var canRookMove_1, position_1, pieces_shorthand_1, index_1, rook1Board, annotations;
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
            annotations = {
                whiteKingPosition: index_1.locatePiece(rook1Board, "White King"),
                blackKingPosition: index_1.locatePiece(rook1Board, "Black King")
            };
            describe('canRookMove', function () {
                it('cannot move to its current position', function () {
                    expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E4, annotations)).toBe(false);
                });
                describe('along rank', function () {
                    it('cannot pass over opponent piece: (E4 -> E1)', function () {
                        expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E1, annotations)).toBe(false);
                    });
                    it('can capture: (E4 -> E2)', function () {
                        expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E2, annotations)).toBe(true);
                    });
                    it('can: (E4 -> E3)', function () {
                        expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E3, annotations)).toBe(true);
                    });
                    it('can: (E4 -> E5)', function () {
                        expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E5, annotations)).toBe(true);
                    });
                    it('can : (E4 -> E6)', function () {
                        expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E6, annotations)).toBe(true);
                    });
                    it('can move along rank  (E4 -> E7)', function () {
                        expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E7, annotations)).toBe(true);
                    });
                    it('cannot move onto own players piece', function () {
                        expect(canRookMove_1["default"](rook1Board, position_1.Position.E4, position_1.Position.E8, annotations)).toBe(false);
                    });
                });
                describe('along file', function () {
                });
            });
        }
    };
});
//# sourceMappingURL=canRookMove.test.js.map