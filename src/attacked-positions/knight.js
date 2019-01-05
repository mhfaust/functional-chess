import { playerAt, isOnBoard, isUnOccupiedByPlayer, algebraicName, displaceTo }  from 'position-utils';

const knightDisplacements  = [[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1]];

const knight = (board, initialPosition) => {

    const player = playerAt(board, initialPosition);

    return new Set(knightDisplacements
        .map(displacement => displaceTo(initialPosition, displacement))
        .filter(isOnBoard)
        .filter(targetPosition => isUnOccupiedByPlayer(board, targetPosition, player))
        .map(algebraicName));
}

export default knight;