System.register(["positions", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var positions_1, pieces_1, playerAt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            playerAt = function (board, position) {
                var piece = positions_1.pieceAt(board, position);
                if (!pieces_1.ALL_PIECES.has(piece))
                    return null;
                return pieces_1.BLACK_PIECES.has(piece) ? "Black" : "White";
            };
            exports_1("default", playerAt);
        }
    };
});
//# sourceMappingURL=playerAt.js.map