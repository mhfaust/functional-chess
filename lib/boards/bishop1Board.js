System.register(["constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, BR, BP, WB, WP, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BR = pieces_1.pieces.BR, BP = pieces_1.pieces.BP, WB = pieces_1.pieces.WB, WP = pieces_1.pieces.WP, __ = pieces_1.pieces.__;
            exports_1("default", (function () { return [
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, __, WP, __, __],
                [__, __, __, __, __, __, __, __],
                [__, __, __, WB, __, __, __, __],
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, __, __, BP, __],
                [__, __, __, __, __, __, __, BR],
            ]; }));
        }
    };
});
//# sourceMappingURL=bishop1Board.js.map