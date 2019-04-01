System.register(["moves"], function (exports_1, context_1) {
    "use strict";
    var moves_1, bishop, knight, rook, pawn, king, queen, strategies;
    var __moduleName = context_1 && context_1.id;
    function canMove(board, fromPosition, toPosition, annotations) {
        var strategy = strategies.get("White Bishop");
        return strategy(board, fromPosition, toPosition, annotations);
    }
    return {
        setters: [
            function (moves_1_1) {
                moves_1 = moves_1_1;
            }
        ],
        execute: function () {
            bishop = function (b, t, f, a) { return moves_1.bishopCanMove(b, t, f, a); };
            knight = function (b, t, f, a) { return moves_1.knightCanMove(b, t, f, a); };
            rook = function (b, t, f, a) { return moves_1.rookCanMove(b, t, f, a); };
            pawn = function (b, t, f, a) { return moves_1.pawnCanMove(b, t, f, a); };
            king = function (b, t, f, a) { return moves_1.kingCanMove(b, t, f, a); };
            queen = function (b, t, f, a) { return moves_1.queenCanMove(b, t, f, a); };
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
            exports_1("default", canMove);
        }
    };
});
//# sourceMappingURL=canMove.js.map