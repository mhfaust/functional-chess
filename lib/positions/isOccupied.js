System.register(["constants/pieces", "positions/index"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, index_1, isOccupied;
    var __moduleName = context_1 && context_1.id;
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
            isOccupied = function (board, position) { return pieces_1.ALL_PIECES.has(index_1.pieceAt(board, position)); };
            exports_1("default", isOccupied);
        }
    };
});
//# sourceMappingURL=isOccupied.js.map