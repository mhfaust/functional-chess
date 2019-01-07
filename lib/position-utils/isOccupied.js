System.register(["constants/pieces.ts", "position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var pieces_ts_1, index_1, isOccupied;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_ts_1_1) {
                pieces_ts_1 = pieces_ts_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            isOccupied = function (board, position) { return pieces_ts_1.ALL_PIECES.has(index_1.pieceAt(board, position)); };
            exports_1("default", isOccupied);
        }
    };
});
//# sourceMappingURL=isOccupied.js.map