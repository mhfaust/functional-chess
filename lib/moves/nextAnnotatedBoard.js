System.register(["moves/nextBoard", "position-utils/index", "check/index"], function (exports_1, context_1) {
    "use strict";
    var nextBoard_1, index_1, index_2;
    var __moduleName = context_1 && context_1.id;
    function nextAnnotatedBoard(previous, pieceMovedFromPosition, pieceMovedToPosition) {
        var lastMoved = index_1.playerAt(previous.board, pieceMovedFromPosition);
        var nextPlayer = index_1.otherPlayer(lastMoved);
        var board = nextBoard_1["default"](previous.board, pieceMovedFromPosition, pieceMovedToPosition);
        var nextPlayerKingPosition = index_1.locatePiece(board, nextPlayer === "Black" ? "Black King" : "White King");
        var nextTurnIsInCheck = index_2.isInCheck(board, nextPlayer, nextPlayerKingPosition);
        var nextTurnIsCheckmate = index_2.isCheckmate(board, nextPlayer, nextPlayerKingPosition);
        return {
            board: board,
            lastMoved: lastMoved,
            lastPieceMoved: "White Pawn",
            lastMoveFrom: pieceMovedFromPosition,
            lastMoveTo: pieceMovedToPosition,
            whoseTurn: nextPlayer,
            isInCheck: nextTurnIsInCheck,
            isCheckmate: nextTurnIsCheckmate,
            passantInfo: null,
            castlingInfo: {
                Black: {
                    kingEverMoved: false,
                    kingRookEverMoved: false,
                    queenRookEverMoved: false
                },
                White: {
                    kingEverMoved: false,
                    kingRookEverMoved: false,
                    queenRookEverMoved: false
                }
            },
            capturedPieces: {
                Black: [],
                White: []
            }
        };
        return previous;
    }
    return {
        setters: [
            function (nextBoard_1_1) {
                nextBoard_1 = nextBoard_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("default", nextAnnotatedBoard);
        }
    };
});
//# sourceMappingURL=nextAnnotatedBoard.js.map