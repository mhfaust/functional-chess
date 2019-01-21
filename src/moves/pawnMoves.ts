import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
    otherPlayer, algebraicName, rank, file } 
    from 'position-utils/index';

function pawn(board: Board, initialPosition: GridCoordinates): Set<AlgebraicName> {
    const player = playerAt(board, initialPosition);

    const attackedPositions: Set<AlgebraicName> = new Set();

    const forwardDirection = player === Player.White ? 1 : -1;
    const initialRank = rank(initialPosition);
    const forward1 = displaceTo(initialPosition, [0, forwardDirection]);
      
    if(isOnBoard(forward1) && isUnOccupied(board, forward1)){
        attackedPositions.add(algebraicName(forward1));

        const pawnHasNotMoved = (player === Player.White && initialRank === 1) || (player === Player.Black && initialRank === 6)
        if(pawnHasNotMoved){
            const forward2 = displaceTo(initialPosition, [0, 2 * forwardDirection]);
            if(isOnBoard(forward1) && isUnOccupied(board, forward2))
                attackedPositions.add(algebraicName(forward2));
        }
    }
    const moveVectors: Array<MoveVector> = [ [-1,forwardDirection], [1,forwardDirection] ];

    moveVectors.forEach(vector => {
        const attackedPosition = displaceTo(initialPosition, vector);
        if(isOnBoard(attackedPosition) && isOccupiedByPlayer(board, attackedPosition, otherPlayer(player)))
            attackedPositions.add(algebraicName(attackedPosition));
    });

    return attackedPositions;
}

export default pawn;