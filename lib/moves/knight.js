System.register(["position-utils/index", "constants/move-vectors"], function (exports_1, context_1) {
    "use strict";
    var index_1, move_vectors_1;
    var __moduleName = context_1 && context_1.id;
    function knight(board, initialPosition) {
        var player = index_1.playerAt(board, initialPosition);
        return new Set(move_vectors_1.knightVectors
            .map(function (vector) { return index_1.displaceTo(initialPosition, vector); })
            .filter(index_1.isOnBoard)
            .filter(function (targetPosition) { return index_1.isUnOccupiedByPlayer(board, targetPosition, player); })
            .map(index_1.algebraicName));
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            }
        ],
        execute: function () {
            exports_1("default", knight);
        }
    };
});
//# sourceMappingURL=knight.js.map