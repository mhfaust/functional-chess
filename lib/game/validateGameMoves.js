System.register(["board/index", "moves/index"], function (exports_1, context_1) {
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
    var index_1, index_2;
    var __moduleName = context_1 && context_1.id;
    function validateGameMoves(moves) {
        var e_1, _a;
        var boardStack = [index_1.initialBoard()];
        var annotationsStack = [index_1.initialBoardAnnotations()];
        try {
            for (var moves_1 = __values(moves), moves_1_1 = moves_1.next(); !moves_1_1.done; moves_1_1 = moves_1.next()) {
                var move = moves_1_1.value;
                var moveFrom = move[0];
                var moveTo = move[1];
                var currentBoard = boardStack[boardStack.length - 1];
                var currentAnnotations = annotationsStack[annotationsStack.length - 1];
                if (currentAnnotations.isCheckmate || !index_2.canMove(currentBoard, moveFrom, moveTo, currentAnnotations)) {
                    return false;
                }
                var newBoard = index_1.nextBoard(currentBoard, moveFrom, moveTo);
                boardStack.push(newBoard);
                annotationsStack.push(index_1.nextBoardAnnotations(currentBoard, newBoard, currentAnnotations, moveFrom, moveTo));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (moves_1_1 && !moves_1_1.done && (_a = moves_1.return)) _a.call(moves_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("default", validateGameMoves);
        }
    };
});
//# sourceMappingURL=validateGameMoves.js.map