System.register(["positions/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function nextKingPositions(board, moveFrom, moveTo, boardAnnotations) {
        var p = {
            whiteKingPosition: boardAnnotations.whiteKingPosition,
            blackKingPosition: boardAnnotations.blackKingPosition
        };
        if (index_1.pieceAt(board, moveFrom) === "Black King") {
            p.blackKingPosition = moveTo;
        }
        else if (index_1.pieceAt(board, moveFrom) === "White King") {
            p.whiteKingPosition = moveTo;
        }
        return boardAnnotations;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", nextKingPositions);
        }
    };
});
//# sourceMappingURL=nextKingPositions.js.map