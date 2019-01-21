System.register(["constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, BK, BQ, BR, BN, BB, BP, WK, WQ, WR, WN, WB, WP, Empty, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.pieces.BK, BQ = pieces_1.pieces.BQ, BR = pieces_1.pieces.BR, BN = pieces_1.pieces.BN, BB = pieces_1.pieces.BB, BP = pieces_1.pieces.BP, WK = pieces_1.pieces.WK, WQ = pieces_1.pieces.WQ, WR = pieces_1.pieces.WR, WN = pieces_1.pieces.WN, WB = pieces_1.pieces.WB, WP = pieces_1.pieces.WP, Empty = pieces_1.pieces.Empty, __ = pieces_1.pieces.__;
            exports_1("default", (function () { return [
                [WR, WP, __, __, __, __, BP, BR],
                [WN, WP, __, __, __, __, BP, BN],
                [WB, WP, __, __, __, __, BP, BB],
                [WQ, WP, __, __, __, __, BP, BQ],
                [WK, WP, __, __, __, __, BP, BK],
                [WB, WP, __, __, __, __, BP, BB],
                [WN, WP, __, __, __, __, BP, BN],
                [WR, WP, __, __, __, __, BP, BR],
            ]; }));
        }
    };
});
//# sourceMappingURL=initialBoard.js.map