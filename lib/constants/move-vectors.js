System.register([], function (exports_1, context_1) {
    "use strict";
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    var knightVectors, bishopVectors, rookVectors, queenVectors, kingVectors, pawnWhiteAttackVectors, pawnBlackAttackVectors, pawnWhiteAdvanceVectors, pawnBlackAdvanceVectors;
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
            exports_1("queenVectors", queenVectors = Object.freeze(__spread(rookVectors, bishopVectors)));
            exports_1("kingVectors", kingVectors = Object.freeze(__spread(queenVectors)));
            exports_1("pawnWhiteAttackVectors", pawnWhiteAttackVectors = Object.freeze([
                [-1, 1], [1, 1]
            ]));
            exports_1("pawnBlackAttackVectors", pawnBlackAttackVectors = Object.freeze([
                [-1, -1], [1, -1]
            ]));
            exports_1("pawnWhiteAdvanceVectors", pawnWhiteAdvanceVectors = Object.freeze([
                [0, 1],
            ]));
            exports_1("pawnBlackAdvanceVectors", pawnBlackAdvanceVectors = Object.freeze([
                [0, -1],
            ]));
        }
    };
});
//# sourceMappingURL=move-vectors.js.map