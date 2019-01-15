System.register(["position-utils/index", "constants/pieces", "piece-specific-move-mechanics/index"], function (exports_1, context_1) {
    "use strict";
    var _a, index_1, pieces_1, BK, WK, BQ, WQ, BB, WB, BN, WN, BR, WR, BP, WP, index_2, canMoveTo;
    var __moduleName = context_1 && context_1.id;
    function isAttacked(board, defendedPosition) {
        var defender = index_1.playerAt(board, defendedPosition);
        var attacker = index_1.otherPlayer(defender);
        for (var f = 0; f < 8; f++) {
            for (var r = 0; r < 8; r++) {
                if (index_1.playerAt(board, [f, r]) === attacker) {
                    var piece = index_1.pieceAt(board, [f, r]);
                    if (canMoveTo[piece](board, [f, r], defendedPosition)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, WK = pieces_1.Piece.WK, BQ = pieces_1.Piece.BQ, WQ = pieces_1.Piece.WQ, BB = pieces_1.Piece.BB, WB = pieces_1.Piece.WB, BN = pieces_1.Piece.BN, WN = pieces_1.Piece.WN, BR = pieces_1.Piece.BR, WR = pieces_1.Piece.WR, BP = pieces_1.Piece.BP, WP = pieces_1.Piece.WP;
            canMoveTo = (_a = {},
                _a[BK] = index_2.canKingMove,
                _a[WK] = index_2.canKingMove,
                _a[WQ] = index_2.canQueenMove,
                _a[BQ] = index_2.canQueenMove,
                _a[WB] = index_2.canBishopMove,
                _a[BB] = index_2.canBishopMove,
                _a[WN] = index_2.canKnightMove,
                _a[BN] = index_2.canKnightMove,
                _a[WR] = index_2.canRookMove,
                _a[BR] = index_2.canRookMove,
                _a[WP] = index_2.canPawnMove,
                _a[BP] = index_2.canPawnMove,
                _a);
            exports_1("default", isAttacked);
        }
    };
});
//# sourceMappingURL=isAttacked.js.map