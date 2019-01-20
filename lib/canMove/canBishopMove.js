System.register(["position-utils/index", "moves/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2;
    var __moduleName = context_1 && context_1.id;
    function canBishopMove(board, fromPosition, toPosition) {
        if (!index_1.isOnBoard(toPosition))
            return false;
        var thisPlayer = index_1.playerAt(board, toPosition);
        if (thisPlayer === index_1.playerAt(board, fromPosition))
            return false;
        var fileMove = index_1.file(toPosition) - index_1.file(fromPosition);
        var rankMove = index_1.rank(toPosition) - index_1.rank(fromPosition);
        if (fileMove === 0 || rankMove === 0)
            return false;
        if (Math.abs(fileMove) !== Math.abs(rankMove))
            return false;
        var fileIncrement = Math.sign(fileMove);
        var rankIncrement = Math.sign(rankMove);
        var nextInterStep = function (position) { return [
            position[0] + fileIncrement,
            position[1] + rankIncrement
        ]; };
        var interStep = nextInterStep(fromPosition);
        while (!index_1.areSamePositions(interStep, toPosition)) {
            if (index_1.isOccupied(board, interStep))
                return false;
            interStep = nextInterStep(interStep);
        }
        var newBoard = index_2.nextBoard(board, fromPosition, toPosition);
        return true;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("default", canBishopMove);
        }
    };
});
//# sourceMappingURL=canBishopMove.js.map