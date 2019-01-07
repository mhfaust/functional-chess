System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function canBishopMove(board, fromPosition, toPosition) {
        if (!index_1.isOnBoard(toPosition))
            return false;
        if (index_1.playerAt(board, toPosition) === index_1.playerAt(board, fromPosition))
            return false;
        var fileMove = index_1.file(toPosition) - index_1.file(fromPosition);
        var rankMove = index_1.rank(toPosition) - index_1.rank(fromPosition);
        if (!fileMove || !rankMove)
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
        return true;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", canBishopMove);
        }
    };
});
//# sourceMappingURL=canBishopMove.js.map