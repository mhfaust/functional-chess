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
            bishop = function (b, g, a) { return index_1.bishopMoves(b, g, a); };
            knight = function (b, g, a) { return index_1.knightMoves(b, g, a); };
            rook = function (b, g, a) { return index_1.rookMoves(b, g, a); };
            pawn = function (b, g, a) { return index_1.pawnMoves(b, g, a); };
            king = function (b, g, a) { return index_1.kingMoves(b, g, a); };
            queen = function (b, g, a) { return index_1.queenMoves(b, g, a); };
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