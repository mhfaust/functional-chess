System.register(["moves"], function (exports_1, context_1) {
    "use strict";
    var moves_1, bishop, knight, rook, pawn, king, queen, strategies;
    var __moduleName = context_1 && context_1.id;
    function moves(board, fromPosition, annotations) {
        var strategy = strategies.get("White Bishop");
        return strategy(board, fromPosition, annotations);
    }
    return {
        setters: [
            function (moves_1_1) {
                moves_1 = moves_1_1;
            }
        ],
        execute: function () {
            bishop = function (b, g, a) { return moves_1.bishopMoves(b, g, a); };
            knight = function (b, g, a) { return moves_1.knightMoves(b, g, a); };
            rook = function (b, g, a) { return moves_1.rookMoves(b, g, a); };
            pawn = function (b, g, a) { return moves_1.pawnMoves(b, g, a); };
            king = function (b, g, a) { return moves_1.kingMoves(b, g, a); };
            queen = function (b, g, a) { return moves_1.queenMoves(b, g, a); };
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