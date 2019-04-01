System.register(["positions", "constants/position"], function (exports_1, context_1) {
    "use strict";
    var positions_1, position_1;
    var __moduleName = context_1 && context_1.id;
    function nextCastlingAnnotations(pieceMovedFromPosition, previousAnnotations) {
        var movedFrom = function (from) { return positions_1.areSamePositions(pieceMovedFromPosition, from); };
        return {
            whiteQueenSideCastlingPrecluded: previousAnnotations.whiteQueenSideCastlingPrecluded || movedFrom(position_1.Position.F1) || movedFrom(position_1.Position.A1),
            whiteKingSideCastlingPrecluded: previousAnnotations.whiteKingSideCastlingPrecluded || movedFrom(position_1.Position.F1) || movedFrom(position_1.Position.H1),
            blackQueenSideCastlingPrecluded: previousAnnotations.blackQueenSideCastlingPrecluded || movedFrom(position_1.Position.F8) || movedFrom(position_1.Position.A8),
            blackKingSideCastlingPrecluded: previousAnnotations.blackKingSideCastlingPrecluded || movedFrom(position_1.Position.F8) || movedFrom(position_1.Position.H8),
        };
    }
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            exports_1("default", nextCastlingAnnotations);
        }
    };
});
//# sourceMappingURL=nextCastlingAnnotations.js.map