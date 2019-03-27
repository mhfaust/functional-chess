System.register(["check/index", "positions/index", "constants/move-vectors"], function (exports_1, context_1) {
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
    var index_1, index_2, move_vectors_1;
    var __moduleName = context_1 && context_1.id;
    function isCheckmate(board, defender, boardAnnotations) {
        var e_1, _a;
        var kingPosition = defender === "Black"
            ? boardAnnotations.blackKingPosition
            : boardAnnotations.whiteKingPosition;
        for (var i = 0; i < move_vectors_1.kingVectors.length; i++) {
            var vector = move_vectors_1.kingVectors[i];
            var kingMovesTo = index_2.displaceTo(kingPosition, vector);
            if (index_2.isOnBoard(kingMovesTo) && index_2.playerAt(board, kingMovesTo) !== defender) {
                if (!index_1.movesIntoCheck(board, kingPosition, kingMovesTo, boardAnnotations)) {
                    return false;
                }
            }
        }
        var attackLines = index_1.generateLinesOfAttack(board, defender, kingPosition);
        var checkLine = attackLines.next();
        if (checkLine.value === null) {
            return false;
        }
        var secondLine = attackLines.next();
        if (secondLine.value) {
            return true;
        }
        var attacker = index_2.otherPlayer(defender);
        try {
            for (var _b = __values(checkLine.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var positionOnCheckLine = _c.value;
                var defensiveMoves = index_1.generateLinesOfAttack(board, attacker, positionOnCheckLine);
                var defensiveMoveInfo = defensiveMoves.next();
                while (!defensiveMoveInfo.done) {
                    var defensiveMove = defensiveMoveInfo.value;
                    var defendingPieceMovesFrom = defensiveMove[defensiveMove.length - 1];
                    if (!index_1.movesIntoCheck(board, defendingPieceMovesFrom, positionOnCheckLine, boardAnnotations)) {
                        return false;
                    }
                    defensiveMoveInfo = defensiveMoves.next();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            }
        ],
        execute: function () {
            exports_1("default", isCheckmate);
        }
    };
});
//# sourceMappingURL=isCheckmate.js.map