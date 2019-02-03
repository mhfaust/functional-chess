System.register(["board-utils/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var index_1, algebraic_1, x;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            x = {
                board: index_1.initialBoard(),
                lastPlayerMoved: "White",
                lastPieceMoved: "White Pawn",
                lastMoveFrom: algebraic_1.Position.E2,
                lastMoveTo: algebraic_1.Position.E4,
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