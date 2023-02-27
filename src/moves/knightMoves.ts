import { 
    playerAt, 
    isOnBoard, 
    isUnOccupiedByPlayer, 
    displaceTo 
} from 'positions';

import { knightVectors } from 'constants/move-vectors'
import movesIntoCheck from 'check/movesIntoCheck';
import { PositionName } from 'positions/positionName';
import { Board } from 'types/Board';

function knight(
    board: Board, 
    moveFrom: PositionName, 
): Set<PositionName> {

    const player = playerAt(board, moveFrom);

    return new Set(
        knightVectors
            .map(vector => displaceTo(moveFrom, vector))
            .filter(isOnBoard)
            .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
            .filter(position => !movesIntoCheck(board, moveFrom, position))
    );
}

export default knight;