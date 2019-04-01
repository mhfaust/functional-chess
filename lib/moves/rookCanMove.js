System.register(["positions", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var positions_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function rookCanMove(board, fromPosition, toPosition, boardAnnotations) {
        if (!positions_1.isOnBoard(toPosition)) {
            return false;
        }
        if (positions_1.playerAt(board, toPosition) === positions_1.playerAt(board, fromPosition)) {
            return false;
        }
        var fileMove = positions_1.file(toPosition) - positions_1.file(fromPosition);
        var rankMove = positions_1.rank(toPosition) - positions_1.rank(fromPosition);
        if (!(fileMove ^ rankMove)) {
            return false;
        }
        var moveVector = [Math.sign(fileMove), Math.sign(rankMove)];
        var step = positions_1.displaceTo(fromPosition, moveVector);
        while (!positions_1.areSamePositions(step, toPosition)) {
            if (positions_1.isOccupied(board, step)) {
                return false;
            }
            step = positions_1.displaceTo(step, moveVector);
        }
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
            exports_1("default", rookCanMove);
        }
    };
});
//# sourceMappingURL=rookCanMove.js.map