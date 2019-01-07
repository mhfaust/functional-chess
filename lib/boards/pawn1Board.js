System.register(["constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, BQ = pieces_1.Piece.BQ, BR = pieces_1.Piece.BR, BN = pieces_1.Piece.BN, BB = pieces_1.Piece.BB, BP = pieces_1.Piece.BP, WK = pieces_1.Piece.WK, WQ = pieces_1.Piece.WQ, WR = pieces_1.Piece.WR, WN = pieces_1.Piece.WN, WB = pieces_1.Piece.WB, WP = pieces_1.Piece.WP, __ = pieces_1.Piece.__;
            exports_1("default", (function () { return [
                [WR, WP, __, __, __, __, BP, BR],
                [WN, WP, __, BP, __, __, __, BN],
                [WB, __, WP, __, BP, __, __, BB],
                [WQ, __, __, WP, __, BP, __, BQ],
                [WK, WP, __, __, BP, __, __, BK],
                [WB, WP, __, __, __, __, BP, BB],
                [WN, WP, __, __, BP, __, __, BN],
                [WR, __, __, WP, BP, __, __, BR],
            ]; }));
        }
    };
});
//# sourceMappingURL=pawn1Board.js.map