import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
        otherPlayer, algebraicName } 
    from 'position-utils/index';

const bishopMoveVectors: Array<MoveVector> = [
    [1,1], [1,-1], 
    [-1,-1], [-1,1]
];

function bishop(board: Board, initialPosition: GridCoordinates): Set<string> {
    
    const player = playerAt(board, initialPosition);

    const attackedPositions = [];

    bishopMoveVectors.forEach((vector) => {
        let examinedPosition = displaceTo(initialPosition, vector);
        while(isOnBoard(examinedPosition) && isUnOccupied(board, examinedPosition)){
            attackedPositions.push(examinedPosition);
            examinedPosition = displaceTo(examinedPosition, vector);
        }
        if(isOnBoard(examinedPosition) && isOccupiedByPlayer(board, examinedPosition, otherPlayer(player)))
            attackedPositions.push(examinedPosition);
    });

    return new Set(attackedPositions.map(algebraicName));
}

export default bishop;