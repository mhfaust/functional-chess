System.register(["moves/index", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var _a, index_1, pieces_shorthand_1, moveStrategies;
    var __moduleName = context_1 && context_1.id;
    function attackedPositions(board, position, piece) {
        return moveStrategies[piece](board, position);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            }
        ],
        execute: function () {
            moveStrategies = (_a = {},
                _a[pieces_shorthand_1.BK] = index_1.kingMoves,
                _a[pieces_shorthand_1.WK] = index_1.kingMoves,
                _a[pieces_shorthand_1.WQ] = index_1.queenMoves,
                _a[pieces_shorthand_1.BQ] = index_1.queenMoves,
                _a[pieces_shorthand_1.WB] = index_1.bishopMoves,
                _a[pieces_shorthand_1.BB] = index_1.bishopMoves,
                _a[pieces_shorthand_1.WN] = index_1.knightMoves,
                _a[pieces_shorthand_1.BN] = index_1.knightMoves,
                _a[pieces_shorthand_1.WR] = index_1.rookMoves,
                _a[pieces_shorthand_1.BR] = index_1.rookMoves,
                _a[pieces_shorthand_1.WP] = index_1.pawnMoves,
                _a[pieces_shorthand_1.BP] = index_1.pawnMoves,
                _a);
            exports_1("default", attackedPositions);
        }
    };
});
//# sourceMappingURL=attackedPositions.js.map