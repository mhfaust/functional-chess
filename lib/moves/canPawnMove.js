System.register(["position-utils/index", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var index_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function canPawnMove(board, fromPosition, toPosition, boardAnnotations) {
        var passedPosition = boardAnnotations.passedPosition;
        var player = index_1.playerAt(board, fromPosition);
        var forwardDirection = player === "White" ? 1 : -1;
        var stepsForward = (index_1.rank(toPosition) - index_1.rank(fromPosition)) * forwardDirection;
        var stepsSideways = index_1.file(toPosition) - index_1.file(fromPosition);
        if (stepsForward < 1 || stepsForward > 2 || Math.abs(stepsSideways) > 1) {
            return false;
        }
        if (stepsSideways === 0) {
            if (index_1.isOccupied(board, toPosition)) {
                return false;
            }
            if (stepsForward === 2) {
                if (player === "Black" && index_1.rank(fromPosition) !== 6) {
                    return false;
                }
                if (player === "White" && index_1.rank(fromPosition) !== 2) {
                    return false;
                }
                if (index_1.isOccupied(board, [index_1.file(fromPosition), index_1.rank(fromPosition) + forwardDirection])) {
                    return false;
                }
            }
        }
        else {
            if (stepsForward !== 1) {
                return false;
            }
            if (index_1.isUnOccupied(board, toPosition) && (!passedPosition || !index_1.areSamePositions(toPosition, passedPosition))) {
                return false;
            }
            if (index_1.isOccupiedByPlayer(board, toPosition, player)) {
                return false;
            }
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
            exports_1("default", canPawnMove);
        }
    };
});
//# sourceMappingURL=canPawnMove.js.map