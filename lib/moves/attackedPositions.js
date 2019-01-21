System.register(["moves/index", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var _a, index_1, pieces_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __, moveStrategies;
    var __moduleName = context_1 && context_1.id;
    function attackedPositions(board, position, piece) {
        return moveStrategies[piece](board, position);
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
            BK = pieces_1.pieces.BK, BQ = pieces_1.pieces.BQ, BR = pieces_1.pieces.BR, BN = pieces_1.pieces.BN, BB = pieces_1.pieces.BB, BP = pieces_1.pieces.BP, WK = pieces_1.pieces.WK, WQ = pieces_1.pieces.WQ, WR = pieces_1.pieces.WR, WN = pieces_1.pieces.WN, WB = pieces_1.pieces.WB, WP = pieces_1.pieces.WP, Empty = pieces_1.pieces.Empty, __ = pieces_1.pieces.__;
            moveStrategies = (_a = {},
                _a[BK] = index_1.king,
                _a[WK] = index_1.king,
                _a[WQ] = index_1.queen,
                _a[BQ] = index_1.queen,
                _a[WB] = index_1.bishop,
                _a[BB] = index_1.bishop,
                _a[WN] = index_1.knight,
                _a[BN] = index_1.knight,
                _a[WR] = index_1.rook,
                _a[BR] = index_1.rook,
                _a[WP] = index_1.pawn,
                _a[BP] = index_1.pawn,
                _a);
            exports_1("default", attackedPositions);
        }
    };
});
//# sourceMappingURL=attackedPositions.js.map