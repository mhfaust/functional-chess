System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, kingMoveVectors;
    var __moduleName = context_1 && context_1.id;
    function king(board, initialPosition) {
        var player = index_1.playerAt(board, initialPosition);
        return new Set(kingMoveVectors
            .map(function (vector) { return index_1.displaceTo(initialPosition, vector); })
            .filter(index_1.isOnBoard)
            .filter(function (targetPosition) { return index_1.isUnOccupiedByPlayer(board, targetPosition, player); })
            .map(index_1.algebraicName));
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            kingMoveVectors = [
                [1, 1], [1, 0], [1, -1],
                [0, 1], , [0, -1],
                [-1, 1], [-1, 0], [-1, -1],
            ];
            exports_1("default", king);
        }
    };
});
//# sourceMappingURL=king.js.map