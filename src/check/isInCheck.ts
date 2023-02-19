import { generateLinesOfAttack } from 'check'
import { Player } from 'enums/player';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { Board } from 'types/Board';

function isInCheck(
    board: Board, 
    player: Player, 
    boardAnnotations: KingAnnotations)
    : boolean{

    const  kingPosition = player === 'Black' 
        ? boardAnnotations.blackKingPosition 
        : boardAnnotations.whiteKingPosition;

    const attackLines = generateLinesOfAttack(board, player, kingPosition);

    const checkLine = attackLines.next()
    
    return checkLine.value !== null;
}

export default isInCheck;