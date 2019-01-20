System.register(["position-utils/index", "constants/pieces", "boards/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, pieces_1, index_2;
    var __moduleName = context_1 && context_1.id;
    function nextBoard(previousBoard, pieceMovedFromPosition, pieceMovedToPosition) {
        var newBoard = index_2.empty();
        for (var file_1 = 0; file_1 < 8; file_1++) {
            for (var rank_1 = 0; rank_1 < 8; rank_1++) {
                newBoard[file_1][rank_1] = index_1.pieceAt(previousBoard, [file_1, rank_1]);
            }
        }
        newBoard[index_1.file(pieceMovedFromPosition)][index_1.rank(pieceMovedFromPosition)] = pieces_1.Piece.Empty;
        newBoard[index_1.file(pieceMovedToPosition)][index_1.rank(pieceMovedToPosition)] = index_1.pieceAt(previousBoard, pieceMovedFromPosition);
        return newBoard;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("default", nextBoard);
        }
    };
});
//# sourceMappingURL=nextBoard.js.map