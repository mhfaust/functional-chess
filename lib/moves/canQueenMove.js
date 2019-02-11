System.register(["./canRookMove", "moves/canBishopMove"], function (exports_1, context_1) {
    "use strict";
    var canRookMove_1, canBishopMove_1;
    var __moduleName = context_1 && context_1.id;
    function queenCanMove(board, fromPosition, toPosition, boardAnnotations) {
        return canRookMove_1["default"](board, fromPosition, toPosition, boardAnnotations)
            || canBishopMove_1["default"](board, fromPosition, toPosition, boardAnnotations);
    }
    return {
        setters: [
            function (canRookMove_1_1) {
                canRookMove_1 = canRookMove_1_1;
            },
            function (canBishopMove_1_1) {
                canBishopMove_1 = canBishopMove_1_1;
            }
        ],
        execute: function () {
            exports_1("default", queenCanMove);
        }
    };
});
//# sourceMappingURL=canQueenMove.js.map