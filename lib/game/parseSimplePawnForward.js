System.register(["constants/position"], function (exports_1, context_1) {
    "use strict";
    var position_1;
    var __moduleName = context_1 && context_1.id;
    function parseSimplePawnForward(notation, board) {
        return [position_1.Position.E1, position_1.Position.E1];
    }
    return {
        setters: [
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            exports_1("default", parseSimplePawnForward);
        }
    };
});
//# sourceMappingURL=parseSimplePawnForward.js.map