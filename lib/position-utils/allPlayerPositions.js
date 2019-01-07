System.register(["position-utils/index", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var index_1, pieces_1;
    var __moduleName = context_1 && context_1.id;
    function allPlayerPositions(board, player) {
        var occupiedPositions = [];
        var allPlayerPieces = player === pieces_1.Player.Black ? pieces_1.BLACK_PIECES : pieces_1.WHITE_PIECES;
        board.forEach(function (file, i) { return file.forEach(function (rank, j) {
            var piece = index_1.pieceAt(board, [i, j]);
            if (piece && allPlayerPieces.has(piece)) {
                occupiedPositions.push({
                    position: index_1.algebraicName([i, j]),
                    piece: piece
                });
            }
        }); });
        return occupiedPositions;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
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