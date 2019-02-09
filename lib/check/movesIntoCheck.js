System.register(["moves/index", "check/isInCheck", "position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, isInCheck_1, index_2;
    var __moduleName = context_1 && context_1.id;
    function movesIntoCheck(board, moveFrom, moveTo, kingPosition) {
        var next = index_1.nextBoard(board, moveFrom, moveTo);
        return isInCheck_1["default"](next, index_2.playerAt(board, moveFrom), kingPosition);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (isInCheck_1_1) {
                isInCheck_1 = isInCheck_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("default", movesIntoCheck);
        }
    };
});
//# sourceMappingURL=movesIntoCheck.js.map