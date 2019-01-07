import { playerAt, isOnBoard, isUnOccupiedByPlayer, algebraicName, displaceTo }  
    from 'position-utils/index';

const moveVectors: Array<MoveVector>  = [
           [-1,-2],[1,-2],
    [-2,-1]              ,[2,-1],
    [-2, 1]              ,[2,1],
           [-1,2], [1,2]
];

function knight (board: Board, initialPosition: GridCoordinates): Set<string> {

    const player = playerAt(board, initialPosition);

    return new Set(moveVectors
        .map(vector => displaceTo(initialPosition, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .map(algebraicName));
}

export default knight;