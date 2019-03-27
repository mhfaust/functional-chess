System.register(["moves/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function queenCanMove(board, fromPosition, toPosition, boardAnnotations) {
        return index_1.rookCanMove(board, fromPosition, toPosition, boardAnnotations)
            || index_1.bishopCanMove(board, fromPosition, toPosition, boardAnnotations);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", queenCanMove);
        }
    };
});
//# sourceMappingURL=queenCanMove.js.map