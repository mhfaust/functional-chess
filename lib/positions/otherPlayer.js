System.register([], function (exports_1, context_1) {
    "use strict";
    var _a, opposites;
    var __moduleName = context_1 && context_1.id;
    function otherPlayer(player) {
        return opposites[player];
    }
    return {
        setters: [],
        execute: function () {
            opposites = (_a = {},
                _a["Black"] = "White",
                _a["White"] = "Black",
                _a);
            exports_1("default", otherPlayer);
        }
    };
});
//# sourceMappingURL=otherPlayer.js.map