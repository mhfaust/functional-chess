System.register(["board-utils/index", "check/index", "positions/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, index_3;
    var __moduleName = context_1 && context_1.id;
    function movesIntoCheck(board, moveFrom, moveTo, annotations) {
        var next = index_1.nextBoard(board, moveFrom, moveTo);
        var updatedAnnotations = index_1.updateKingPositions(board, moveFrom, moveTo, annotations);
        return index_2.isInCheck(next, index_3.playerAt(board, moveFrom), updatedAnnotations);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            exports_1("default", movesIntoCheck);
        }
    };
});
//# sourceMappingURL=movesIntoCheck.js.map