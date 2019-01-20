System.register(["../rook", "boards/index", "position-utils/index", "board-utils/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var rook_1, index_1, index_2, index_3, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rook_1_1) {
                rook_1 = rook_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('rook', function () {
                beforeAll(function () { return console.log(index_3.textRender(index_1.rook1Board())); });
                it("provides all possible moves from rook on rook1board: ", function () {
                    var board = index_1.rook1Board();
                    var expectedattackedPositions = new Set([algebraic_1.D4, algebraic_1.C4, algebraic_1.E2, algebraic_1.E3, algebraic_1.E5, algebraic_1.E6, algebraic_1.E7, algebraic_1.F4, algebraic_1.G4, algebraic_1.H4].map(index_2.algebraicName));
                    var foundattackedPositions = rook_1["default"](board, algebraic_1.E4);
                    expect(foundattackedPositions).toEqual(expectedattackedPositions);
                });
            });
        }
    };
});
//# sourceMappingURL=rook.test.js.map