System.register(["constants/pieces", "moves/index", "check/index", "position-utils/index", "constants/move-vectors", "check/isInCheck"], function (exports_1, context_1) {
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
    var pieces_1, index_1, index_2, index_3, move_vectors_1, isInCheck_1;
    var __moduleName = context_1 && context_1.id;
    function isCheckmate(board, defender, kingPosition) {
        var e_1, _a;
        for (var i = 0; i < move_vectors_1.kingVectors.length; i++) {
            var vector = move_vectors_1.kingVectors[i];
            var kingMovesTo = index_3.displaceTo(kingPosition, vector);
            if (index_3.isOnBoard(kingMovesTo) && index_3.playerAt(board, kingMovesTo) !== defender) {
                var boardAfterMove = index_1.nextBoard(board, kingPosition, kingMovesTo);
                if (!isInCheck_1["default"](boardAfterMove, defender, kingMovesTo)) {
                    return false;
                }
            }
        }
        var attackLines = index_2.generateLinesOfAttack(board, defender, kingPosition);
        var checkLine = attackLines.next();
        if (checkLine.value === null) {
            return false;
        }
        var secondLine = attackLines.next();
        if (secondLine.value) {
            return true;
        }
        var attacker = index_3.otherPlayer(defender);
        var kingPiece = defender === pieces_1.Player.Black ? pieces_1.Piece.BlackKing : pieces_1.Piece.WhiteKing;
        try {
            for (var _b = __values(checkLine.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var positionOnCheckLine = _c.value;
                var defensiveMoves = index_2.generateLinesOfAttack(board, attacker, positionOnCheckLine);
                var defensiveMoveInfo = defensiveMoves.next();
                while (!defensiveMoveInfo.done) {
                    var defensiveMove = defensiveMoveInfo.value;
                    var defendingPieceMovesFrom = defensiveMove[defensiveMove.length - 1];
                    if (index_3.pieceAt(board, defendingPieceMovesFrom) !== kingPiece) {
                        var boardAfterDefensiveMove = index_1.nextBoard(board, defendingPieceMovesFrom, positionOnCheckLine);
                        if (!isInCheck_1["default"](boardAfterDefensiveMove, defender, kingPosition)) {
                            return false;
                        }
                    }
                    defensiveMoveInfo = defensiveMoves.next();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    }
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            },
            function (isInCheck_1_1) {
                isInCheck_1 = isInCheck_1_1;
            }
        ],
        execute: function () {
            exports_1("default", isCheckmate);
        }
    };
});
//# sourceMappingURL=isCheckmate.js.map