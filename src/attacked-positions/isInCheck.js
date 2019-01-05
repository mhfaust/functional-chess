import { playerAt, displaceTo, isOnBoard, isUnOccupied, isOccupiedByPlayer, 
    otherPlayer, coordinates, algebraicName } 
    from 'position-utils';
import { allPlayerPositions } from 'position-utils';
import { BLACK, WHITE } from '../constants/pieces';
import { rank, file } from '../position-utils';

function isInCheck(board, player){
    const opponent = otherPlayer(player);
    const positions = allPlayerPositions(board, player);
    const opponentAttacks = new Set();
    Object.entries(positions).array.forEach(({ piece, position }) => {
        
    });

}