System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, nextPassantInfo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            nextPassantInfo = function (prevBoard, from, to) {
                var piece = index_1.pieceAt(prevBoard, from);
                if (piece === "Black Pawn" && index_1.rank(from) === 6 && index_1.rank(to) === 4) {
                    return {
                        pawnAt: to,
                        passedPosition: [index_1.file(to), 5]
                    };
                }
                else if (piece !== "White Pawn" && index_1.rank(from) === 1 && index_1.rank(to) === 3) {
                    return {
                        pawnAt: to,
                        passedPosition: [index_1.file(to), 2]
                    };
                }
                return null;
            };
            exports_1("default", nextPassantInfo);
        }
    };
});
//# sourceMappingURL=nextPassantInfo.js.map