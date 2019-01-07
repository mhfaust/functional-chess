System.register(["position-utils"], function (exports_1, context_1) {
    "use strict";
    var position_utils_1;
    var __moduleName = context_1 && context_1.id;
    function rook(board, initialPosition) {
        var player = position_utils_1.playerAt(board, initialPosition);
        var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        var attackedPositions = [];
        directions.forEach(function (direction) {
            var checkPosition = position_utils_1.displaceTo(initialPosition, direction);
            while (position_utils_1.isOnBoard(checkPosition) && position_utils_1.isUnOccupied(board, checkPosition)) {
                attackedPositions.push(checkPosition);
                checkPosition = position_utils_1.displaceTo(checkPosition, direction);
            }
            if (position_utils_1.isOnBoard(checkPosition) && position_utils_1.isOccupiedByPlayer(board, checkPosition, position_utils_1.otherPlayer(player)))
                attackedPositions.push(checkPosition);
        });
        return new Set(attackedPositions.map(position_utils_1.algebraicName));
    }
    return {
        setters: [
            function (position_utils_1_1) {
                position_utils_1 = position_utils_1_1;
            }
        ],
        execute: function () {
            exports_1("default", rook);
        }
    };
});
//# sourceMappingURL=rook.js.map