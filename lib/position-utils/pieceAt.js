System.register(["../constants/pieces", "position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, index_1;
    var __moduleName = context_1 && context_1.id;
    function pieceAt(board, position) {
        var found = board[index_1.file(position)][index_1.rank(position)];
        if (pieces_1.ALL_PIECES.has(found))
            return found;
        else
            return null;
    }
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", pieceAt);
        }
    };
});
//# sourceMappingURL=pieceAt.js.map