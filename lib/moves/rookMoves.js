System.register(["position-utils/index", "check/index", "moves/index", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, index_3, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function rook(board, moveFrom, boardAnnotations) {
        var player = index_1.playerAt(board, moveFrom);
        var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        var legalMoves = [];
        var doesntPutSelfInCheck = function (position) { return !index_2.isInCheck(index_3.nextBoard(board, moveFrom, position), player, boardAnnotations); };
        directions.forEach(function (direction) {
            var examinedPosition = index_1.displaceTo(moveFrom, direction);
            while (index_1.isOnBoard(examinedPosition) && index_1.isUnOccupied(board, examinedPosition)) {
                legalMoves.push(examinedPosition);
                examinedPosition = index_1.displaceTo(examinedPosition, direction);
            }
            if (index_1.isOnBoard(examinedPosition) && index_1.isOccupiedByPlayer(board, examinedPosition, index_1.otherPlayer(player)))
                legalMoves.push(examinedPosition);
        });
        return new Set(legalMoves
            .filter(function (position) { return !movesIntoCheck_1["default"](board, moveFrom, position, boardAnnotations); })
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
            function (movesIntoCheck_1_1) {
                movesIntoCheck_1 = movesIntoCheck_1_1;
            }
        ],
        execute: function () {
            exports_1("default", rook);
        }
    };
});
//# sourceMappingURL=rookMoves.js.map