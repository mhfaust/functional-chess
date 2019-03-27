System.register(["constants/position"], function (exports_1, context_1) {
    "use strict";
    var position_1, queenSideCastle, kingSideCastle, rank, file, pos, P, ann, capture, r, simplePawnForward, simplePieceMove, pieceWithDepartureFile, pieceWithDepartureRank, pieceWithDeparturePos;
    var __moduleName = context_1 && context_1.id;
    function moveFromAlgebraicNotation() {
        return [position_1.Position.E8, position_1.Position.E1];
    }
    return {
        setters: [
            function (position_1_1) {
                position_1 = position_1_1;
            }
        ],
        execute: function () {
            queenSideCastle = ('0-0-0');
            kingSideCastle = ('0-0');
            rank = '[1-8]';
            file = '[abcdefg]';
            pos = "" + file + rank;
            P = '[KQBNRP]';
            ann = "";
            capture = "(" + P + "|" + file + ")(x|:)?" + pos;
            r = new RegExp("((" + P + "|()?x?" + pos + ")(0-0-0)(0-0)");
            simplePawnForward = "^" + pos + "$";
            simplePieceMove = "(" + P + ")(" + pos + ")";
            pieceWithDepartureFile = "(" + P + ")(" + file + ")(" + pos + ")";
            pieceWithDepartureRank = "(" + P + ")(" + rank + ")(" + pos + ")";
            pieceWithDeparturePos = "(" + P + ")(" + pos + ")(" + pos + ")";
        }
    };
});
//# sourceMappingURL=moveFromAlgebraicNotation.js.map