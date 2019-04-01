System.register(["positions"], function (exports_1, context_1) {
    "use strict";
    var positions_1;
    var __moduleName = context_1 && context_1.id;
    function kingPositions(board) {
        return {
            whiteKingPosition: positions_1.locatePiece(board, "White King"),
            blackKingPosition: positions_1.locatePiece(board, "Black King")
        };
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            }
        ],
        execute: function () {
            exports_1("default", kingPositions);
        }
    };
});
//# sourceMappingURL=kingPositions.js.map