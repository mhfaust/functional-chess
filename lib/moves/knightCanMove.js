System.register(["positions", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var positions_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function knightCanMove(board, fromPosition, toPosition, boardAnnotations) {
        if (!positions_1.isOnBoard(toPosition))
            return false;
        if (positions_1.playerAt(board, toPosition) === positions_1.playerAt(board, fromPosition))
            return false;
        var rectangularAreaOfDisplacement = Math.abs((positions_1.file(fromPosition) - positions_1.file(toPosition)) *
            (positions_1.rank(fromPosition) - positions_1.rank(toPosition)));
        if (rectangularAreaOfDisplacement !== 2)
            return false;
        if (movesIntoCheck_1.default(board, fromPosition, toPosition, boardAnnotations)) {
            return false;
        }
        return true;
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (movesIntoCheck_1_1) {
                movesIntoCheck_1 = movesIntoCheck_1_1;
            }
        ],
        execute: function () {
            exports_1("default", knightCanMove);
        }
    };
});
//# sourceMappingURL=knightCanMove.js.map