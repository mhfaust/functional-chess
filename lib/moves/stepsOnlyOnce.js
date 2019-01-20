System.register(["constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, oneSteppers, stepsOnlyOnce;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            oneSteppers = new Set([
                pieces_1.Piece.BlackKing,
                pieces_1.Piece.WhiteKing,
                pieces_1.Piece.BlackKnight,
                pieces_1.Piece.WhiteKnight,
                pieces_1.Piece.BlackPawn,
                pieces_1.Piece.WhitePawn,
            ]);
            stepsOnlyOnce = function (piece) { return oneSteppers.has(piece); };
            exports_1("default", stepsOnlyOnce);
        }
    };
});
//# sourceMappingURL=stepsOnlyOnce.js.map