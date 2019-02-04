System.register(["position-utils/index", "constants/move-vectors", "board-utils/pieces-shorthand"], function (exports_1, context_1) {
    "use strict";
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __values = (this && this.__values) || function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };
    var index_1, move_vectors_1, pieces_shorthand_1, whiteAttackPatterns, blackAttackPatterns;
    var __moduleName = context_1 && context_1.id;
    function generateLinesOfAttack(board, defender, defendedPosition) {
        var e_1, _a, e_2, _b, attacker, attackPatterns, attackLines, attackPatterns_1, attackPatterns_1_1, attackPattern, canMoveLikeThis, vectors, limit, vectors_1, vectors_1_1, vector, attackLine, examinedPosition, step, pieceThere, e_2_1, e_1_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    attacker = index_1.otherPlayer(defender);
                    attackPatterns = attacker === "Black" ? blackAttackPatterns : whiteAttackPatterns;
                    attackLines = new Map();
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 16, 17, 18]);
                    attackPatterns_1 = __values(attackPatterns), attackPatterns_1_1 = attackPatterns_1.next();
                    _c.label = 2;
                case 2:
                    if (!!attackPatterns_1_1.done) return [3, 15];
                    attackPattern = attackPatterns_1_1.value;
                    canMoveLikeThis = attackPattern.canMoveLikeThis, vectors = attackPattern.vectors, limit = attackPattern.limit;
                    _c.label = 3;
                case 3:
                    _c.trys.push([3, 12, 13, 14]);
                    vectors_1 = __values(vectors), vectors_1_1 = vectors_1.next();
                    _c.label = 4;
                case 4:
                    if (!!vectors_1_1.done) return [3, 11];
                    vector = vectors_1_1.value;
                    attackLine = [];
                    examinedPosition = index_1.displaceFrom(defendedPosition, vector);
                    step = 0;
                    _c.label = 5;
                case 5:
                    if (!(index_1.isOnBoard(examinedPosition) && ++step)) return [3, 10];
                    attackLine.push(examinedPosition);
                    pieceThere = index_1.pieceAt(board, examinedPosition);
                    if (!pieceThere) return [3, 8];
                    if (!(index_1.playerAt(board, examinedPosition) === attacker
                        && canMoveLikeThis.has(pieceThere)
                        && !attackLines.has(index_1.positionName(examinedPosition)))) return [3, 7];
                    return [4, attackLine];
                case 6:
                    _c.sent();
                    attackLines.set(index_1.positionName(examinedPosition), attackLine);
                    _c.label = 7;
                case 7: return [3, 10];
                case 8:
                    if (limit && step === limit) {
                        return [3, 10];
                    }
                    _c.label = 9;
                case 9:
                    examinedPosition = index_1.displaceFrom(examinedPosition, vector);
                    return [3, 5];
                case 10:
                    vectors_1_1 = vectors_1.next();
                    return [3, 4];
                case 11: return [3, 14];
                case 12:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 14];
                case 13:
                    try {
                        if (vectors_1_1 && !vectors_1_1.done && (_b = vectors_1["return"])) _b.call(vectors_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 14:
                    attackPatterns_1_1 = attackPatterns_1.next();
                    return [3, 2];
                case 15: return [3, 18];
                case 16:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 18];
                case 17:
                    try {
                        if (attackPatterns_1_1 && !attackPatterns_1_1.done && (_a = attackPatterns_1["return"])) _a.call(attackPatterns_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 18: return [2, null];
            }
        });
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (move_vectors_1_1) {
                move_vectors_1 = move_vectors_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            }
        ],
        execute: function () {
            whiteAttackPatterns = [
                { vectors: move_vectors_1.pawnWhiteAttackVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WP, pieces_shorthand_1.WQ, pieces_shorthand_1.WB, pieces_shorthand_1.WK]), limit: 1 },
                { vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WK, pieces_shorthand_1.WQ]), limit: 1 },
                { vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WN]), limit: 1 },
                { vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WB, pieces_shorthand_1.WQ]), limit: 0 },
                { vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([pieces_shorthand_1.WR, pieces_shorthand_1.WQ]), limit: 0 },
            ];
            blackAttackPatterns = [
                { vectors: move_vectors_1.pawnBlackAttackVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BP, pieces_shorthand_1.BQ, pieces_shorthand_1.BB, pieces_shorthand_1.BK]), limit: 1 },
                { vectors: move_vectors_1.kingVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BK, pieces_shorthand_1.BQ]), limit: 1 },
                { vectors: move_vectors_1.knightVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BN]), limit: 1 },
                { vectors: move_vectors_1.bishopVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BB, pieces_shorthand_1.BQ]), limit: 0 },
                { vectors: move_vectors_1.rookVectors, canMoveLikeThis: new Set([pieces_shorthand_1.BR, pieces_shorthand_1.BQ]), limit: 0 },
            ];
            exports_1("default", generateLinesOfAttack);
        }
    };
});
//# sourceMappingURL=generateLinesOfAttack.js.map