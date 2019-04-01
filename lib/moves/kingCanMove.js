System.register(["positions", "check/movesIntoCheck", "constants/position"], function (exports_1, context_1) {
    "use strict";
    var positions_1, movesIntoCheck_1, position_1;
    var __moduleName = context_1 && context_1.id;
    function kingCanMove(board, fromPosition, toPosition, boardAnnotations) {
        var player = positions_1.playerAt(board, fromPosition);
        if (Math.abs(positions_1.rank(toPosition) - positions_1.rank(fromPosition)) < 2
            && Math.abs(positions_1.file(toPosition) - positions_1.file(fromPosition)) < 2
            && player !== positions_1.playerAt(board, toPosition)
            && !movesIntoCheck_1.default(board, fromPosition, toPosition, boardAnnotations)) {
            return true;
        }
        if (player === "White") {
            if (!boardAnnotations.whiteKingSideCastlingPrecluded
                && positions_1.areSamePositions(toPosition, position_1.Position.G1)
                && !movesIntoCheck_1.default(board, position_1.Position.E1, position_1.Position.F1, boardAnnotations)
                && !movesIntoCheck_1.default(board, position_1.Position.E1, position_1.Position.G1, boardAnnotations)) {
                return true;
            }
            if (!boardAnnotations.whiteQueenSideCastlingPrecluded
                && positions_1.areSamePositions(toPosition, position_1.Position.C1)
                && !movesIntoCheck_1.default(board, position_1.Position.E1, position_1.Position.D1, boardAnnotations)
                && !movesIntoCheck_1.default(board, position_1.Position.E1, position_1.Position.C1, boardAnnotations)) {
                return true;
            }
        }
        if (player === "Black") {
            if (!boardAnnotations.blackKingSideCastlingPrecluded
                && positions_1.areSamePositions(toPosition, position_1.Position.G8)
                && !movesIntoCheck_1.default(board, position_1.Position.E8, position_1.Position.F8, boardAnnotations)
                && !movesIntoCheck_1.default(board, position_1.Position.E8, position_1.Position.G8, boardAnnotations)) {
                return true;
            }
            if (!boardAnnotations.blackQueenSideCastlingPrecluded
                && positions_1.areSamePositions(toPosition, position_1.Position.C8)
                && !movesIntoCheck_1.default(board, position_1.Position.E8, position_1.Position.D8, boardAnnotations)
                && !movesIntoCheck_1.default(board, position_1.Position.E8, position_1.Position.C8, boardAnnotations)) {
                return true;
            }
        }
        return false;
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (movesIntoCheck_1_1) {
                movesIntoCheck_1 = movesIntoCheck_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            exports_1("default", kingCanMove);
        }
    };
});
//# sourceMappingURL=kingCanMove.js.map