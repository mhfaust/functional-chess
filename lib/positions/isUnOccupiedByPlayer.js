System.register(["./playerAt", "positions"], function (exports_1, context_1) {
    "use strict";
    var playerAt_1, positions_1;
    var __moduleName = context_1 && context_1.id;
    function isUnOccupiedByPlayer(board, position, player) {
        if (positions_1.isUnOccupied(board, position))
            return true;
        else
            return playerAt_1.default(board, position) !== player;
    }
    return {
        setters: [
            function (playerAt_1_1) {
                playerAt_1 = playerAt_1_1;
            },
            function (positions_1_1) {
                positions_1 = positions_1_1;
            }
        ],
        execute: function () {
            exports_1("default", isUnOccupiedByPlayer);
        }
    };
});
//# sourceMappingURL=isUnOccupiedByPlayer.js.map