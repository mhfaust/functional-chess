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
                ["Black Bishop", index_1.canBishopMove],
                ["White Bishop", index_1.canBishopMove],
                ["Black Knight", index_1.canKnightMove],
                ["White Knight", index_1.canKnightMove],
                ["Black Rook", index_1.canRookMove],
                ["White Rook", index_1.canRookMove],
                ["Black Queen", index_1.canQueenMove],
                ["White Queen", index_1.canQueenMove],
                ["Black King", index_1.canKingMove],
                ["White King", index_1.canKingMove],
                ["Black Pawn", index_1.canPawnMove],
                ["White Pawn", index_1.canPawnMove],
            ]);
            exports_1("default", canMove);
        }
    };
});
//# sourceMappingURL=canMove.js.map