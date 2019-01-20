System.register(["constants/pieces", "constants/move-vectors"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, move_vectors_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, whiteAttackPatterns, blackAttackPatterns;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, BQ = pieces_1.Piece.BQ, BR = pieces_1.Piece.BR, BN = pieces_1.Piece.BN, BB = pieces_1.Piece.BB, BP = pieces_1.Piece.BP, WK = pieces_1.Piece.WK, WQ = pieces_1.Piece.WQ, WR = pieces_1.Piece.WR, WN = pieces_1.Piece.WN, WB = pieces_1.Piece.WB, WP = pieces_1.Piece.WP;
            exports_1("whiteAttackPatterns", whiteAttackPatterns = [
                { name: WP, vectors: move_vectors_1.pawnWhiteAttackVectors, canMoveLikeThis: new Set([WP, WQ, WB, WK]), onlyOnce: true },
                { name: WK, vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([WK, WQ]), onlyOnce: true },
                { name: WN, vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([WN]), onlyOnce: true },
                { name: WB, vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([WB, WQ]), onlyOnce: false },
                { name: WR, vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([WR, WQ]), onlyOnce: false },
            ]);
            exports_1("blackAttackPatterns", blackAttackPatterns = [
                { name: BP, vectors: move_vectors_1.pawnBlackAttackVectors, canMoveLikeThis: new Set([BP, BQ, BB, BK]), onlyOnce: true },
                { name: BK, vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([BK, BQ]), onlyOnce: true },
                { name: BN, vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([BN]), onlyOnce: true },
                { name: BB, vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([BB, BQ]), onlyOnce: false },
                { name: BR, vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([BR, BQ]), onlyOnce: false },
            ]);
        }
    };
});
//# sourceMappingURL=attackPatterns.js.map