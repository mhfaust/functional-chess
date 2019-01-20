System.register(["../move-vectors"], function (exports_1, context_1) {
    "use strict";
    var move_vectors_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            }
        ],
        execute: function () {
            describe('move-vectors', function () {
                [
                    move_vectors_1.rookVectors,
                    move_vectors_1.bishopVectors,
                    move_vectors_1.knightVectors,
                    move_vectors_1.kingVectors,
                    move_vectors_1.queenVectors,
                    move_vectors_1.pawnBlackAttackVectors,
                    move_vectors_1.pawnWhiteAttackVectors
                ]
                    .forEach(function (vectors) {
                    it('rookVectors', function () {
                        expect(vectors.some(function (v) { return !v; })).toBe(false);
                        expect(vectors.every(function (v) { return v.length === 2; })).toBe(true);
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=move-vectors.test.js.map