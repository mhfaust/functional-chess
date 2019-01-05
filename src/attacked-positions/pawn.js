import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, otherPlayer, algebraicName } 
    from 'position-utils';
import { BLACK, WHITE } from '../constants/pieces';
import { rank, file } from '../position-utils';

function pawn(board, initialPosition) {
    const player = playerAt(board, initialPosition);

    const attackedPositions = new Set();

    const forwardDirection = player === WHITE ? 1 : -1;
    const initialRank = rank(initialPosition);
    const forward1 = displaceTo(initialPosition, [0, forwardDirection]);
      
    if(isOnBoard(forward1) && isUnOccupied(board, forward1)){
        attackedPositions.add(algebraicName(forward1));

        const pawnHasNotMoved = (player === WHITE && initialRank === 1) || (player === BLACK && initialRank === 6)
        if(pawnHasNotMoved){
            const forward2 = displaceTo(initialPosition, [0, 2 * forwardDirection]);
            if(isOnBoard(forward1) && isUnOccupied(board, forward2))
                attackedPositions.add(algebraicName(forward2));
        }
    }
    const attackVectors = [ [-1,forwardDirection], [1,forwardDirection] ];

    attackVectors.forEach(vector => {
        const attackedPosition = displaceTo(initialPosition, vector);
        if(isOnBoard(attackedPosition) && isOccupiedByPlayer(board, attackedPosition, otherPlayer(player)))
            attackedPositions.add(algebraicName(attackedPosition));
    });

    return attackedPositions;
}

export default pawn;