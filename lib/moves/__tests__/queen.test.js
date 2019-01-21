System.register(["../queen", "position-utils/index", "constants/algebraic", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var queen_1, index_1, algebraic_1, pieces_shorthand_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (queen_1_1) {
                queen_1 = queen_1_1;
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
            describe('queen', function () {
                it("provides all possible moves from queen on queen1board: ", function () {
                    var board = [
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WQ, pieces_shorthand_1.__, pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                        [pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__],
                    ];
                    var expectedattackedPositions = new Set([algebraic_1.C3, algebraic_1.C1, algebraic_1.D2, algebraic_1.E2, algebraic_1.F2, algebraic_1.B2, algebraic_1.A2, algebraic_1.D3, algebraic_1.E4, algebraic_1.F5, algebraic_1.D1, algebraic_1.B1, algebraic_1.B3, algebraic_1.A4].map(index_1.algebraicName));
                    var foundattackedPositions = queen_1["default"](board, algebraic_1.C2);
                    expect(foundattackedPositions).toEqual(expectedattackedPositions);
                });
            });
        }
    };
});
//# sourceMappingURL=queen.test.js.map