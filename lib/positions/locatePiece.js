System.register(["positions/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function locatePiece(board, piece) {
        for (var file = 0; file < 8; file++) {
            for (var rank = 0; rank < 8; rank++) {
                var position = [file, rank];
                if (index_1.pieceAt(board, position) === piece)
                    return position;
            }
        }
        return null;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", locatePiece);
        }
    };
});
//# sourceMappingURL=locatePiece.js.map