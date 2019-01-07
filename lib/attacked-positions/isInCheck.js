System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var __values = (this && this.__values) || function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function isInCheck(board, player, kingPosition) {
        var e_1, _a;
        var opponent = index_1.otherPlayer(player);
        var piecePositions = index_1.allPlayerPositions(board, player);
        var allPositionsAttackedByOpponent = new Set();
        try {
            for (var piecePositions_1 = __values(piecePositions), piecePositions_1_1 = piecePositions_1.next(); !piecePositions_1_1.done; piecePositions_1_1 = piecePositions_1.next()) {
                var piecePosition = piecePositions_1_1.value;
                var piece = piecePosition.piece, position = piecePosition.position;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (piecePositions_1_1 && !piecePositions_1_1.done && (_a = piecePositions_1["return"])) _a.call(piecePositions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", isInCheck);
        }
    };
});
//# sourceMappingURL=isInCheck.js.map