System.register(["moves/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, bishop, knight, rook, pawn, king, queen, strategies;
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
            bishop = function (b, f, a) { return index_1.bishopMoves(b, f, a); };
            knight = function (b, f, a) { return index_1.knightMoves(b, f, a); };
            rook = function (b, f, a) { return index_1.rookMoves(b, f, a); };
            pawn = function (b, f, a) { return index_1.pawnMoves(b, f, a); };
            king = function (b, f, a) { return index_1.kingMoves(b, f, a); };
            queen = function (b, f, a) { return index_1.queenMoves(b, f, a); };
            strategies = new Map([
                ["Black Bishop", bishop],
                ["White Bishop", bishop],
                ["Black Knight", knight],
                ["White Knight", knight],
                ["Black Rook", rook],
                ["White Rook", rook],
                ["Black Queen", queen],
                ["White Queen", queen],
                ["Black King", king],
                ["White King", king],
                ["Black Pawn", pawn],
                ["White Pawn", pawn],
            ]);
            exports_1("default", moves);
        }
    };
});
//# sourceMappingURL=moves.js.map