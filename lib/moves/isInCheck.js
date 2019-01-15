System.register(["position-utils/index", "constants/pieces", "constants/move-vectors"], function (exports_1, context_1) {
    "use strict";
    var index_1, pieces_1, move_vectors_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, whiteAttackPatterns, blackAttackPatterns;
    var __moduleName = context_1 && context_1.id;
    function isInCheck(board, player, nullableKingPosition) {
        var kingPosition = nullableKingPosition
            ? nullableKingPosition
            : index_1.locatePiece(board, player === pieces_1.Player.Black ? BK : WK);
        var opponent = index_1.otherPlayer(player);
        var attackPatterns = opponent === pieces_1.Player.Black ? blackAttackPatterns : whiteAttackPatterns;
        var _loop_1 = function (i) {
            var attackPattern = attackPatterns[i];
            var canMoveLikeThis = attackPattern.canMoveLikeThis;
            var thisAttackPatternSucceeds = attackPattern.vectors.some(function (vector) {
                var examinedPosition = index_1.displaceFrom(kingPosition, vector);
                while (index_1.isOnBoard(examinedPosition)) {
                    var pieceThere = index_1.pieceAt(board, examinedPosition);
                    if (pieceThere) {
                        return index_1.playerAt(board, examinedPosition) === opponent
                            && canMoveLikeThis.has(pieceThere);
                    }
                    else if (attackPattern.onlyOnce) {
                        return false;
                    }
                    examinedPosition = index_1.displaceFrom(examinedPosition, vector);
                }
                return false;
            });
            if (thisAttackPatternSucceeds)
                return { value: true };
        };
        for (var i = 0; i < attackPatterns.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
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
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, BQ = pieces_1.Piece.BQ, BR = pieces_1.Piece.BR, BN = pieces_1.Piece.BN, BB = pieces_1.Piece.BB, BP = pieces_1.Piece.BP, WK = pieces_1.Piece.WK, WQ = pieces_1.Piece.WQ, WR = pieces_1.Piece.WR, WN = pieces_1.Piece.WN, WB = pieces_1.Piece.WB, WP = pieces_1.Piece.WP;
            whiteAttackPatterns = [
                { name: 'white pawn', vectors: move_vectors_1.pawnWhiteAttackVectors, canMoveLikeThis: new Set([WP, WQ, WB, WK]), onlyOnce: true },
                { name: 'white king', vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([WK, WQ]), onlyOnce: true },
                { name: 'white knight', vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([WN]), onlyOnce: true },
                { name: 'white bishop', vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([WB, WQ]), onlyOnce: false },
                { name: 'white rook', vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([WR, WQ]), onlyOnce: false },
            ];
            blackAttackPatterns = [
                { name: 'black pawn', vectors: move_vectors_1.pawnBlackAttackVectors, canMoveLikeThis: new Set([BP, BQ, BB, BK]), onlyOnce: true },
                { name: 'black king', vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([BK, BQ]), onlyOnce: true },
                { name: 'black knight', vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([BN]), onlyOnce: true },
                { name: 'black bishop', vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([BB, BQ]), onlyOnce: false },
                { name: 'black rook', vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([BR, BQ]), onlyOnce: false },
            ];
            exports_1("default", isInCheck);
        }
    };
});
//# sourceMappingURL=isInCheck.js.map