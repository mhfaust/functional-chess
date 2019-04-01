System.register(["positions"], function (exports_1, context_1) {
    "use strict";
    var positions_1, isOnBoard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            }
        ],
        execute: function () {
            isOnBoard = function (position) {
                return positions_1.file(position) > -1 &&
                    positions_1.file(position) < 8 &&
                    positions_1.rank(position) > -1 &&
                    positions_1.rank(position) < 8;
            };
            exports_1("default", isOnBoard);
        }
    };
});
//# sourceMappingURL=isOnBoard.js.map