import { playerAt, isOnBoard, isUnOccupiedByPlayer, algebraicName, displaceTo }  
    from 'position-utils/index';

import { knightVectors } from 'constants/move-vectors'

function knight (board: Board, initialPosition: GridCoordinates): Set<string> {

    const player = playerAt(board, initialPosition);

    return new Set(knightVectors
        .map(vector => displaceTo(initialPosition, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .map(algebraicName));
}

export default knight;