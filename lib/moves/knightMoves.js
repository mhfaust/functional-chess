System.register(["positions/index", "constants/move-vectors", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var index_1, move_vectors_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function knight(board, moveFrom, boardAnnotations) {
        var player = index_1.playerAt(board, moveFrom);
        return new Set(move_vectors_1.knightVectors
            .map(function (vector) { return index_1.displaceTo(moveFrom, vector); })
            .filter(index_1.isOnBoard)
            .filter(function (targetPosition) { return index_1.isUnOccupiedByPlayer(board, targetPosition, player); })
            .filter(function (position) { return !movesIntoCheck_1["default"](board, moveFrom, position, boardAnnotations); })
            .map(index_1.positionName));
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            },
            function (movesIntoCheck_1_1) {
                movesIntoCheck_1 = movesIntoCheck_1_1;
            }
        ],
        execute: function () {
            exports_1("default", knight);
        }
    };
});
//# sourceMappingURL=knightMoves.js.map