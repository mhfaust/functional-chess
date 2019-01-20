System.register(["position-utils/index", "constants/pieces", "constants/attackPatterns"], function (exports_1, context_1) {
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
    var index_1, pieces_1, attackPatterns_1;
    var __moduleName = context_1 && context_1.id;
    function generateLinesOfAttack(board, defender, defendedPosition) {
        var e_1, _a, e_2, _b, attacker, attackPatterns, defendedPiece, isCheckCheck, attackLines, attackPatterns_2, attackPatterns_2_1, attackPattern, canMoveLikeThis, _c, _d, vector, attackLine, examinedPosition, pieceThere, algebrName, e_2_1, e_1_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    attacker = index_1.otherPlayer(defender);
                    attackPatterns = attacker === "Black" ? attackPatterns_1.blackAttackPatterns : attackPatterns_1.whiteAttackPatterns;
                    defendedPiece = index_1.pieceAt(board, defendedPosition);
                    isCheckCheck = defendedPiece === pieces_1.Piece.WK || defendedPiece == pieces_1.Piece.BK;
                    attackLines = new Map();
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 17, 18, 19]);
                    attackPatterns_2 = __values(attackPatterns), attackPatterns_2_1 = attackPatterns_2.next();
                    _e.label = 2;
                case 2:
                    if (!!attackPatterns_2_1.done) return [3, 16];
                    attackPattern = attackPatterns_2_1.value;
                    canMoveLikeThis = attackPattern.canMoveLikeThis;
                    _e.label = 3;
                case 3:
                    _e.trys.push([3, 12, 13, 14]);
                    _c = __values(attackPattern.vectors), _d = _c.next();
                    _e.label = 4;
                case 4:
                    if (!!_d.done) return [3, 11];
                    vector = _d.value;
                    attackLine = [];
                    examinedPosition = index_1.displaceFrom(defendedPosition, vector);
                    _e.label = 5;
                case 5:
                    if (!index_1.isOnBoard(examinedPosition)) return [3, 10];
                    attackLine.push(examinedPosition);
                    pieceThere = index_1.pieceAt(board, examinedPosition);
                    if (!pieceThere) return [3, 8];
                    if (!(index_1.playerAt(board, examinedPosition) === attacker && canMoveLikeThis.has(pieceThere))) return [3, 7];
                    algebrName = index_1.algebraicName(examinedPosition);
                    if (!!attackLines.has(algebrName)) return [3, 7];
                    return [4, attackLine];
                case 6:
                    _e.sent();
                    attackLines.set(index_1.algebraicName(examinedPosition), attackLine);
                    _e.label = 7;
                case 7: return [3, 10];
                case 8:
                    if (attackPattern.onlyOnce) {
                        return [3, 10];
                    }
                    _e.label = 9;
                case 9:
                    examinedPosition = index_1.displaceFrom(examinedPosition, vector);
                    return [3, 5];
                case 10:
                    _d = _c.next();
                    return [3, 4];
                case 11: return [3, 14];
                case 12:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 14];
                case 13:
                    try {
                        if (_d && !_d.done && (_b = _c["return"])) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 14:
                    if (isCheckCheck && attackLines.size === 2) {
                        return [3, 16];
                    }
                    _e.label = 15;
                case 15:
                    attackPatterns_2_1 = attackPatterns_2.next();
                    return [3, 2];
                case 16: return [3, 19];
                case 17:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 19];
                case 18:
                    try {
                        if (attackPatterns_2_1 && !attackPatterns_2_1.done && (_a = attackPatterns_2["return"])) _a.call(attackPatterns_2);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 19: return [2, null];
            }
        });
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (pieces_1_1) {
                pieces_1 = pieces_1_1;
            },
            function (attackPatterns_1_1) {
                attackPatterns_1 = attackPatterns_1_1;
            }
        ],
        execute: function () {
            exports_1("default", generateLinesOfAttack);
        }
    };
});
//# sourceMappingURL=generateLinesOfAttack.js.map