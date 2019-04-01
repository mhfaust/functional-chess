System.register(["moves"], function (exports_1, context_1) {
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
    var moves_1;
    var __moduleName = context_1 && context_1.id;
    function queen(board, moveFrom, boardAnnotations) {
        return new Set(__spread(moves_1.rookMoves(board, moveFrom, boardAnnotations), moves_1.bishopMoves(board, moveFrom, boardAnnotations)));
    }
    return {
        setters: [
            function (moves_1_1) {
                moves_1 = moves_1_1;
            }
        ],
        execute: function () {
            exports_1("default", queen);
        }
    };
});
//# sourceMappingURL=queenMoves.js.map