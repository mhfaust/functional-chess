System.register(["position-utils/index", "constants/pieces", "constants/attackPatterns"], function (exports_1, context_1) {
    "use strict";
    var index_1, pieces_1, attackPatterns_1;
    var __moduleName = context_1 && context_1.id;
    function isInCheck(board, player, nullableKingPosition) {
        var kingPosition = nullableKingPosition
            ? nullableKingPosition
            : index_1.locatePiece(board, player === pieces_1.Player.Black ? pieces_1.Piece.BlackKing : pieces_1.Piece.WhiteKing);
        var opponent = index_1.otherPlayer(player);
        var attackPatterns = opponent === pieces_1.Player.Black ? attackPatterns_1.blackAttackPatterns : attackPatterns_1.whiteAttackPatterns;
        var _loop_1 = function (i) {
            var attackPattern = attackPatterns[i];
            var canMoveLikeThis = attackPattern.canMoveLikeThis;
            var thisAttackPatternSucceeds = attackPattern.vectors.some(function (vector) {
                var examinedPosition = index_1.displaceFrom(kingPosition, vector);
                while (index_1.isOnBoard(examinedPosition)) {
                    var pieceThere = index_1.pieceAt(board, examinedPosition);
                    if (pieceThere) {
                        return index_1.playerAt(board, examinedPosition) === opponent
                            && canMoveLikeThis.has(pieceThere);
                    }
                    else if (attackPattern.onlyOnce) {
                        return false;
                    }
                    examinedPosition = index_1.displaceFrom(examinedPosition, vector);
                }
                return false;
            });
            if (thisAttackPatternSucceeds)
                return { value: true };
        };
        for (var i = 0; i < attackPatterns.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false;
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
            exports_1("default", isInCheck);
        }
    };
});
//# sourceMappingURL=isInCheck.js.map