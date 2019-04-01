System.register(["positions", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var positions_1, pieces_1;
    var __moduleName = context_1 && context_1.id;
    function allPlayerPositions(board, player) {
        var occupiedPositions = [];
        var allPlayerPieces = player === "Black" ? pieces_1.BLACK_PIECES : pieces_1.WHITE_PIECES;
        board.forEach(function (file, i) { return file.forEach(function (rank, j) {
            var piece = positions_1.pieceAt(board, [i, j]);
            if (piece && allPlayerPieces.has(piece)) {
                occupiedPositions.push({
                    position: positions_1.positionName([i, j]),
                    piece: piece
                });
            }
        }); });
        return occupiedPositions;
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            exports_1("default", allPlayerPositions);
        }
    };
});
//# sourceMappingURL=allPlayerPositions.js.map