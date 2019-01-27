import { playerAt, displaceFrom, isOnBoard, otherPlayer, pieceAt, locatePiece } 
    from 'position-utils/index';
import { blackAttackPatterns, whiteAttackPatterns} from 'constants/attackPatterns'
import { generateLinesOfAttack } from 'check/index'

function isInCheck(board: Board, player: Player, nullableKingPosition: GridCoordinates){
    
    const kingPosition = nullableKingPosition 
        ? nullableKingPosition 
        : locatePiece(board, player === Player.Black ? Piece.BlackKing : Piece.WhiteKing);

    const attackLines = generateLinesOfAttack(board, player, kingPosition);

    const checkLine = attackLines.next()
    
    return checkLine.value !== null;
}

export default isInCheck;