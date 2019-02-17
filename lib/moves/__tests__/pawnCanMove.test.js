System.register(["moves/pawnCanMove", "board-utils/pieces-shorthand", "constants/position", "board-utils/kingPositions"], function (exports_1, context_1) {
    "use strict";
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var pawnCanMove_1, pieces_shorthand_1, position_1, kingPositions_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pawnCanMove_1_1) {
                pawnCanMove_1 = pawnCanMove_1_1;
            },
            function (pieces_shorthand_1_1) {
                pieces_shorthand_1 = pieces_shorthand_1_1;
            },
            function (position_1_1) {
                position_1 = position_1_1;
            },
            function (kingPositions_1_1) {
                kingPositions_1 = kingPositions_1_1;
            }
        ],
        execute: function () {
            describe('pawnCanMove', function () {
                var board = [
                    [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                    [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                    [pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB],
                    [pieces_shorthand_1.WQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                    [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                    [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                    [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                    [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                ];
                describe('white', function () {
                    it('can move one space forward when NOT blocked', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.C3, position_1.Position.C4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('cannot move one space forward when IS blocked', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.H4, position_1.Position.H5, annotations);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.D4, position_1.Position.E5, annotations);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.C3, position_1.Position.B4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('cannot move foward left to empty square', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.G2, position_1.Position.F3, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move foward right to empty square', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.E2, position_1.Position.F3, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move backward', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.G5, position_1.Position.H5, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.H4, position_1.Position.G4, annotations);
                        expect(answer).toBe(false);
                    });
                });
                describe('black', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BR],
                    ];
                    it('can move one space forward when NOT blocked', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.E5, position_1.Position.E4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('can move one space forward when IS blocked', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.D5, position_1.Position.D4, annotations);
                        expect(answer).toBe(false);
                    });
                    it('can capture forward right', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.E5, position_1.Position.D4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('can capture forward left', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.G5, position_1.Position.H4, annotations);
                        expect(answer).toBe(true);
                    });
                    it('cannot move backward', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.B4, position_1.Position.B5, annotations);
                        expect(answer).toBe(false);
                    });
                    it('cannot move sideways', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.H4, position_1.Position.G4, annotations);
                        expect(answer).toBe(false);
                    });
                });
                describe('en-passant rule', function () {
                    var board = [
                        [pieces_shorthand_1.WR, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WQ, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BQ],
                        [pieces_shorthand_1.WK, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BK],
                        [pieces_shorthand_1.WB, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BB],
                        [pieces_shorthand_1.WN, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.BN],
                        [pieces_shorthand_1.WR, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.__, pieces_shorthand_1.WP, pieces_shorthand_1.__, pieces_shorthand_1.BP, pieces_shorthand_1.BR],
                    ];
                    it('black pawn can attack a square passed by a white pawn moving from rank 2 to 4', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: position_1.Position.E3, pawnAt: position_1.Position.E4 });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, annotations);
                        expect(answer).toBe(true);
                    });
                    it('black pawn cannot attack a passant-looking square if passant info is null', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answerNullPassantInfo = pawnCanMove_1["default"](board, position_1.Position.D4, position_1.Position.E3, annotations);
                        expect(answerNullPassantInfo).toBe(false);
                    });
                    it('white pawn can attack a square passed by a black pawn moving from rank 2 to 4', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: position_1.Position.G6, pawnAt: position_1.Position.G5 });
                        var answer = pawnCanMove_1["default"](board, position_1.Position.H5, position_1.Position.G6, annotations);
                        expect(answer).toBe(true);
                    });
                    it('white pawn cannot attack a passant-looking square if passant info is null', function () {
                        var annotations = __assign({}, kingPositions_1["default"](board), { passedPosition: null, pawnAt: null });
                        var answerNullPassantInfo = pawnCanMove_1["default"](board, position_1.Position.H5, position_1.Position.G6, annotations);
                        expect(answerNullPassantInfo).toBe(false);
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=pawnCanMove.test.js.map