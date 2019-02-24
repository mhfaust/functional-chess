import { locatePiece } from 'positions/index';
import { generateLinesOfAttack } from 'check/index'

function isInCheck(board:Board, player:Player, boardAnnotations:HasKingPositions){

    const  kingPosition = player === Player.Black 
        ? boardAnnotations.blackKingPosition 
        : boardAnnotations.whiteKingPosition;

    const attackLines = generateLinesOfAttack(board, player, kingPosition);

    const checkLine = attackLines.next()
    
    return checkLine.value !== null;
}

export default isInCheck;