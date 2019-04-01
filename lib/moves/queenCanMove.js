System.register(["moves"], function (exports_1, context_1) {
    "use strict";
    var moves_1;
    var __moduleName = context_1 && context_1.id;
    function queenCanMove(board, fromPosition, toPosition, boardAnnotations) {
        return moves_1.rookCanMove(board, fromPosition, toPosition, boardAnnotations)
            || moves_1.bishopCanMove(board, fromPosition, toPosition, boardAnnotations);
    }
    return {
        setters: [
            function (moves_1_1) {
                moves_1 = moves_1_1;
            }
        ],
        execute: function () {
            exports_1("default", queenCanMove);
        }
    };
});
//# sourceMappingURL=queenCanMove.js.map