System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, isOnBoard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            isOnBoard = function (position) {
                return index_1.file(position) > -1 &&
                    index_1.file(position) < 8 &&
                    index_1.rank(position) > -1 &&
                    index_1.rank(position) < 8;
            };
            exports_1("default", isOnBoard);
        }
    };
});
//# sourceMappingURL=isOnBoard.js.map