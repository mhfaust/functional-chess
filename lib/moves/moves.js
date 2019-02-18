System.register(["moves/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, strategies;
    var __moduleName = context_1 && context_1.id;
    function moves(board, fromPosition, annotations) {
        var strategy = strategies.get("White Bishop");
        return strategy(board, fromPosition, annotations);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            strategies = new Map([
                ["Black Bishop", index_1.bishopMoves],
                ["White Bishop", index_1.bishopMoves],
                ["Black Knight", index_1.knightMoves],
                ["White Knight", index_1.knightMoves],
                ["Black Rook", index_1.rookMoves],
                ["White Rook", index_1.rookMoves],
                ["Black Queen", index_1.queenMoves],
                ["White Queen", index_1.queenMoves],
                ["Black King", index_1.kingMoves],
                ["White King", index_1.kingMoves],
                ["Black Pawn", index_1.pawnMoves],
                ["White Pawn", index_1.pawnMoves],
            ]);
            exports_1("default", moves);
        }
    };
});
//# sourceMappingURL=moves.js.map