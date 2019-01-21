System.register(["position-utils/locatePiece", "board-utils/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var locatePiece_1, index_1, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (locatePiece_1_1) {
                locatePiece_1 = locatePiece_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('locatePiece', function () {
                it('locates White King in the initial board', function () {
                    expect(locatePiece_1["default"](index_1.initialBoard(), "White King")).toEqual(algebraic_1.Position.E1);
                });
                it('locates White Queen in the initial board', function () {
                    expect(locatePiece_1["default"](index_1.initialBoard(), "White Queen")).toEqual(algebraic_1.Position.D1);
                });
            });
        }
    };
});
//# sourceMappingURL=locatePiece.test.js.map