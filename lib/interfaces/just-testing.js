System.register(["constants/position"], function (exports_1, context_1) {
    "use strict";
    var position_1, x;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            x = {
                lastPlayerMoved: "White",
                lastPieceMoved: "White Pawn",
                lastMoveFrom: position_1.Position.E2,
                lastMoveTo: position_1.Position.E4,
                whoseTurn: "Black",
                isInCheck: false,
                isCheckmate: false,
                passantInfo: {
                    passedPosition: null,
                    pawnAt: null
                },
                CastlingPreclusions: {
                    Black: {
                        kingSide: false,
                        queenSide: false
                    },
                    White: {
                        kingSide: false,
                        queenSide: false
                    }
                },
                capturedPieces: {
                    Black: [],
                    White: []
                }
            };
            exports_1("default", (function () { return x; }));
        }
    };
});
//# sourceMappingURL=just-testing.js.map