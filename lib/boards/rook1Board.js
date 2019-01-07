System.register(["constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, BK, BR, BP, WP, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BK = pieces_1.Piece.BK, BR = pieces_1.Piece.BR, BP = pieces_1.Piece.BP, WP = pieces_1.Piece.WP, __ = pieces_1.Piece.__;
            exports_1("default", (function () { return [
                [__, __, __, __, __, __, __, __],
                [__, __, __, BP, __, __, __, __],
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, __, __, __, __],
                [__, WP, __, BR, __, __, __, BK],
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, __, __, __, __],
                [__, __, __, WP, __, __, __, __],
            ]; }));
        }
    };
});
//# sourceMappingURL=rook1Board.js.map