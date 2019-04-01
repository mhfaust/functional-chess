System.register(["positions"], function (exports_1, context_1) {
    "use strict";
    var positions_1, nextEnPassantAnnotations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (positions_1_1) {
                positions_1 = positions_1_1;
            }
        ],
        execute: function () {
            nextEnPassantAnnotations = function (prevBoard, from, to) {
                var piece = positions_1.pieceAt(prevBoard, from);
                if (piece === "Black Pawn" && positions_1.rank(from) === 6 && positions_1.rank(to) === 4) {
                    return {
                        pawnAt: to,
                        passedPosition: [positions_1.file(to), 5]
                    };
                }
                else if (piece !== "White Pawn" && positions_1.rank(from) === 1 && positions_1.rank(to) === 3) {
                    return {
                        pawnAt: to,
                        passedPosition: [positions_1.file(to), 2]
                    };
                }
                return null;
            };
            exports_1("default", nextEnPassantAnnotations);
        }
    };
});
//# sourceMappingURL=nextEnPassantAnnotations.js.map