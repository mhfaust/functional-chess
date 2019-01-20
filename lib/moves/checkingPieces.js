System.register(["position-utils/index", "constants/pieces", "constants/move-vectors"], function (exports_1, context_1) {
    "use strict";
    var index_1, pieces_1, move_vectors_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, whiteAttackPatterns, blackAttackPatterns;
    var __moduleName = context_1 && context_1.id;
    function checkingPieces(board, defender, nullableKingPosition) {
        var kingPosition = nullableKingPosition
            ? nullableKingPosition
            : index_1.locatePiece(board, defender === pieces_1.Player.Black ? BK : WK);
        var attacker = index_1.otherPlayer(defender);
        var attackPatterns = attacker === pieces_1.Player.Black ? blackAttackPatterns : whiteAttackPatterns;
        var linesOfAttack = new Map();
        var _loop_1 = function (i) {
            var attackPattern = attackPatterns[i];
            var canMoveLikeThis = attackPattern.canMoveLikeThis;
            attackPattern.vectors.forEach(function (vector) {
                var attackLine = [];
                var examinedPosition = index_1.displaceFrom(kingPosition, vector);
                attackLine.push(examinedPosition);
                while (index_1.isOnBoard(examinedPosition)) {
                    var pieceThere = index_1.pieceAt(board, examinedPosition);
                    if (pieceThere) {
                        if (index_1.playerAt(board, examinedPosition) === attacker && canMoveLikeThis.has(pieceThere))
                            linesOfAttack.set(index_1.algebraicName(examinedPosition), attackLine);
                        return;
                    }
                    else if (attackPattern.onlyOnce) {
                        return;
                    }
                    examinedPosition = index_1.displaceFrom(examinedPosition, vector);
                }
                return;
            });
        };
        for (var i = 0; i < attackPatterns.length; i++) {
            _loop_1(i);
        }
        return linesOfAttack;
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
                { name: WP, vectors: move_vectors_1.pawnWhiteAttackVectors, canMoveLikeThis: new Set([WP, WQ, WB, WK]), onlyOnce: true },
                { name: WK, vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([WK, WQ]), onlyOnce: true },
                { name: WN, vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([WN]), onlyOnce: true },
                { name: WB, vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([WB, WQ]), onlyOnce: false },
                { name: WR, vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([WR, WQ]), onlyOnce: false },
            ];
            blackAttackPatterns = [
                { name: BP, vectors: move_vectors_1.pawnBlackAttackVectors, canMoveLikeThis: new Set([BP, BQ, BB, BK]), onlyOnce: true },
                { name: BK, vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([BK, BQ]), onlyOnce: true },
                { name: BN, vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([BN]), onlyOnce: true },
                { name: BB, vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([BB, BQ]), onlyOnce: false },
                { name: BR, vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([BR, BQ]), onlyOnce: false },
            ];
            exports_1("default", checkingPieces);
        }
    };
});
//# sourceMappingURL=checkingPieces.js.map