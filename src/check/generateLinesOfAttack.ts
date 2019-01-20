import { playerAt, displaceFrom, isOnBoard, otherPlayer, pieceAt, locatePiece, algebraicName }
    from 'position-utils/index';
import { Piece } from 'constants/pieces';
import { blackAttackPatterns, whiteAttackPatterns} from 'constants/attackPatterns';


function * generateLinesOfAttack(board: Board, defender: string, defendedPosition: GridCoordinates){

    const attacker = otherPlayer(defender);
    let attackPatterns = attacker === Player.Black ? blackAttackPatterns : whiteAttackPatterns;

    //It is impossible for a king to be in check by more than 2 pieces.
    //We use that fact to short-circuit this algorithm when looking at a
    //king position.
    const defendedPiece = pieceAt(board, defendedPosition);
    const isCheckCheck = defendedPiece === Piece.WK || defendedPiece == Piece.BK;

    //Using a Set here only to ensure no duplicate entries,
    //because 1 vs > 1 is significant for checkmate detection algorithm:
    const attackLines = new Map<string, Array<GridCoordinates>>();

    for(let attackPattern of attackPatterns){
        const canMoveLikeThis: Set<string> = attackPattern.canMoveLikeThis;

        for(let vector of attackPattern.vectors){   
            const attackLine = [];
            let examinedPosition = displaceFrom(defendedPosition, vector);

            while (isOnBoard(examinedPosition)) {
                attackLine.push(examinedPosition);
                const pieceThere = pieceAt(board, examinedPosition);
                
                if (pieceThere) {
                    
                    if (playerAt(board, examinedPosition) === attacker && canMoveLikeThis.has(pieceThere)){
                        const algebrName = algebraicName(examinedPosition);    
                        
                        if(!attackLines.has(algebrName)){

                            yield attackLine; 

                            attackLines.set(algebraicName(examinedPosition), attackLine);
                        }
                    }
                    break;//found a piece, done with vector
                }
                else if (attackPattern.onlyOnce) {
                    break;//attack patten only goes one out (knight, pawn, or king). done with vector.
                }
                examinedPosition = displaceFrom(examinedPosition, vector);
            }
        }
        if(isCheckCheck && attackLines.size === 2){
            break;//there can't be more than 2 checking pieces.
        }
    }
    return null;
}

export default generateLinesOfAttack;