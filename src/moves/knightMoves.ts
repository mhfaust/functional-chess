import { 
    playerAt, 
    isOnBoard, 
    isUnOccupiedByPlayer, 
    positionName, 
    displaceTo } from 'positions';

import { knightVectors } from 'constants/move-vectors'
import movesIntoCheck from 'check/movesIntoCheck';

function knight(
    board: Board, 
    moveFrom: GridCoordinates, 
    boardAnnotations: KingAnnotations)
    : Set<PositionName> {

    const player = playerAt(board, moveFrom);

    return new Set(knightVectors
        .map(vector => displaceTo(moveFrom, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .filter(position => !movesIntoCheck(board, moveFrom, position, boardAnnotations))
        .map(positionName));
}

export default knight;