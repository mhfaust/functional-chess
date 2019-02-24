System.register(["../areSamePositions"], function (exports_1, context_1) {
    "use strict";
    var areSamePositions_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (areSamePositions_1_1) {
                areSamePositions_1 = areSamePositions_1_1;
            }
        ],
        execute: function () {
            describe('areSamePositions', function () {
                it('finds two positions are the same, even though their objects by reference are different', function () {
                    var p1 = [3, 3];
                    var p2 = [3, 3];
                    var areSameReference = p1 === p2;
                    expect(areSameReference).toBe(false);
                    expect(areSamePositions_1["default"](p1, p2)).toBe(true);
                });
                it('finds two positions are different when the vary only by file', function () {
                    var p1 = [2, 3];
                    var p2 = [3, 3];
                    var areSameReference = p1 === p2;
                    expect(areSameReference).toBe(false);
                    expect(areSamePositions_1["default"](p1, p2)).toBe(false);
                });
                it('finds two positions are different when the vary only by rank', function () {
                    var p1 = [2, 3];
                    var p2 = [3, 3];
                    var areSameReference = p1 === p2;
                    expect(areSameReference).toBe(false);
                    expect(areSamePositions_1["default"](p1, p2)).toBe(false);
                });
            });
        }
    };
});
//# sourceMappingURL=areSamePositions.test.js.map