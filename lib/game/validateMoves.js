System.register(["board", "moves"], function (exports_1, context_1) {
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
    var board_1, moves_1;
    var __moduleName = context_1 && context_1.id;
    function validateGameMoves(moves) {
        var e_1, _a;
        var boardStack = [board_1.initialBoard()];
        var annotationsStack = [board_1.initialBoardAnnotations()];
        try {
            for (var moves_2 = __values(moves), moves_2_1 = moves_2.next(); !moves_2_1.done; moves_2_1 = moves_2.next()) {
                var move = moves_2_1.value;
                var moveFrom = move[0];
                var moveTo = move[1];
                var currentBoard = boardStack[boardStack.length - 1];
                var currentAnnotations = annotationsStack[annotationsStack.length - 1];
                if (currentAnnotations.isCheckmate || !moves_1.canMove(currentBoard, moveFrom, moveTo, currentAnnotations)) {
                    return false;
                }
                var newBoard = board_1.nextBoard(currentBoard, moveFrom, moveTo);
                boardStack.push(newBoard);
                annotationsStack.push(board_1.nextBoardAnnotations(currentBoard, newBoard, currentAnnotations, moveFrom, moveTo));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (moves_2_1 && !moves_2_1.done && (_a = moves_2.return)) _a.call(moves_2);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
    }
    return {
        setters: [
            function (board_1_1) {
                board_1 = board_1_1;
            },
            function (moves_1_1) {
                moves_1 = moves_1_1;
            }
        ],
        execute: function () {
            exports_1("default", validateGameMoves);
        }
    };
});
//# sourceMappingURL=validateMoves.js.map