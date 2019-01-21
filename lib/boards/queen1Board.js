System.register(["constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, BP, WK, WQ, WR, __;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            BP = pieces_1.pieces.BP, WK = pieces_1.pieces.WK, WQ = pieces_1.pieces.WQ, WR = pieces_1.pieces.WR, __ = pieces_1.pieces.__;
            exports_1("default", (function () { return [
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, __, __, __, __],
                [__, WQ, __, WK, __, __, BP, __],
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, __, __, __, __],
                [__, __, __, __, BP, __, __, __],
                [__, WR, __, __, __, __, __, __],
                [__, __, __, __, __, __, __, __],
            ]; }));
        }
    };
});
//# sourceMappingURL=queen1Board.js.map