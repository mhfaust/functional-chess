System.register(["position-utils/index", "check/index", "moves/index", "constants/move-vectors", "constants/position"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, index_3, move_vectors_1, position_1;
    var __moduleName = context_1 && context_1.id;
    function king(board, kingPosition, castlingPreclusions) {
        var player = index_1.playerAt(board, kingPosition);
        var doesntPutSelfInCheck = function (position) { return !index_2.isInCheck(index_3.nextBoard(board, kingPosition, position), player, kingPosition); };
        var legalMoves = new Set(move_vectors_1.kingVectors
            .map(function (vector) { return index_1.displaceTo(kingPosition, vector); })
            .filter(index_1.isOnBoard)
            .filter(function (targetPosition) { return index_1.isUnOccupiedByPlayer(board, targetPosition, player); })
            .filter(doesntPutSelfInCheck)
            .map(index_1.positionName));
        if (index_1.playerAt(board, kingPosition) === "White") {
            if (!castlingPreclusions.kingSide
                && legalMoves.has("F1")
                && index_1.playerAt(board, position_1.Position.G1) === null
                && doesntPutSelfInCheck(position_1.Position.G1)) {
                legalMoves.add("G1");
            }
        }
        return legalMoves;
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
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            exports_1("default", king);
        }
    };
});
//# sourceMappingURL=kingMoves.js.map