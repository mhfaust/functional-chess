System.register(["constants/move-vectors", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var move_vectors_1, pieces_shorthand_1, whiteAttackPatterns, blackAttackPatterns;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            }
        ],
        execute: function () {
            exports_1("whiteAttackPatterns", whiteAttackPatterns = [
                { name: pieces_shorthand_1.WP, vectors: move_vectors_1.pawnWhiteAttackVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WP, pieces_shorthand_1.WQ, pieces_shorthand_1.WB, pieces_shorthand_1.WK]), onlyOnce: true },
                { name: pieces_shorthand_1.WK, vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WK, pieces_shorthand_1.WQ]), onlyOnce: true },
                { name: pieces_shorthand_1.WN, vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WN]), onlyOnce: true },
                { name: pieces_shorthand_1.WB, vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WB, pieces_shorthand_1.WQ]), onlyOnce: false },
                { name: pieces_shorthand_1.WR, vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WR, pieces_shorthand_1.WQ]), onlyOnce: false },
            ]);
            exports_1("blackAttackPatterns", blackAttackPatterns = [
                { name: pieces_shorthand_1.BP, vectors: move_vectors_1.pawnBlackAttackVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BP, pieces_shorthand_1.BQ, pieces_shorthand_1.BB, pieces_shorthand_1.BK]), onlyOnce: true },
                { name: pieces_shorthand_1.BK, vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BK, pieces_shorthand_1.BQ]), onlyOnce: true },
                { name: pieces_shorthand_1.BN, vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BN]), onlyOnce: true },
                { name: pieces_shorthand_1.BB, vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BB, pieces_shorthand_1.BQ]), onlyOnce: false },
                { name: pieces_shorthand_1.BR, vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BR, pieces_shorthand_1.BQ]), onlyOnce: false },
            ]);
        }
    };
});
//# sourceMappingURL=attackPatterns.js.map