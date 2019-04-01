System.register(["positions"], function (exports_1, context_1) {
    "use strict";
    var positions_1;
    var __moduleName = context_1 && context_1.id;
    function displaceTo(currentPosition, vector) {
        return [
            positions_1.file(currentPosition) + positions_1.file(vector),
            positions_1.rank(currentPosition) + positions_1.rank(vector)
        ];
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            }
        ],
        execute: function () {
            ;
            exports_1("default", displaceTo);
        }
    };
});
//# sourceMappingURL=displaceTo.js.map