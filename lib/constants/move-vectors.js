System.register([], function (exports_1, context_1) {
    "use strict";
    var knightVectors, bishopVectors, rookVectors, queenVectors, kingVectors, pawnWhiteVectors, pawnWhiteAttackVectors, pawnBlackVectors, pawnBlackAttackVectors;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("knightVectors", knightVectors = Object.freeze([
                [-1, -2], [1, -2],
                [-2, -1], [2, -1],
                [-2, 1], [2, 1],
                [-1, 2], [1, 2]
            ]));
            exports_1("bishopVectors", bishopVectors = Object.freeze([
                [1, 1], [1, -1],
                [-1, -1], [-1, 1]
            ]));
            exports_1("rookVectors", rookVectors = Object.freeze([
                [0, 1],
                [0, -1], [1, 0],
                [-1, 0]
            ]));
            exports_1("queenVectors", queenVectors = Object.freeze([
                [-1, -1,], [0, -1], [1, -1],
                [-1, 0,], , [1, 0],
                [-1, 1,], [0, -1], [1, -1],
            ]));
            exports_1("kingVectors", kingVectors = Object.freeze([
                [-1, -1,], [0, -1], [1, -1],
                [-1, 0,], , [1, 0],
                [-1, 1,], [0, -1], [1, -1],
            ]));
            exports_1("pawnWhiteVectors", pawnWhiteVectors = Object.freeze([
                [0, 2],
                [-1, 1], [0, 1], [1, 1]
            ]));
            exports_1("pawnWhiteAttackVectors", pawnWhiteAttackVectors = Object.freeze([
                [-1, 1], [1, 1]
            ]));
            exports_1("pawnBlackVectors", pawnBlackVectors = Object.freeze([
                [-1, -1], [0, -1], [1, -1],
                [0, -2],
            ]));
            exports_1("pawnBlackAttackVectors", pawnBlackAttackVectors = Object.freeze([
                [-1, -1], [1, -1]
            ]));
        }
    };
});
//# sourceMappingURL=move-vectors.js.map