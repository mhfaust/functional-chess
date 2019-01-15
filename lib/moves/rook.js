System.register(["position-utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1;
    var __moduleName = context_1 && context_1.id;
    function rook(board, initialPosition) {
        var player = index_1.playerAt(board, initialPosition);
        var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        var attackedPositions = [];
        directions.forEach(function (direction) {
            var checkPosition = index_1.displaceTo(initialPosition, direction);
            while (index_1.isOnBoard(checkPosition) && index_1.isUnOccupied(board, checkPosition)) {
                attackedPositions.push(checkPosition);
                checkPosition = index_1.displaceTo(checkPosition, direction);
            }
            if (index_1.isOnBoard(checkPosition) && index_1.isOccupiedByPlayer(board, checkPosition, index_1.otherPlayer(player)))
                attackedPositions.push(checkPosition);
        });
        return new Set(attackedPositions.map(index_1.algebraicName));
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("default", rook);
        }
    };
});
//# sourceMappingURL=rook.js.map