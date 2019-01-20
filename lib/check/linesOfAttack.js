System.register(["position-utils/index", "constants/attackPatterns"], function (exports_1, context_1) {
    "use strict";
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var index_1, attackPatterns_1;
    var __moduleName = context_1 && context_1.id;
    function linesOfAttack(board, defender, defendedPosition) {
        var attacker = index_1.otherPlayer(defender);
        var attackPatterns = attacker === "Black" ? attackPatterns_1.blackAttackPatterns : attackPatterns_1.whiteAttackPatterns;
        var attackLines = new Map();
        var _loop_1 = function (i) {
            var attackPattern = attackPatterns[i];
            var canMoveLikeThis = attackPattern.canMoveLikeThis;
            attackPattern.vectors.forEach(function (vector) {
                var attackLine = [];
                var examinedPosition = index_1.displaceFrom(defendedPosition, vector);
                while (index_1.isOnBoard(examinedPosition)) {
                    attackLine.push(examinedPosition);
                    var pieceThere = index_1.pieceAt(board, examinedPosition);
                    if (pieceThere) {
                        if (index_1.playerAt(board, examinedPosition) === attacker && canMoveLikeThis.has(pieceThere))
                            attackLines.set(index_1.algebraicName(examinedPosition), attackLine);
                        return;
                    }
                    else if (attackPattern.onlyOnce) {
                        return;
                    }
                    examinedPosition = index_1.displaceFrom(examinedPosition, vector);
                }
                return;
            });
        };
        for (var i = 0; i < attackPatterns.length; i++) {
            _loop_1(i);
        }
        return Array.from(attackLines).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return value;
        });
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (attackPatterns_1_1) {
                attackPatterns_1 = attackPatterns_1_1;
            }
        ],
        execute: function () {
            exports_1("default", linesOfAttack);
        }
    };
});
//# sourceMappingURL=linesOfAttack.js.map