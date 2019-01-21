System.register(["../rookMoves", "boards/index", "position-utils/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var rookMoves_1, index_1, index_2, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rookMoves_1_1) {
                rookMoves_1 = rookMoves_1_1;
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
            describe('rook', function () {
                it("provides all possible moves from rook on rook1board: ", function () {
                    var board = index_1.rook1Board();
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
                    ].map(index_2.algebraicName));
                    var foundattackedPositions = rookMoves_1["default"](board, algebraic_1.Position.E4);
                    expect(foundattackedPositions).toEqual(expectedattackedPositions);
                });
            });
        }
    };
});
//# sourceMappingURL=rookMoves.test.js.map