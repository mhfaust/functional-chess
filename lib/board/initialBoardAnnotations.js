System.register(["constants/position"], function (exports_1, context_1) {
    "use strict";
    var position_1;
    var __moduleName = context_1 && context_1.id;
    function initialBoardAnnotations() {
        return {
            lastPlayerMoved: null,
            lastPieceMoved: null,
            lastMoveFrom: null,
            lastMoveTo: null,
            whoseTurn: "White",
            isInCheck: false,
            isCheckmate: false,
            capturedBlackPieces: [],
            capturedWhitePieces: [],
            blackKingPosition: position_1.Position.E1,
            whiteKingPosition: position_1.Position.E8,
            blackKingSideCastlingPrecluded: false,
            blackQueenSideCastlingPrecluded: false,
            whiteKingSideCastlingPrecluded: false,
            whiteQueenSideCastlingPrecluded: false,
            passedPosition: null,
            pawnAt: null
        };
    }
    return {
        setters: [
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            exports_1("default", initialBoardAnnotations);
        }
    };
});
//# sourceMappingURL=initialBoardAnnotations.js.map