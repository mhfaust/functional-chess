import { playerAt, isOnBoard, isUnOccupiedByPlayer, algebraicName, displaceTo }  
    from 'position-utils/index';

import { kingVectors } from 'constants/move-vectors'

function king (board: Board, initialPosition: GridCoordinates): Set<string> {

    const player = playerAt(board, initialPosition);

    return new Set(kingVectors
        .map(vector => displaceTo(initialPosition, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .map(algebraicName));
}

export default king;