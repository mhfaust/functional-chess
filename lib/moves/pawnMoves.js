System.register(["positions", "check", "board"], function (exports_1, context_1) {
    "use strict";
    var positions_1, check_1, board_1;
    var __moduleName = context_1 && context_1.id;
    function pawn(board, moveFrom, annotations) {
        var player = positions_1.playerAt(board, moveFrom);
        var legalMoves = new Set();
        var forwardDirection = player === "White" ? 1 : -1;
        var initialRank = positions_1.rank(moveFrom);
        var forward1 = positions_1.displaceTo(moveFrom, [0, forwardDirection]);
        var passedPosition = annotations.passedPosition;
        var moveNotInCheck = function (moveTo) { return !check_1.isInCheck(board_1.nextBoard(board, moveFrom, moveTo), player, annotations); };
        if (positions_1.isOnBoard(forward1) && positions_1.isUnOccupied(board, forward1) && moveNotInCheck(forward1)) {
            legalMoves.add(positions_1.positionName(forward1));
            var pawnHasNotMoved = (player === "White" && initialRank === 1) || (player === "Black" && initialRank === 6);
            if (pawnHasNotMoved) {
                var forward2 = positions_1.displaceTo(moveFrom, [0, 2 * forwardDirection]);
                if (positions_1.isOnBoard(forward1) && positions_1.isUnOccupied(board, forward2) && moveNotInCheck(forward2)) {
                    legalMoves.add(positions_1.positionName(forward2));
                }
            }
        }
        var moveVectors = [[-1, forwardDirection], [1, forwardDirection]];
        var other = positions_1.otherPlayer(player);
        moveVectors.forEach(function (vector) {
            var attackedPosition = positions_1.displaceTo(moveFrom, vector);
            if ((positions_1.isOnBoard(attackedPosition) && positions_1.isOccupiedByPlayer(board, attackedPosition, other))
                || (passedPosition && positions_1.areSamePositions(attackedPosition, passedPosition))) {
                if (moveNotInCheck(attackedPosition)) {
                    legalMoves.add(positions_1.positionName(attackedPosition));
                }
            }
        });
        return legalMoves;
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
            }
        ],
        execute: function () {
            exports_1("default", pawn);
        }
    };
});
//# sourceMappingURL=pawnMoves.js.map