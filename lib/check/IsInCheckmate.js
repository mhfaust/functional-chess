System.register(["constants/pieces", "moves/index", "check/index", "position-utils/index", "constants/move-vectors", "check/isInCheck"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, index_1, index_2, index_3, move_vectors_1, isInCheck_1;
    var __moduleName = context_1 && context_1.id;
    function isInCheckmate(board, defender, kingPosition) {
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
        var checkInfo = index_2.linesOfAttack(board, defender, kingPosition);
        if (checkInfo.length === 0) {
            return false;
        }
        if (checkInfo.length > 1) {
            return true;
        }
        var checkLine = checkInfo[0];
        var attacker = index_3.otherPlayer(defender);
        var kingPiece = defender === pieces_1.Player.Black ? pieces_1.Piece.BlackKing : pieces_1.Piece.WhiteKing;
        if (checkLine.some(function (positionOnCheckLine) { return index_2.linesOfAttack(board, attacker, positionOnCheckLine)
            .some(function (blockingMoveLine) {
            var blockingPieceMovesFrom = blockingMoveLine[blockingMoveLine.length - 1];
            if (index_3.pieceAt(board, blockingPieceMovesFrom) === kingPiece) {
                return false;
            }
            var boardAfterBlockingMove = index_1.nextBoard(board, blockingPieceMovesFrom, positionOnCheckLine);
            return !isInCheck_1["default"](boardAfterBlockingMove, defender, kingPosition);
        }); })) {
            return false;
        }
        ;
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
            exports_1("default", isInCheckmate);
        }
    };
});
//# sourceMappingURL=isInCheckmate.js.map