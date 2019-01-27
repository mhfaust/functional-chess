System.register(["position-utils/index", "check/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2;
    var __moduleName = context_1 && context_1.id;
    function isInCheck(board, player, nullableKingPosition) {
        var kingPosition = nullableKingPosition
            ? nullableKingPosition
            : index_1.locatePiece(board, player === "Black" ? "Black King" : "White King");
        var attackLines = index_2.generateLinesOfAttack(board, player, kingPosition);
        var checkLine = attackLines.next();
        return checkLine.value !== null;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("default", isInCheck);
        }
    };
});
//# sourceMappingURL=isInCheck.js.map