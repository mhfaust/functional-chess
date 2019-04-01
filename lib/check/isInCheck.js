System.register(["check"], function (exports_1, context_1) {
    "use strict";
    var check_1;
    var __moduleName = context_1 && context_1.id;
    function isInCheck(board, player, boardAnnotations) {
        var kingPosition = player === "Black"
            ? boardAnnotations.blackKingPosition
            : boardAnnotations.whiteKingPosition;
        var attackLines = check_1.generateLinesOfAttack(board, player, kingPosition);
        var checkLine = attackLines.next();
        return checkLine.value !== null;
    }
    return {
        setters: [
            function (check_1_1) {
                check_1 = check_1_1;
            }
        ],
        execute: function () {
            exports_1("default", isInCheck);
        }
    };
});
//# sourceMappingURL=isInCheck.js.map