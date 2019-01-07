import { playerAt, isOnBoard, isUnOccupiedByPlayer, algebraicName, displaceTo }  
    from 'position-utils/index';

const kingMoveVectors: Array<MoveVector>  = [
    [1,1], [1,0] ,[1,-1],
    [0,1],       ,[0,-1],
    [-1,1],[-1,0],[-1,-1],
];

function king (board: Board, initialPosition: GridCoordinates): Set<string> {

    const player = playerAt(board, initialPosition);

    return new Set(kingMoveVectors
        .map(vector => displaceTo(initialPosition, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .map(algebraicName));
}

export default king;