System.register(["position-utils/index", "constants/move-vectors", "constants/position", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var index_1, move_vectors_1, position_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function kingMoves(board, kingFrom, castlingPreclusions) {
        var player = index_1.playerAt(board, kingFrom);
        var legalMoves = new Set(move_vectors_1.kingVectors
            .map(function (vector) { return index_1.displaceTo(kingFrom, vector); })
            .filter(index_1.isOnBoard)
            .filter(function (targetPosition) { return index_1.isUnOccupiedByPlayer(board, targetPosition, player); })
            .filter(function (kingTo) { return !movesIntoCheck_1["default"](board, kingFrom, kingTo, kingTo); })
            .map(index_1.positionName));
        var canCastle = function (isPrecluded, kingTo, castleMovesTo) {
            return !isPrecluded
                && legalMoves.has(index_1.positionName(castleMovesTo))
                && index_1.playerAt(board, kingTo) === null
                && !movesIntoCheck_1["default"](board, kingFrom, kingTo, kingTo);
        };
        if (player === "White") {
            if (canCastle(castlingPreclusions.kingSide, position_1.Position.G1, position_1.Position.F1)) {
                legalMoves.add("G1");
            }
            if (canCastle(castlingPreclusions.queenSide, position_1.Position.C1, position_1.Position.D1)) {
                legalMoves.add("C1");
            }
        }
        else if (player === "Black") {
            if (canCastle(castlingPreclusions.kingSide, position_1.Position.G8, position_1.Position.F8)) {
                legalMoves.add("G8");
            }
            if (canCastle(castlingPreclusions.queenSide, position_1.Position.C8, position_1.Position.D8)) {
                legalMoves.add("C8");
            }
        }
        return legalMoves;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (movesIntoCheck_1_1) {
                movesIntoCheck_1 = movesIntoCheck_1_1;
            }
        ],
        execute: function () {
            exports_1("default", kingMoves);
        }
    };
});
//# sourceMappingURL=kingMoves.js.map