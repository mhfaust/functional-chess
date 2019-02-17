System.register(["moves/rookCanMove", "moves/bishopCanMove"], function (exports_1, context_1) {
    "use strict";
    var rookCanMove_1, bishopCanMove_1;
    var __moduleName = context_1 && context_1.id;
    function queenCanMove(board, fromPosition, toPosition, boardAnnotations) {
        return rookCanMove_1["default"](board, fromPosition, toPosition, boardAnnotations)
            || bishopCanMove_1["default"](board, fromPosition, toPosition, boardAnnotations);
    }
    return {
        setters: [
            function (rookCanMove_1_1) {
                rookCanMove_1 = rookCanMove_1_1;
            },
            function (bishopCanMove_1_1) {
                bishopCanMove_1 = bishopCanMove_1_1;
            }
        ],
        execute: function () {
            exports_1("default", queenCanMove);
        }
    };
});
//# sourceMappingURL=queenCanMove.js.map