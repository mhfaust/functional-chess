System.register(["position-utils/index", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var index_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function rookCanMove(board, fromPosition, toPosition, boardAnnotations) {
        if (!index_1.isOnBoard(toPosition)) {
            return false;
        }
        if (index_1.playerAt(board, toPosition) === index_1.playerAt(board, fromPosition)) {
            return false;
        }
        var fileMove = index_1.file(toPosition) - index_1.file(fromPosition);
        var rankMove = index_1.rank(toPosition) - index_1.rank(fromPosition);
        if (!(fileMove ^ rankMove)) {
            return false;
        }
        var moveVector = [Math.sign(fileMove), Math.sign(rankMove)];
        var step = index_1.displaceTo(fromPosition, moveVector);
        while (!index_1.areSamePositions(step, toPosition)) {
            if (index_1.isOccupied(board, step)) {
                return false;
            }
            step = index_1.displaceTo(step, moveVector);
        }
        if (movesIntoCheck_1["default"](board, fromPosition, toPosition, boardAnnotations)) {
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
            exports_1("default", rookCanMove);
        }
    };
});
//# sourceMappingURL=rookCanMove.js.map