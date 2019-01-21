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
    var _a, blackPieces, whitePieces, BLACK_PIECES, WHITE_PIECES, ALL_PIECES, unicodeSymbols;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            blackPieces = ["Black King", "Black Queen", "Black Rook", "Black Knight", "Black Bishop", "Black Pawn"];
            whitePieces = ["White King", "White Queen", "White Rook", "White Knight", "White Bishop", "White Pawn"];
            exports_1("BLACK_PIECES", BLACK_PIECES = Object.freeze(new Set(blackPieces)));
            exports_1("WHITE_PIECES", WHITE_PIECES = Object.freeze(new Set(whitePieces)));
            exports_1("ALL_PIECES", ALL_PIECES = Object.freeze(new Set(__spread(blackPieces, whitePieces))));
            exports_1("unicodeSymbols", unicodeSymbols = (_a = {},
                _a["White King"] = '♔',
                _a["White Queen"] = '♕',
                _a["White Rook"] = '♖',
                _a["White Bishop"] = '♗',
                _a["White Knight"] = '♘',
                _a["White Pawn"] = '♙',
                _a["Black King"] = '♚',
                _a["Black Queen"] = '♛',
                _a["Black Rook"] = '♜',
                _a["Black Bishop"] = '♝',
                _a["Black Knight"] = '♞',
                _a["Black Pawn"] = '♟',
                _a[""] = ' ',
                _a));
        }
    };
});
//# sourceMappingURL=pieces.js.map