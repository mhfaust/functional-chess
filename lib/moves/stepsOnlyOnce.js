System.register([], function (exports_1, context_1) {
    "use strict";
    var oneSteppers, stepsOnlyOnce;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            oneSteppers = new Set([
                "Black King",
                "White King",
                "Black Knight",
                "White Knight",
                "Black Pawn",
                "White Pawn",
            ]);
            stepsOnlyOnce = function (piece) { return oneSteppers.has(piece); };
            exports_1("default", stepsOnlyOnce);
        }
    };
});
//# sourceMappingURL=stepsOnlyOnce.js.map