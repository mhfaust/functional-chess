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
    var _a, Player, Piece, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __, blackPieces, whitePieces, BLACK_PIECES, WHITE_PIECES, ALL_PIECES, unicodeSymbols;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Player) {
                Player["Black"] = "Black";
                Player["White"] = "White";
            })(Player || (Player = {}));
            exports_1("Player", Player);
            (function (Piece) {
                Piece["WK"] = "White King";
                Piece["WhiteKing"] = "White King";
                Piece["WQ"] = "White Queen";
                Piece["WhiteQueen"] = "White Queen";
                Piece["WR"] = "White Rook";
                Piece["WhiteRook"] = "White Rook";
                Piece["WN"] = "White Knight";
                Piece["WhiteKnight"] = "White Knight";
                Piece["WB"] = "White Bishop";
                Piece["WhiteBishop"] = "White Bishop";
                Piece["WP"] = "White Pawn";
                Piece["WhitePawn"] = "White Pawn";
                Piece["BK"] = "Black King";
                Piece["BlackKing"] = "Black King";
                Piece["BQ"] = "Black Queen";
                Piece["BlackQueen"] = "Black Queen";
                Piece["BR"] = "Black Rook";
                Piece["BlackRook"] = "Black Rook";
                Piece["BN"] = "Black Knight";
                Piece["BlackKnight"] = "Black Knight";
                Piece["BB"] = "Black Bishop";
                Piece["BlackBishop"] = "Black Bishop";
                Piece["BP"] = "Black Pawn";
                Piece["BlackPawn"] = "Black Pawn";
                Piece["__"] = "";
                Piece["Empty"] = "";
            })(Piece || (Piece = {}));
            exports_1("Piece", Piece);
            BK = Piece.BK, BQ = Piece.BQ, BR = Piece.BR, BN = Piece.BN, BB = Piece.BB, BP = Piece.BP, WK = Piece.WK, WQ = Piece.WQ, WR = Piece.WR, WN = Piece.WN, WB = Piece.WB, WP = Piece.WP, Empty = Piece.Empty, __ = Piece.__;
            blackPieces = [BK, BQ, BR, BN, BB, BP];
            whitePieces = [WK, WQ, WR, WN, WB, WP];
            exports_1("BLACK_PIECES", BLACK_PIECES = Object.freeze(new Set(blackPieces)));
            exports_1("WHITE_PIECES", WHITE_PIECES = Object.freeze(new Set(whitePieces)));
            exports_1("ALL_PIECES", ALL_PIECES = Object.freeze(new Set(__spread(blackPieces, whitePieces))));
            exports_1("unicodeSymbols", unicodeSymbols = (_a = {},
                _a[WK] = '♔',
                _a[WQ] = '♕',
                _a[WR] = '♖',
                _a[WB] = '♗',
                _a[WN] = '♘',
                _a[WP] = '♙',
                _a[BK] = '♚',
                _a[BQ] = '♛',
                _a[BR] = '♜',
                _a[BB] = '♝',
                _a[BN] = '♞',
                _a[BP] = '♟',
                _a[__] = ' ',
                _a));
        }
    };
});
//# sourceMappingURL=pieces.js.map