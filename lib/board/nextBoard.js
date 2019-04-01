System.register(["positions", "board"], function (exports_1, context_1) {
    "use strict";
    var positions_1, board_1;
    var __moduleName = context_1 && context_1.id;
    function nextBoard(previousBoard, pieceMovedFromPosition, pieceMovedToPosition) {
        var newBoard = board_1.emptyBoard();
        for (var file_1 = 0; file_1 < 8; file_1++) {
            for (var rank_1 = 0; rank_1 < 8; rank_1++) {
                newBoard[file_1][rank_1] = positions_1.pieceAt(previousBoard, [file_1, rank_1]);
            }
        }
        newBoard[positions_1.file(pieceMovedFromPosition)][positions_1.rank(pieceMovedFromPosition)] = "";
        newBoard[positions_1.file(pieceMovedToPosition)][positions_1.rank(pieceMovedToPosition)] = positions_1.pieceAt(previousBoard, pieceMovedFromPosition);
        return newBoard;
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            }
        ],
        execute: function () {
            exports_1("default", nextBoard);
        }
    };
});
//# sourceMappingURL=nextBoard.js.map