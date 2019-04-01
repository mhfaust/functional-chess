System.register(["constants/pieces", "positions"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, positions_1;
    var __moduleName = context_1 && context_1.id;
    function isUnOccupied(board, position) {
        return !pieces_1.ALL_PIECES.has(positions_1.pieceAt(board, position));
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
            exports_1("default", isUnOccupied);
        }
    };
});
//# sourceMappingURL=isUnOccupied.js.map