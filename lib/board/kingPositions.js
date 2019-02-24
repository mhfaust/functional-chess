System.register(["positions/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function kingPositions(board) {
        return {
            whiteKingPosition: index_1.locatePiece(board, "White King"),
            blackKingPosition: index_1.locatePiece(board, "Black King")
        };
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", kingPositions);
        }
    };
});
//# sourceMappingURL=kingPositions.js.map