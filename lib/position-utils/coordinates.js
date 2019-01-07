System.register(["constants/algebraic.ts"], function (exports_1, context_1) {
    "use strict";
    var values;
    var __moduleName = context_1 && context_1.id;
    function coordinates(algebraicName) {
        return values[algebraicName];
    }
    return {
        setters: [
            function (values_1) {
                values = values_1;
            }
        ],
        execute: function () {
            exports_1("default", coordinates);
        }
    };
});
//# sourceMappingURL=coordinates.js.map