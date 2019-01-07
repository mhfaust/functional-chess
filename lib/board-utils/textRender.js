System.register(["constants/pieces", "board-utils", "chalk"], function (exports_1, context_1) {
    "use strict";
    var pieces_1, board_utils_1, chalk_1, top, separRow, bottom, files, pieceRow;
    var __moduleName = context_1 && context_1.id;
    function asciiBoard(board) {
        return chalk_1["default"].bgWhite(chalk_1["default"].black("\n" + top + board_utils_1.rotateCounterClockwise(board).map(function (file, i) { return pieceRow(file, i); }).join(separRow) + bottom + files));
    }
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (board_utils_1_1) {
                board_utils_1 = board_utils_1_1;
            },
            function (chalk_1_1) {
                chalk_1 = chalk_1_1;
            }
        ],
        execute: function () {
            top = '   ┌───┬───┬───┬───┬───┬───┬───┬───┐  \n';
            separRow = '   ├───┼───┼───┼───┼───┼───┼───┼───┤  \n';
            bottom = '   └───┴───┴───┴───┴───┴───┴───┴───┘  \n';
            files = '     A   B   C   D   E   F   G   H    \n';
            pieceRow = function (row, i) { return " " + (7 - i + 1) + " \u2502 " + row.map(function (p) { return chalk_1["default"].blue(pieces_1.unicodeSymbols[p]); }).join(' │ ') + " \u2502  \n"; };
            exports_1("default", asciiBoard);
        }
    };
});
//# sourceMappingURL=textRender.js.map