import { playerAt, isOnBoard, isUnOccupiedByPlayer, positionName, displaceTo }
    from 'position-utils/index';
import { isInCheck } from 'check/index';
import { nextBoard } from 'moves/index';

import { knightVectors } from 'constants/move-vectors'

function knight(board: Board, moveFrom: GridCoordinates, kingPosition: GridCoordinates): Set<PositionName> {

    const player = playerAt(board, moveFrom);

    const doesntPutSelfInCheck = (position: GridCoordinates): boolean => !isInCheck(nextBoard(board, moveFrom, position), player, kingPosition);

    return new Set(knightVectors
        .map(vector => displaceTo(moveFrom, vector))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .filter(doesntPutSelfInCheck)
        .map(positionName));
}

export default knight;