System.register(["../position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, files;
    var __moduleName = context_1 && context_1.id;
    function algebraicName(position) {
        return files[index_1.file(position)] + (index_1.rank(position) + 1);
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            files = 'ABCDEFGH';
            exports_1("default", algebraicName);
        }
    };
});
//# sourceMappingURL=algebraicName.js.map