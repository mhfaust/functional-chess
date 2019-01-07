System.register([], function (exports_1, context_1) {
    "use strict";
    var areSamePositions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            areSamePositions = function (posA, posB) { return posA[0] === posB[0] && posA[1] === posB[1]; };
            exports_1("default", areSamePositions);
        }
    };
});
//# sourceMappingURL=areSamePositions.js.map