System.register(["moves/index", "position-utils/index", "constants/move-vectors", "check/isInCheck"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, move_vectors_1, isInCheck_1;
    var __moduleName = context_1 && context_1.id;
    function isInCheckmate(board, defender, kingPosition) {
        if (move_vectors_1.kingVectors.some(function (vector) {
            var moveTo = index_2.displaceTo(kingPosition, vector);
            var boardAfterMove = index_1.nextBoard(board, kingPosition, moveTo);
            return !isInCheck_1["default"](boardAfterMove, defender, moveTo);
        })) {
            return false;
        }
        var checkInfo = index_1.linesOfAttack(board, defender, kingPosition);
        if (checkInfo.size > 1)
            return true;
        if (checkInfo.size === 0) {
            throw new Error('Assumed defender is in check, but found no checking pieces.');
        }
        var attackLine = checkInfo.values().next().value;
        attackLine.forEach(function (position) {
        });
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            },
            function (isInCheck_1_1) {
                isInCheck_1 = isInCheck_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=IsInCheckmate.js.map