System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function updateKingPositions(board, moveFrom, moveTo, boardAnnotations) {
        var revisedKingPosition = index_1.pieceAt(board, moveFrom) === "Black King"
            ? { blackKingPosition: moveTo }
            : index_1.pieceAt(board, moveFrom) === "White King"
                ? { whiteKingPosition: moveTo }
                : {};
        return __assign({}, boardAnnotations, revisedKingPosition);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", updateKingPositions);
        }
    };
});
//# sourceMappingURL=updateKingPositions.js.map