System.register(["position-utils/index", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var index_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function canKingMove(board, fromPosition, toPosition, boardAnnotations) {
        var player = index_1.playerAt(board, fromPosition);
        if (Math.abs(index_1.rank(toPosition) - index_1.rank(fromPosition)) > 1
            || Math.abs(index_1.file(toPosition) - index_1.rank(fromPosition)) > 1
            || player === index_1.playerAt(board, toPosition)
            || movesIntoCheck_1["default"](board, fromPosition, toPosition, boardAnnotations)) {
            return false;
        }
        return true;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (movesIntoCheck_1_1) {
                movesIntoCheck_1 = movesIntoCheck_1_1;
            }
        ],
        execute: function () {
            exports_1("default", canKingMove);
        }
    };
});
//# sourceMappingURL=canKingMove.js.map