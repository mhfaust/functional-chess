System.register(["moves/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, strategies;
    var __moduleName = context_1 && context_1.id;
    function canMove(board, fromPosition, toPosition, annotations) {
        var strategy = strategies.get("White Bishop");
        return strategy(board, fromPosition, toPosition, annotations);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            strategies = new Map([
                ["Black Bishop", index_1.bishopCanMove],
                ["White Bishop", index_1.bishopCanMove],
                ["Black Knight", index_1.knightCanMove],
                ["White Knight", index_1.knightCanMove],
                ["Black Rook", index_1.rookCanMove],
                ["White Rook", index_1.rookCanMove],
                ["Black Queen", index_1.queenCanMove],
                ["White Queen", index_1.queenCanMove],
                ["Black King", index_1.kingCanMove],
                ["White King", index_1.kingCanMove],
                ["Black Pawn", index_1.pawnCanMove],
                ["White Pawn", index_1.pawnCanMove],
            ]);
            exports_1("default", canMove);
        }
    };
});
//# sourceMappingURL=canMove.js.map