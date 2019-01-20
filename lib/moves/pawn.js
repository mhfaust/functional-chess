System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function pawn(board, initialPosition) {
        var player = index_1.playerAt(board, initialPosition);
        var attackedPositions = new Set();
        var forwardDirection = player === "White" ? 1 : -1;
        var initialRank = index_1.rank(initialPosition);
        var forward1 = index_1.displaceTo(initialPosition, [0, forwardDirection]);
        if (index_1.isOnBoard(forward1) && index_1.isUnOccupied(board, forward1)) {
            attackedPositions.add(index_1.algebraicName(forward1));
            var pawnHasNotMoved = (player === "White" && initialRank === 1) || (player === "Black" && initialRank === 6);
            if (pawnHasNotMoved) {
                var forward2 = index_1.displaceTo(initialPosition, [0, 2 * forwardDirection]);
                if (index_1.isOnBoard(forward1) && index_1.isUnOccupied(board, forward2))
                    attackedPositions.add(index_1.algebraicName(forward2));
            }
        }
        var moveVectors = [[-1, forwardDirection], [1, forwardDirection]];
        moveVectors.forEach(function (vector) {
            var attackedPosition = index_1.displaceTo(initialPosition, vector);
            if (index_1.isOnBoard(attackedPosition) && index_1.isOccupiedByPlayer(board, attackedPosition, index_1.otherPlayer(player)))
                attackedPositions.add(index_1.algebraicName(attackedPosition));
        });
        return attackedPositions;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", pawn);
        }
    };
});
//# sourceMappingURL=pawn.js.map