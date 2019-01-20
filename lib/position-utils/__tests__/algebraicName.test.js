System.register(["position-utils/algebraicName"], function (exports_1, context_1) {
    "use strict";
    var algebraicName_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (algebraicName_1_1) {
                algebraicName_1 = algebraicName_1_1;
            }
        ],
        execute: function () {
            describe('algebraicName', function () {
                it('gets A1 for [0,0]', function () {
                    expect(algebraicName_1["default"]([0, 0])).toBe('A1');
                });
            });
        }
    };
});
//# sourceMappingURL=algebraicName.test.js.map