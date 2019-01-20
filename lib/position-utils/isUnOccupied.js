System.register(["constants/pieces", "position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, index_1;
    var __moduleName = context_1 && context_1.id;
    function isUnOccupied(board, position) {
        return !pieces_1.ALL_PIECES.has(index_1.pieceAt(board, position));
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
            exports_1("default", isUnOccupied);
        }
    };
});
//# sourceMappingURL=isUnOccupied.js.map