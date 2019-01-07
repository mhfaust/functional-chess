System.register(["../position-utils", ".", "constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var _a, position_utils_1, _1, pieces_1, moveStrategies;
    var __moduleName = context_1 && context_1.id;
    function fromPosition(board, position) {
        var piece = position_utils_1.pieceAt(board, position);
        return moveStrategies[piece](board, position);
    }
    return {
        setters: [
            function (position_utils_1_1) {
                position_utils_1 = position_utils_1_1;
            },
            function (_1_1) {
                _1 = _1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            moveStrategies = (_a = {},
                _a[pieces_1.BK] = _1.king,
                _a[pieces_1.WK] = _1.king,
                _a[pieces_1.WQ] = _1.queen,
                _a[pieces_1.BQ] = _1.queen,
                _a[pieces_1.WB] = _1.bishop,
                _a[pieces_1.BB] = _1.bishop,
                _a[pieces_1.WN] = _1.knight,
                _a[pieces_1.BN] = _1.knight,
                _a[pieces_1.WR] = _1.rook,
                _a[pieces_1.BR] = _1.rook,
                _a[pieces_1.WP] = _1.pawn,
                _a[pieces_1.BP] = _1.pawn,
                _a);
        }
    };
});
//# sourceMappingURL=fromPosition.js.map