System.register(["position-utils/coordinates", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var coordinates_1, algebraic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (coordinates_1_1) {
                coordinates_1 = coordinates_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            describe('coordinates', function () {
                it('gets [0,0] for A1', function () {
                    expect(coordinates_1["default"]("A1")).toEqual(algebraic_1.Position.A1);
                });
                it('gets [7,7] for H8', function () {
                    expect(coordinates_1["default"]("H8")).toEqual(algebraic_1.Position.H8);
                });
            });
        }
    };
});
//# sourceMappingURL=coordinates.test.js.map