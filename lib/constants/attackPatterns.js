System.register(["constants/move-vectors", "positions/pieces-shorthand"], function (exports_1, context_1) {
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
                { vectors: move_vectors_1.pawnWhiteAttackVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WP, pieces_shorthand_1.WQ, pieces_shorthand_1.WB, pieces_shorthand_1.WK]), limit: 1 },
                { vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WK, pieces_shorthand_1.WQ]), limit: 1 },
                { vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WN]), limit: 1 },
                { vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WB, pieces_shorthand_1.WQ]), limit: 0 },
                { vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WR, pieces_shorthand_1.WQ]), limit: 0 },
            ]);
            exports_1("blackAttackPatterns", blackAttackPatterns = [
                { vectors: move_vectors_1.pawnBlackAttackVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BP, pieces_shorthand_1.BQ, pieces_shorthand_1.BB, pieces_shorthand_1.BK]), limit: 1 },
                { vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BK, pieces_shorthand_1.BQ]), limit: 1 },
                { vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BN]), limit: 1 },
                { vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BB, pieces_shorthand_1.BQ]), limit: 0 },
                { vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BR, pieces_shorthand_1.BQ]), limit: 0 },
            ]);
        }
    };
});
//# sourceMappingURL=attackPatterns.js.map