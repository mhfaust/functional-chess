System.register(["../constants/pieces"], function (exports_1, context_1) {
    "use strict";
    var _a, pieces_1, Black, White, opposites;
    var __moduleName = context_1 && context_1.id;
    function otherPlayer(player) {
        return opposites[player];
    }
    return {
        setters: [
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            }
        ],
        execute: function () {
            Black = pieces_1.Player.Black, White = pieces_1.Player.White;
            opposites = (_a = {},
                _a[Black] = White,
                _a[White] = Black,
                _a);
            exports_1("default", otherPlayer);
        }
    };
});
//# sourceMappingURL=otherPlayer.js.map