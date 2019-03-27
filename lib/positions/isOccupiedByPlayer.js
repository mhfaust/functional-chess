System.register(["./playerAt", "./isUnOccupied"], function (exports_1, context_1) {
    "use strict";
    var playerAt_1, isUnOccupied_1;
    var __moduleName = context_1 && context_1.id;
    function isOccupiedByPlayer(board, position, player) {
        if (isUnOccupied_1.default(board, position))
            return false;
        else
            return playerAt_1.default(board, position) === player;
    }
    return {
        setters: [
            function (playerAt_1_1) {
                playerAt_1 = playerAt_1_1;
            },
            function (isUnOccupied_1_1) {
                isUnOccupied_1 = isUnOccupied_1_1;
            }
        ],
        execute: function () {
            exports_1("default", isOccupiedByPlayer);
        }
    };
});
//# sourceMappingURL=isOccupiedByPlayer.js.map