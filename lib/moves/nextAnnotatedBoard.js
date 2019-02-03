System.register(["moves/nextBoard", "position-utils/index", "check/index", "constants/algebraic"], function (exports_1, context_1) {
    "use strict";
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    var nextBoard_1, index_1, index_2, algebraic_1, makePassantInfo, makeCapturedPieces;
    var __moduleName = context_1 && context_1.id;
    function nextAnnotatedBoard(previous, pieceMovedFromPosition, pieceMovedToPosition) {
        var lastMoved = index_1.playerAt(previous.board, pieceMovedFromPosition);
        var nextPlayer = index_1.otherPlayer(lastMoved);
        var board = nextBoard_1["default"](previous.board, pieceMovedFromPosition, pieceMovedToPosition);
        var nextPlayerKingPosition = index_1.locatePiece(board, nextPlayer === "Black" ? "Black King" : "White King");
        var nextTurnIsInCheck = index_2.isInCheck(board, nextPlayer, nextPlayerKingPosition);
        var nextTurnIsCheckmate = index_2.isCheckmate(board, nextPlayer, nextPlayerKingPosition);
        var movedFrom = function (from) { return index_1.areSamePositions(pieceMovedFromPosition, from); };
        var next = {
            board: board,
            lastPlayerMoved: lastMoved,
            lastPieceMoved: "White Pawn",
            lastMoveFrom: pieceMovedFromPosition,
            lastMoveTo: pieceMovedToPosition,
            whoseTurn: nextPlayer,
            isInCheck: nextTurnIsInCheck,
            isCheckmate: nextTurnIsCheckmate,
            passantInfo: makePassantInfo(previous.board, pieceMovedFromPosition, pieceMovedToPosition),
            CastlingPreclusions: {
                Black: {
                    kingSide: previous.CastlingPreclusions.Black.kingSide || movedFrom(algebraic_1.Position.F8) || movedFrom(algebraic_1.Position.H8),
                    queenSide: previous.CastlingPreclusions.Black.queenSide || movedFrom(algebraic_1.Position.F8) || movedFrom(algebraic_1.Position.A8)
                },
                White: {
                    kingSide: previous.CastlingPreclusions.White.kingSide || movedFrom(algebraic_1.Position.F1) || movedFrom(algebraic_1.Position.H1),
                    queenSide: previous.CastlingPreclusions.White.queenSide || movedFrom(algebraic_1.Position.F1) || movedFrom(algebraic_1.Position.A1)
                }
            },
            capturedPieces: {
                Black: makeCapturedPieces(previous.board, previous.capturedPieces.Black, "Black", pieceMovedToPosition),
                White: makeCapturedPieces(previous.board, previous.capturedPieces.White, "White", pieceMovedToPosition)
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
            },
            function (algebraic_1_1) {
                algebraic_1 = algebraic_1_1;
            }
        ],
        execute: function () {
            makePassantInfo = function (prevBoard, from, to) {
                var piece = index_1.pieceAt(prevBoard, from);
                if (piece === "Black Pawn" && index_1.rank(from) === 6 && index_1.rank(to) === 4) {
                    return {
                        pawnAt: to,
                        passedPosition: [index_1.file(to), 5]
                    };
                }
                else if (piece !== "White Pawn" && index_1.rank(from) === 1 && index_1.rank(to) === 3) {
                    return {
                        pawnAt: to,
                        passedPosition: [index_1.file(to), 2]
                    };
                }
                return null;
            };
            makeCapturedPieces = function (board, prevCaptures, defender, moveTo) {
                return index_1.playerAt(board, moveTo) === defender
                    ? __spread(prevCaptures, [index_1.pieceAt(board, moveTo)]) : prevCaptures;
            };
            exports_1("default", nextAnnotatedBoard);
        }
    };
});
//# sourceMappingURL=nextAnnotatedBoard.js.map