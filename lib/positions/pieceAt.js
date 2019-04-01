System.register(["constants/pieces", "positions"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, positions_1;
    var __moduleName = context_1 && context_1.id;
    function pieceAt(board, position) {
        var found = board[positions_1.file(position)][positions_1.rank(position)];
        if (pieces_1.ALL_PIECES.has(found))
            return found;
        else
            return "";
    }
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (positions_1_1) {
                positions_1 = positions_1_1;
            }
        ],
        execute: function () {
            exports_1("default", pieceAt);
        }
    };
});
//# sourceMappingURL=pieceAt.js.map