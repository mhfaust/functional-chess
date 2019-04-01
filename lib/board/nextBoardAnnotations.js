System.register(["positions", "check", "board"], function (exports_1, context_1) {
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
    var positions_1, check_1, board_1, makeCapturedPieces;
    var __moduleName = context_1 && context_1.id;
    function nextBoardAnnotations(previousBoard, currentBoard, previousAnnotations, pieceMovedFromPosition, pieceMovedToPosition) {
        var nextKingPositions = board_1.nextKingAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition, previousAnnotations);
        var nextPassantInfo = board_1.nextEnPassantAnnotations(currentBoard, pieceMovedFromPosition, pieceMovedToPosition);
        var nextCastlingInfo = board_1.nextCastlingAnnotations(pieceMovedFromPosition, previousAnnotations);
        var lastMoved = positions_1.playerAt(previousBoard, pieceMovedFromPosition);
        var nextPlayer = positions_1.otherPlayer(lastMoved);
        var nextTurnIsInCheck = check_1.isInCheck(currentBoard, nextPlayer, nextKingPositions);
        var nextTurnIsCheckmate = check_1.isCheckmate(currentBoard, nextPlayer, nextKingPositions);
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
            function (positions_1_1) {
                positions_1 = positions_1_1;
            },
            function (check_1_1) {
                check_1 = check_1_1;
            },
            function (board_1_1) {
                board_1 = board_1_1;
            }
        ],
        execute: function () {
            makeCapturedPieces = function (board, prevCaptures, defender, moveTo) {
                return positions_1.playerAt(board, moveTo) === defender
                    ? __spread(prevCaptures, [positions_1.pieceAt(board, moveTo)]) : prevCaptures;
            };
            exports_1("default", nextBoardAnnotations);
        }
    };
});
//# sourceMappingURL=nextBoardAnnotations.js.map