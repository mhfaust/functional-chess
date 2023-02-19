import { generateLinesOfAttack } from 'check'
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';

function isInCheck(
    board:Board, 
    player:Player, 
    boardAnnotations: KingAnnotations)
    : boolean{

    const  kingPosition = player === Player.Black 
        ? boardAnnotations.blackKingPosition 
        : boardAnnotations.whiteKingPosition;

    const attackLines = generateLinesOfAttack(board, player, kingPosition);

    const checkLine = attackLines.next()
    
    return checkLine.value !== null;
}

export default isInCheck;