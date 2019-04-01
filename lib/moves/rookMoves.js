System.register(["positions", "check", "board", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var positions_1, check_1, board_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function rook(board, moveFrom, boardAnnotations) {
        var player = positions_1.playerAt(board, moveFrom);
        var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        var legalMoves = [];
        var doesntPutSelfInCheck = function (position) { return !check_1.isInCheck(board_1.nextBoard(board, moveFrom, position), player, boardAnnotations); };
        directions.forEach(function (direction) {
            var examinedPosition = positions_1.displaceTo(moveFrom, direction);
            while (positions_1.isOnBoard(examinedPosition) && positions_1.isUnOccupied(board, examinedPosition)) {
                legalMoves.push(examinedPosition);
                examinedPosition = positions_1.displaceTo(examinedPosition, direction);
            }
            if (positions_1.isOnBoard(examinedPosition) && positions_1.isOccupiedByPlayer(board, examinedPosition, positions_1.otherPlayer(player)))
                legalMoves.push(examinedPosition);
        });
        return new Set(legalMoves
            .filter(function (position) { return !movesIntoCheck_1.default(board, moveFrom, position, boardAnnotations); })
            .map(positions_1.positionName));
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (check_1_1) {
                check_1 = check_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
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