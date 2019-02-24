System.register(["positions/positionName"], function (exports_1, context_1) {
    "use strict";
    var positionName_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (positionName_1_1) {
                positionName_1 = positionName_1_1;
            }
        ],
        execute: function () {
            describe('positionName', function () {
                it('gets A1 for [0,0]', function () {
                    expect(positionName_1["default"]([0, 0])).toBe('A1');
                });
            });
        }
    };
});
//# sourceMappingURL=algebraicName.test.js.map