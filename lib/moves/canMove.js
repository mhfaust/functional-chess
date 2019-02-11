System.register(["moves/index", "position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, strategies;
    var __moduleName = context_1 && context_1.id;
    function canMove(board, fromPosition, toPosition, annotations) {
        var movingPiece = index_2.pieceAt(board, fromPosition);
        console.log(strategies);
        var strategy = strategies.get("White Bishop");
        console.log(strategy);
        return strategy(board, fromPosition, toPosition, annotations);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            strategies = new Map([
                ["Black King", index_1.canKingMove],
                ["White King", index_1.canKingMove],
                ["Black Bishop", index_1.canBishopMove],
                ["White Bishop", index_1.canBishopMove],
                ["Black Knight", index_1.canKnightMove],
                ["White Knight", index_1.canKnightMove],
                ["Black Pawn", index_1.canPawnMove],
                ["White Pawn", index_1.canPawnMove],
                ["Black Queen", index_1.canQueenMove],
                ["White Queen", index_1.canQueenMove],
                ["Black Rook", index_1.canRookMove],
                ["White Rook", index_1.canRookMove]
            ]);
            exports_1("default", canMove);
        }
    };
});
//# sourceMappingURL=canMove.js.map