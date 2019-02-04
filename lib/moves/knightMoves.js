System.register(["position-utils/index", "check/index", "moves/index", "constants/move-vectors"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, index_3, move_vectors_1;
    var __moduleName = context_1 && context_1.id;
    function knight(board, moveFrom, kingPosition) {
        var player = index_1.playerAt(board, moveFrom);
        var doesntPutSelfInCheck = function (position) { return !index_2.isInCheck(index_3.nextBoard(board, moveFrom, position), player, kingPosition); };
        return new Set(move_vectors_1.knightVectors
            .map(function (vector) { return index_1.displaceTo(moveFrom, vector); })
            .filter(index_1.isOnBoard)
            .filter(function (targetPosition) { return index_1.isUnOccupiedByPlayer(board, targetPosition, player); })
            .filter(doesntPutSelfInCheck)
            .map(index_1.positionName));
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
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
//# sourceMappingURL=knightMoves.js.map