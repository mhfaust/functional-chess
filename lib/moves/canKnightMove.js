System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function canKnightMove(board, fromPosition, toPosition) {
        if (!index_1.isOnBoard(toPosition))
            return false;
        if (index_1.playerAt(board, toPosition) === index_1.playerAt(board, fromPosition))
            return false;
        var rectangularAreaOfDisplacement = Math.abs((index_1.file(fromPosition) - index_1.file(toPosition)) *
            (index_1.rank(fromPosition), -index_1.rank(toPosition)));
        if (rectangularAreaOfDisplacement !== 2)
            return false;
        return true;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", canKnightMove);
        }
    };
});
//# sourceMappingURL=canKnightMove.js.map