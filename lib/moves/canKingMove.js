System.register(["position-utils/index", "check/movesIntoCheck", "constants/position"], function (exports_1, context_1) {
    "use strict";
    var index_1, movesIntoCheck_1, position_1, isOkCastle;
    var __moduleName = context_1 && context_1.id;
    function canKingMove(board, fromPosition, toPosition, boardAnnotations) {
        var player = index_1.playerAt(board, fromPosition);
        if (Math.abs(index_1.rank(toPosition) - index_1.rank(fromPosition)) > 1
            || Math.abs(index_1.file(toPosition) - index_1.rank(fromPosition)) > 1
            || player === index_1.playerAt(board, toPosition)
            || movesIntoCheck_1["default"](board, fromPosition, toPosition, boardAnnotations)) {
            return false;
        }
        return true;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (movesIntoCheck_1_1) {
                movesIntoCheck_1 = movesIntoCheck_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            isOkCastle = function (board, kingFrom, kingTo, boardAnnotations) {
                var player = index_1.playerAt(board, kingFrom);
                if (player === "White") {
                    if (!boardAnnotations.whiteKingSideCastlingPrecluded
                        && index_1.areSamePositions(kingTo, position_1.Position.G1)
                        && !movesIntoCheck_1["default"](board, position_1.Position.E1, position_1.Position.F1, boardAnnotations)) {
                    }
                    if (!boardAnnotations.whiteQueenSideCastlingPrecluded
                        && index_1.areSamePositions(kingTo, position_1.Position.C1)
                        && !movesIntoCheck_1["default"](board, position_1.Position.E1, position_1.Position.D1, boardAnnotations)) {
                    }
                }
                else if (player === "Black") {
                    if (!boardAnnotations.blackKingSideCastlingPrecluded
                        && index_1.areSamePositions(kingTo, position_1.Position.G8)
                        && !movesIntoCheck_1["default"](board, position_1.Position.E8, position_1.Position.F8, boardAnnotations)) {
                    }
                    if (!boardAnnotations.blackQueenSideCastlingPrecluded
                        && index_1.areSamePositions(kingTo, position_1.Position.C8)
                        && !movesIntoCheck_1["default"](board, position_1.Position.E8, position_1.Position.D8, boardAnnotations)) {
                    }
                }
            };
            exports_1("default", canKingMove);
        }
    };
});
//# sourceMappingURL=canKingMove.js.map