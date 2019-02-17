System.register(["position-utils/index", "constants/move-vectors", "check/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, move_vectors_1, index_2;
    var __moduleName = context_1 && context_1.id;
    function bishop(board, moveFrom, annotations) {
        var player = index_1.playerAt(board, moveFrom);
        var legalMoves = [];
        move_vectors_1.bishopVectors.forEach(function (vector) {
            var examinedPosition = index_1.displaceTo(moveFrom, vector);
            while (index_1.isOnBoard(examinedPosition) && index_1.isUnOccupied(board, examinedPosition)) {
                legalMoves.push(examinedPosition);
                examinedPosition = index_1.displaceTo(examinedPosition, vector);
            }
            if (index_1.isOnBoard(examinedPosition) && index_1.isOccupiedByPlayer(board, examinedPosition, index_1.otherPlayer(player))) {
                legalMoves.push(examinedPosition);
            }
        });
        return new Set(legalMoves
            .filter(function (moveTo) { return !index_2.movesIntoCheck(board, moveFrom, moveTo, annotations); })
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
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("default", bishop);
        }
    };
});
//# sourceMappingURL=bishopMoves.js.map