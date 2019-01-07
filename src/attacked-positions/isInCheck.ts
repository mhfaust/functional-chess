import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
    otherPlayer, coordinates, algebraicName, allPlayerPositions, rank, file,
    pieceAt } from 'position-utils/index';
import { attackedPositions } from 'attacked-positions/index';
import { Player } from 'constants/pieces';

function isInCheck(board: Board, player: string, kingPosition: GridCoordinates){
    // return false;
    const opponent = otherPlayer(player);
    const piecePositions = allPlayerPositions(board, player);
    const allPositionsAttackedByOpponent = new Set<string>();
    for (let piecePosition of piecePositions) {
        const { piece, position } = piecePosition;
        
    };
    
}

export default isInCheck;