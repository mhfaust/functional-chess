System.register(["../pawn", "boards/index", "position-utils/index", "board-utils/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var pawn_1, index_1, index_2, index_3, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pawn_1_1) {
                pawn_1 = pawn_1_1;
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
            describe('pawn', function () {
                beforeAll(function () { return console.log(index_3.textRender(index_1.pawn1Board())); });
                var testCases = [
                    { pawnPosition: algebraic_1.A2, attackedPositions: [algebraic_1.A3, algebraic_1.A4] },
                    { pawnPosition: algebraic_1.B2, attackedPositions: [algebraic_1.B3] },
                    { pawnPosition: algebraic_1.C3, attackedPositions: [algebraic_1.C4, algebraic_1.B4] },
                    { pawnPosition: algebraic_1.D4, attackedPositions: [algebraic_1.C5, algebraic_1.D5, algebraic_1.E5] },
                    { pawnPosition: algebraic_1.E2, attackedPositions: [algebraic_1.E3, algebraic_1.E4] },
                    { pawnPosition: algebraic_1.F2, attackedPositions: [algebraic_1.F3, algebraic_1.F4] },
                    { pawnPosition: algebraic_1.G2, attackedPositions: [algebraic_1.G3, algebraic_1.G4] },
                    { pawnPosition: algebraic_1.H4, attackedPositions: [algebraic_1.G5] },
                    { pawnPosition: algebraic_1.A7, attackedPositions: [algebraic_1.A6, algebraic_1.A5] },
                    { pawnPosition: algebraic_1.B4, attackedPositions: [algebraic_1.B3, algebraic_1.C3] },
                    { pawnPosition: algebraic_1.C5, attackedPositions: [algebraic_1.C4, algebraic_1.D4] },
                    { pawnPosition: algebraic_1.D6, attackedPositions: [algebraic_1.D5] },
                    { pawnPosition: algebraic_1.E5, attackedPositions: [algebraic_1.D4, algebraic_1.E4] },
                    { pawnPosition: algebraic_1.F7, attackedPositions: [algebraic_1.F6, algebraic_1.F5] },
                    { pawnPosition: algebraic_1.G5, attackedPositions: [algebraic_1.G4, algebraic_1.H4] },
                    { pawnPosition: algebraic_1.H5, attackedPositions: [] },
                ];
                testCases.forEach(function (testCase) {
                    it("provides all possible moves from pawn at " + index_2.algebraicName(testCase.pawnPosition) + " on pawn1board: ", function () {
                        var board = index_1.pawn1Board();
                        var foundattackedPositions = pawn_1["default"](board, testCase.pawnPosition);
                        expect(foundattackedPositions).toEqual(new Set(testCase.attackedPositions.map(index_2.algebraicName)));
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=pawn.test.js.map