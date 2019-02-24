System.register(["positions/index", "check/index", "board-utils/index"], function (exports_1, context_1) {
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
    var index_1, index_2, index_3, makeCapturedPieces;
    var __moduleName = context_1 && context_1.id;
    function nextBoardAnnotations(previousBoard, currentBoard, previousAnnotations, pieceMovedFromPosition, pieceMovedToPosition) {
        var nextKingPositions = index_3.nextKingAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition, previousAnnotations);
        var nextPassantInfo = index_3.nextEnPassantAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition);
        var nextCastlingInfo = index_3.nextCastlingAnnotations(pieceMovedFromPosition, previousAnnotations);
        var lastMoved = index_1.playerAt(previousBoard, pieceMovedFromPosition);
        var nextPlayer = index_1.otherPlayer(lastMoved);
        var nextTurnIsInCheck = index_2.isInCheck(currentBoard, nextPlayer, nextKingPositions);
        var nextTurnIsCheckmate = index_2.isCheckmate(currentBoard, nextPlayer, nextKingPositions);
        var capturedBlackPieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedBlackPieces, "Black", pieceMovedToPosition);
        var capturedWhitePieces = makeCapturedPieces(previousBoard, previousAnnotations.capturedWhitePieces, "White", pieceMovedToPosition);
        var next = __assign({}, nextCastlingInfo, nextPassantInfo, nextKingPositions, {
            lastPlayerMoved: lastMoved,
            lastPieceMoved: "White Pawn",
            lastMoveFrom: pieceMovedFromPosition,
            lastMoveTo: pieceMovedToPosition,
            whoseTurn: nextPlayer,
            isInCheck: nextTurnIsInCheck,
            isCheckmate: nextTurnIsCheckmate,
            capturedBlackPieces: capturedBlackPieces,
            capturedWhitePieces: capturedWhitePieces
        });
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
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            makeCapturedPieces = function (board, prevCaptures, defender, moveTo) {
                return index_1.playerAt(board, moveTo) === defender
                    ? __spread(prevCaptures, [index_1.pieceAt(board, moveTo)]) : prevCaptures;
            };
            exports_1("default", nextBoardAnnotations);
        }
    };
});
//# sourceMappingURL=nextBoardAnnotations.js.map