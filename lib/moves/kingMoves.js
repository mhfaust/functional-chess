System.register(["positions", "constants/move-vectors", "constants/position", "check/movesIntoCheck"], function (exports_1, context_1) {
    "use strict";
    var positions_1, move_vectors_1, position_1, movesIntoCheck_1;
    var __moduleName = context_1 && context_1.id;
    function kingMoves(board, kingFrom, boardAnnotations) {
        var whiteQueenSideCastlingPrecluded = boardAnnotations.whiteQueenSideCastlingPrecluded, whiteKingSideCastlingPrecluded = boardAnnotations.whiteKingSideCastlingPrecluded, blackQueenSideCastlingPrecluded = boardAnnotations.blackQueenSideCastlingPrecluded, blackKingSideCastlingPrecluded = boardAnnotations.blackKingSideCastlingPrecluded;
        var player = positions_1.playerAt(board, kingFrom);
        var legalMoves = new Set(move_vectors_1.kingVectors
            .map(function (vector) { return positions_1.displaceTo(kingFrom, vector); })
            .filter(positions_1.isOnBoard)
            .filter(function (targetPosition) { return positions_1.isUnOccupiedByPlayer(board, targetPosition, player); })
            .filter(function (kingTo) { return !movesIntoCheck_1.default(board, kingFrom, kingTo, boardAnnotations); })
            .map(positions_1.positionName));
        var canCastle = function (isPrecluded, kingTo, castleMovesTo) {
            return !isPrecluded
                && legalMoves.has(positions_1.positionName(castleMovesTo))
                && positions_1.playerAt(board, kingTo) === null
                && !movesIntoCheck_1.default(board, kingFrom, kingTo, boardAnnotations);
        };
        if (player === "White") {
            if (canCastle(whiteKingSideCastlingPrecluded, position_1.Position.G1, position_1.Position.F1)) {
                legalMoves.add("g1");
            }
            if (canCastle(whiteQueenSideCastlingPrecluded, position_1.Position.C1, position_1.Position.D1)) {
                legalMoves.add("c1");
            }
        }
        else if (player === "Black") {
            if (canCastle(blackKingSideCastlingPrecluded, position_1.Position.G8, position_1.Position.F8)) {
                legalMoves.add("g8");
            }
            if (canCastle(blackQueenSideCastlingPrecluded, position_1.Position.C8, position_1.Position.D8)) {
                legalMoves.add("c8");
            }
        }
        return legalMoves;
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
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