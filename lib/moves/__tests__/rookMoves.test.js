System.register(["../rookMoves", "position-utils/index", "constants/algebraic", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var rookMoves_1, index_1, algebraic_1, pieces_shorthand_1, rook1Board;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rookMoves_1_1) {
                rookMoves_1 = rookMoves_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
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
            describe('rook', function () {
                it("provides all possible moves from rook on rook1board: ", function () {
                    var board = rook1Board();
                    var expectedattackedPositions = new Set([
                        algebraic_1.Position.D4,
                        algebraic_1.Position.C4,
                        algebraic_1.Position.E2,
                        algebraic_1.Position.E3,
                        algebraic_1.Position.E5,
                        algebraic_1.Position.E6,
                        algebraic_1.Position.E7,
                        algebraic_1.Position.F4,
                        algebraic_1.Position.G4,
                        algebraic_1.Position.H4
                    ].map(index_1.algebraicName));
                    var foundattackedPositions = rookMoves_1["default"](board, algebraic_1.Position.E4);
                    expect(foundattackedPositions).toEqual(expectedattackedPositions);
                });
            });
        }
    };
});
//# sourceMappingURL=rookMoves.test.js.map