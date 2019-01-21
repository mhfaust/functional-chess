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
                    { pawnPosition: algebraic_1.Position.A2, attackedPositions: [algebraic_1.Position.A3, algebraic_1.Position.A4] },
                    { pawnPosition: algebraic_1.Position.B2, attackedPositions: [algebraic_1.Position.B3] },
                    { pawnPosition: algebraic_1.Position.C3, attackedPositions: [algebraic_1.Position.C4, algebraic_1.Position.B4] },
                    { pawnPosition: algebraic_1.Position.D4, attackedPositions: [algebraic_1.Position.C5, algebraic_1.Position.D5, algebraic_1.Position.E5] },
                    { pawnPosition: algebraic_1.Position.E2, attackedPositions: [algebraic_1.Position.E3, algebraic_1.Position.E4] },
                    { pawnPosition: algebraic_1.Position.F2, attackedPositions: [algebraic_1.Position.F3, algebraic_1.Position.F4] },
                    { pawnPosition: algebraic_1.Position.G2, attackedPositions: [algebraic_1.Position.G3, algebraic_1.Position.G4] },
                    { pawnPosition: algebraic_1.Position.H4, attackedPositions: [algebraic_1.Position.G5] },
                    { pawnPosition: algebraic_1.Position.A7, attackedPositions: [algebraic_1.Position.A6, algebraic_1.Position.A5] },
                    { pawnPosition: algebraic_1.Position.B4, attackedPositions: [algebraic_1.Position.B3, algebraic_1.Position.C3] },
                    { pawnPosition: algebraic_1.Position.C5, attackedPositions: [algebraic_1.Position.C4, algebraic_1.Position.D4] },
                    { pawnPosition: algebraic_1.Position.D6, attackedPositions: [algebraic_1.Position.D5] },
                    { pawnPosition: algebraic_1.Position.E5, attackedPositions: [algebraic_1.Position.D4, algebraic_1.Position.E4] },
                    { pawnPosition: algebraic_1.Position.F7, attackedPositions: [algebraic_1.Position.F6, algebraic_1.Position.F5] },
                    { pawnPosition: algebraic_1.Position.G5, attackedPositions: [algebraic_1.Position.G4, algebraic_1.Position.H4] },
                    { pawnPosition: algebraic_1.Position.H5, attackedPositions: [] },
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