System.register(["positions/index", "check/index", "constants/position"], function (exports_1, context_1) {
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
    var index_1, index_2, position_1, makePassantInfo, makeCapturedPieces;
    var __moduleName = context_1 && context_1.id;
    function nextAnnotations(previousBoard, currentBoard, previousAnnotations, pieceMovedFromPosition, pieceMovedToPosition) {
        var lastMoved = index_1.playerAt(previousBoard, pieceMovedFromPosition);
        var nextPlayer = index_1.otherPlayer(lastMoved);
        var nextPlayerKingPosition = index_1.locatePiece(currentBoard, nextPlayer === "Black" ? "Black King" : "White King");
        var nextTurnIsInCheck = index_2.isInCheck(currentBoard, nextPlayer, nextPlayerKingPosition);
        var nextTurnIsCheckmate = index_2.isCheckmate(currentBoard, nextPlayer, nextPlayerKingPosition);
        var movedFrom = function (from) { return index_1.areSamePositions(pieceMovedFromPosition, from); };
        var next = {
            lastPlayerMoved: lastMoved,
            lastPieceMoved: "White Pawn",
            lastMoveFrom: pieceMovedFromPosition,
            lastMoveTo: pieceMovedToPosition,
            whoseTurn: nextPlayer,
            isInCheck: nextTurnIsInCheck,
            isCheckmate: nextTurnIsCheckmate,
            passantInfo: makePassantInfo(previousBoard, pieceMovedFromPosition, pieceMovedToPosition),
            CastlingPreclusions: {
                Black: {
                    kingSide: previousAnnotations.CastlingPreclusions.Black.kingSide || movedFrom(position_1.Position.F8) || movedFrom(position_1.Position.H8),
                    queenSide: previousAnnotations.CastlingPreclusions.Black.queenSide || movedFrom(position_1.Position.F8) || movedFrom(position_1.Position.A8)
                },
                White: {
                    kingSide: previousAnnotations.CastlingPreclusions.White.kingSide || movedFrom(position_1.Position.F1) || movedFrom(position_1.Position.H1),
                    queenSide: previousAnnotations.CastlingPreclusions.White.queenSide || movedFrom(position_1.Position.F1) || movedFrom(position_1.Position.A1)
                }
            },
            capturedPieces: {
                Black: makeCapturedPieces(previousBoard, previousAnnotations.capturedPieces.Black, "Black", pieceMovedToPosition),
                White: makeCapturedPieces(previousBoard, previousAnnotations.capturedPieces.White, "White", pieceMovedToPosition)
            }
        };
        return next;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
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
            exports_1("default", nextAnnotations);
        }
    };
});
//# sourceMappingURL=nextAnnotatedBoard.js.map