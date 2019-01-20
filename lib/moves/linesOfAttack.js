System.register(["position-utils/index", "constants/pieces", "constants/attackPatterns"], function (exports_1, context_1) {
    "use strict";
    var index_1, pieces_1, attackPatterns_1, BlackKing, WhiteKing;
    var __moduleName = context_1 && context_1.id;
    function linesOfAttack(board, defender, nullableKingPosition) {
        var kingPosition = nullableKingPosition
            ? nullableKingPosition
            : index_1.locatePiece(board, defender === pieces_1.Player.Black ? BlackKing : WhiteKing);
        var attacker = index_1.otherPlayer(defender);
        var attackPatterns = attacker === pieces_1.Player.Black ? attackPatterns_1.blackAttackPatterns : attackPatterns_1.whiteAttackPatterns;
        var attackLines = new Map();
        var _loop_1 = function (i) {
            var attackPattern = attackPatterns[i];
            var canMoveLikeThis = attackPattern.canMoveLikeThis;
            attackPattern.vectors.forEach(function (vector) {
                var attackLine = [];
                var examinedPosition = index_1.displaceFrom(kingPosition, vector);
                attackLine.push(examinedPosition);
                while (index_1.isOnBoard(examinedPosition)) {
                    var pieceThere = index_1.pieceAt(board, examinedPosition);
                    if (pieceThere) {
                        if (index_1.playerAt(board, examinedPosition) === attacker && canMoveLikeThis.has(pieceThere))
                            attackLines.set(index_1.algebraicName(examinedPosition), attackLine);
                        return;
                    }
                    else if (attackPattern.onlyOnce) {
                        return;
                    }
                    examinedPosition = index_1.displaceFrom(examinedPosition, vector);
                }
                return;
            });
        };
        for (var i = 0; i < attackPatterns.length; i++) {
            _loop_1(i);
        }
        return attackLines;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (attackPatterns_1_1) {
                attackPatterns_1 = attackPatterns_1_1;
            }
        ],
        execute: function () {
            BlackKing = pieces_1.Piece.BlackKing, WhiteKing = pieces_1.Piece.WhiteKing;
            exports_1("default", linesOfAttack);
        }
    };
});
//# sourceMappingURL=linesOfAttack.js.map