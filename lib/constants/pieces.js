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
    var _a, Piece, pieces, blackPieces, whitePieces, BLACK_PIECES, WHITE_PIECES, ALL_PIECES, unicodeSymbols;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
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
            exports_1("pieces", pieces = {
                WK: Piece.WK,
                WhiteKing: Piece.WhiteKing,
                WQ: Piece.WhiteQueen,
                WhiteQueen: Piece.WhiteQueen,
                WR: Piece.WhiteRook,
                WhiteRook: Piece.WhiteRook,
                WN: Piece.WhiteKnight,
                WhiteKnight: Piece.WhiteKnight,
                WB: Piece.WhiteBishop,
                WhiteBishop: Piece.WhiteBishop,
                WP: Piece.WhitePawn,
                WhitePawn: Piece.WhitePawn,
                BK: Piece.BlackKing,
                BlackKing: Piece.BlackKing,
                BQ: Piece.BlackQueen,
                BlackQueen: Piece.BlackQueen,
                BR: Piece.BlackRook,
                BlackRook: Piece.BlackRook,
                BN: Piece.BlackKnight,
                BlackKnight: Piece.BlackKnight,
                BB: Piece.BlackBishop,
                BlackBishop: Piece.BlackBishop,
                BP: Piece.BlackPawn,
                BlackPawn: Piece.BlackPawn,
                __: '',
                Empty: ''
            });
            blackPieces = [Piece.BK, Piece.BQ, Piece.BR, Piece.BN, Piece.BB, Piece.BP];
            whitePieces = [Piece.WK, Piece.WQ, Piece.WR, Piece.WN, Piece.WB, Piece.WP];
            exports_1("BLACK_PIECES", BLACK_PIECES = Object.freeze(new Set(blackPieces)));
            exports_1("WHITE_PIECES", WHITE_PIECES = Object.freeze(new Set(whitePieces)));
            exports_1("ALL_PIECES", ALL_PIECES = Object.freeze(new Set(__spread(blackPieces, whitePieces))));
            exports_1("unicodeSymbols", unicodeSymbols = (_a = {},
                _a[Piece.WK] = '♔',
                _a[Piece.WQ] = '♕',
                _a[Piece.WR] = '♖',
                _a[Piece.WB] = '♗',
                _a[Piece.WN] = '♘',
                _a[Piece.WP] = '♙',
                _a[Piece.BK] = '♚',
                _a[Piece.BQ] = '♛',
                _a[Piece.BR] = '♜',
                _a[Piece.BB] = '♝',
                _a[Piece.BN] = '♞',
                _a[Piece.BP] = '♟',
                _a[Piece.__] = ' ',
                _a));
        }
    };
});
//# sourceMappingURL=pieces.js.map