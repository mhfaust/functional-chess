System.register(["board-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function rotateCounterClockwise(board) {
        var rotated = index_1.emptyBoard();
        board.forEach(function (arr, i) { return arr.forEach(function (piece, j) { return rotated[7 - j][i] = piece; }); });
        return rotated;
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", rotateCounterClockwise);
        }
    };
});
//# sourceMappingURL=rotateCounterClockwise.js.map