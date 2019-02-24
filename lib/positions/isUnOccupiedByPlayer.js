System.register(["./playerAt", "positions/index"], function (exports_1, context_1) {
    "use strict";
    var playerAt_1, index_1;
    var __moduleName = context_1 && context_1.id;
    function isUnOccupiedByPlayer(board, position, player) {
        if (index_1.isUnOccupied(board, position))
            return true;
        else
            return playerAt_1["default"](board, position) !== player;
    }
    return {
        setters: [
            function (playerAt_1_1) {
                playerAt_1 = playerAt_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", isUnOccupiedByPlayer);
        }
    };
});
//# sourceMappingURL=isUnOccupiedByPlayer.js.map