System.register(["position-utils/index", "check/index", "moves/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, index_3;
    var __moduleName = context_1 && context_1.id;
    function pawn(board, moveFrom, kingPosition, passantInfo) {
        if (passantInfo === void 0) { passantInfo = null; }
        var player = index_1.playerAt(board, moveFrom);
        var legalMoves = new Set();
        var forwardDirection = player === "White" ? 1 : -1;
        var initialRank = index_1.rank(moveFrom);
        var forward1 = index_1.displaceTo(moveFrom, [0, forwardDirection]);
        var moveNotInCheck = function (moveTo) { return !index_2.isInCheck(index_3.nextBoard(board, moveFrom, moveTo), player, kingPosition); };
        if (index_1.isOnBoard(forward1) && index_1.isUnOccupied(board, forward1) && moveNotInCheck(forward1)) {
            legalMoves.add(index_1.positionName(forward1));
            var pawnHasNotMoved = (player === "White" && initialRank === 1) || (player === "Black" && initialRank === 6);
            if (pawnHasNotMoved) {
                var forward2 = index_1.displaceTo(moveFrom, [0, 2 * forwardDirection]);
                if (index_1.isOnBoard(forward1) && index_1.isUnOccupied(board, forward2) && moveNotInCheck(forward2)) {
                    legalMoves.add(index_1.positionName(forward2));
                }
            }
        }
        var moveVectors = [[-1, forwardDirection], [1, forwardDirection]];
        var other = index_1.otherPlayer(player);
        moveVectors.forEach(function (vector) {
            var attackedPosition = index_1.displaceTo(moveFrom, vector);
            if ((index_1.isOnBoard(attackedPosition) && index_1.isOccupiedByPlayer(board, attackedPosition, other))
                || (passantInfo && index_1.areSamePositions(attackedPosition, passantInfo.passedPosition))) {
                if (moveNotInCheck(attackedPosition)) {
                    legalMoves.add(index_1.positionName(attackedPosition));
                }
            }
        });
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
            }
        ],
        execute: function () {
            exports_1("default", pawn);
        }
    };
});
//# sourceMappingURL=pawnMoves.js.map