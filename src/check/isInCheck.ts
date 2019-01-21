import { playerAt, displaceFrom, isOnBoard, otherPlayer, pieceAt, locatePiece } 
    from 'position-utils/index';
import { blackAttackPatterns, whiteAttackPatterns} from 'constants/attackPatterns'

function isInCheck(board: Board, player: string, nullableKingPosition: GridCoordinates){
    
    const kingPosition = nullableKingPosition 
        ? nullableKingPosition 
        : locatePiece(board, player === Player.Black ? Piece.BlackKing : Piece.WhiteKing);

    const opponent = otherPlayer(player);
    let attackPatterns = opponent === Player.Black ? blackAttackPatterns : whiteAttackPatterns;

    for(let i = 0; i < attackPatterns.length; i++){

        const attackPattern = attackPatterns[i]
        const canMoveLikeThis: Set<string> = attackPattern.canMoveLikeThis;

        const thisAttackPatternSucceeds = attackPattern.vectors.some((vector) => {
            
            let examinedPosition = displaceFrom(kingPosition, vector);
            while(isOnBoard(examinedPosition)){

                const pieceThere = pieceAt(board, examinedPosition);
                if(pieceThere){
                    return playerAt(board, examinedPosition) === opponent 
                        && canMoveLikeThis.has(pieceThere);
                } 
                else if(attackPattern.onlyOnce){
                    return false;
                }
                examinedPosition = displaceFrom(examinedPosition, vector);
            }
            return false;
        });
        if(thisAttackPatternSucceeds)
            return true;
    }
    return false;
}

export default isInCheck;