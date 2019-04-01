System.register(["board", "check", "positions"], function (exports_1, context_1) {
    "use strict";
    var board_1, check_1, positions_1;
    var __moduleName = context_1 && context_1.id;
    function movesIntoCheck(board, moveFrom, moveTo, annotations) {
        var next = board_1.nextBoard(board, moveFrom, moveTo);
        var updatedAnnotations = board_1.nextKingAnnotations(board, moveFrom, moveTo, annotations);
        return check_1.isInCheck(next, positions_1.playerAt(board, moveFrom), updatedAnnotations);
    }
    return {
        setters: [
            function (board_1_1) {
                board_1 = board_1_1;
            },
            function (check_1_1) {
                check_1 = check_1_1;
            },
            function (positions_1_1) {
                positions_1 = positions_1_1;
            }
        ],
        execute: function () {
            exports_1("default", movesIntoCheck);
        }
    };
});
//# sourceMappingURL=movesIntoCheck.js.map