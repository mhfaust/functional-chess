System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function displaceFrom(currentPosition, vector) {
        return [
            index_1.file(currentPosition) - index_1.file(vector),
            index_1.rank(currentPosition) - index_1.rank(vector)
        ];
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            ;
            exports_1("default", displaceFrom);
        }
    };
});
//# sourceMappingURL=displaceFrom.js.map