System.register(["constants/position"], function (exports_1, context_1) {
    "use strict";
    var position_1, queenSideCastle, kingSideCastle, rank, file, pos, P, ann, capture, r, pawnForward, pieceMove, pieceWithDepartureFile, pieceWithDepartureRank, pieceWithDeparturePos;
    var __moduleName = context_1 && context_1.id;
    function moveFromAlgebraicNotation(notation, board, player) {
        var pawnForwardNote = notation.match(pawnForward);
        if (pawnForwardNote) {
            return;
        }
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
            ann = "(" + P + ")?";
            capture = "(" + P + "|" + file + ")(x|:)?" + pos;
            r = new RegExp("((" + P + "|()?x?" + pos + ")(0-0-0)(0-0)");
            pawnForward = new RegExp("^" + pos + "$");
            pieceMove = "(" + P + ")(" + pos + ")";
            pieceWithDepartureFile = "(" + P + ")(" + file + ")(" + pos + ")";
            pieceWithDepartureRank = "(" + P + ")(" + rank + ")(" + pos + ")";
            pieceWithDeparturePos = "(" + P + ")(" + pos + ")(" + pos + ")";
        }
    };
});
//# sourceMappingURL=moveFromAlgebraicNotation.js.map