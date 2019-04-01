System.register(["positions", "constants/move-vectors", "check"], function (exports_1, context_1) {
    "use strict";
    var positions_1, move_vectors_1, check_1;
    var __moduleName = context_1 && context_1.id;
    function bishop(board, moveFrom, annotations) {
        var player = positions_1.playerAt(board, moveFrom);
        var legalMoves = [];
        move_vectors_1.bishopVectors.forEach(function (vector) {
            var examinedPosition = positions_1.displaceTo(moveFrom, vector);
            while (positions_1.isOnBoard(examinedPosition) && positions_1.isUnOccupied(board, examinedPosition)) {
                legalMoves.push(examinedPosition);
                examinedPosition = positions_1.displaceTo(examinedPosition, vector);
            }
            if (positions_1.isOnBoard(examinedPosition) && positions_1.isOccupiedByPlayer(board, examinedPosition, positions_1.otherPlayer(player))) {
                legalMoves.push(examinedPosition);
            }
        });
        return new Set(legalMoves
            .filter(function (moveTo) { return !check_1.movesIntoCheck(board, moveFrom, moveTo, annotations); })
            .map(positions_1.positionName));
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            },
            function (check_1_1) {
                check_1 = check_1_1;
            }
        ],
        execute: function () {
            exports_1("default", bishop);
        }
    };
});
//# sourceMappingURL=bishopMoves.js.map