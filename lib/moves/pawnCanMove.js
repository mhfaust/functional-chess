System.register(["positions", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var positions_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function pawnCanMove(board, fromPosition, toPosition, boardAnnotations) {
        var passedPosition = boardAnnotations.passedPosition;
        var player = positions_1.playerAt(board, fromPosition);
        var forwardDirection = player === "White" ? 1 : -1;
        var stepsForward = (positions_1.rank(toPosition) - positions_1.rank(fromPosition)) * forwardDirection;
        var stepsSideways = positions_1.file(toPosition) - positions_1.file(fromPosition);
        if (stepsForward < 1 || stepsForward > 2 || Math.abs(stepsSideways) > 1) {
            return false;
        }
        if (stepsSideways === 0) {
            if (positions_1.isOccupied(board, toPosition)) {
                return false;
            }
            if (stepsForward === 2) {
                if (player === "Black" && positions_1.rank(fromPosition) !== 6) {
                    return false;
                }
                if (player === "White" && positions_1.rank(fromPosition) !== 2) {
                    return false;
                }
                if (positions_1.isOccupied(board, [positions_1.file(fromPosition), positions_1.rank(fromPosition) + forwardDirection])) {
                    return false;
                }
            }
        }
        else {
            if (stepsForward !== 1) {
                return false;
            }
            if (positions_1.isUnOccupied(board, toPosition) && (!passedPosition || !positions_1.areSamePositions(toPosition, passedPosition))) {
                return false;
            }
            if (positions_1.isOccupiedByPlayer(board, toPosition, player)) {
                return false;
            }
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
            exports_1("default", pawnCanMove);
        }
    };
});
//# sourceMappingURL=pawnCanMove.js.map