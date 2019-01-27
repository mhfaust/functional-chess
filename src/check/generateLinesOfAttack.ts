import { playerAt, displaceFrom, isOnBoard, otherPlayer, pieceAt, locatePiece, algebraicName }
    from 'position-utils/index';
import { blackAttackPatterns, whiteAttackPatterns} from 'constants/attackPatterns';


function * generateLinesOfAttack(board: Board, defender: Player, defendedPosition: GridCoordinates)
    : IterableIterator<Array<GridCoordinates>>
{

    const attacker = otherPlayer(defender);
    let attackPatterns = attacker === Player.Black ? blackAttackPatterns : whiteAttackPatterns;

    const defendedPiece = pieceAt(board, defendedPosition);
    const assessingCheck = defendedPiece === Piece.WhiteKing || defendedPiece === Piece.BlackKing;

    //Using a Map here only to ensure no duplicate entries
    const attackLines = new Map<AlgebraicName, Array<GridCoordinates>>();

    for(let attackPattern of attackPatterns){
        const { canMoveLikeThis, vectors, limit, } = attackPattern;

        for(let vector of vectors){   
            const attackLine = [];
            let examinedPosition = displaceFrom(defendedPosition, vector);
            let step = 0;
            while (isOnBoard(examinedPosition) && ++step) {
                attackLine.push(examinedPosition);
                const pieceThere = pieceAt(board, examinedPosition);
                
                if (pieceThere) {
                    
                    if (playerAt(board, examinedPosition) === attacker
                        && canMoveLikeThis.has(pieceThere) 
                        && !attackLines.has(algebraicName(examinedPosition))){
                    
                        yield attackLine; 

                        attackLines.set(algebraicName(examinedPosition), attackLine);
                    }
                    break;//found a piece, done with vector
                }
                else if (limit && step === limit) {
                    break;//attack patten only goes one or two out (knight, pawn, or king). done with vector.
                }
                //step++;
                examinedPosition = displaceFrom(examinedPosition, vector);
            }
        }
        if(assessingCheck && attackLines.size === 2){
            //done with outer attack-patterns loop -- there can't be more than 2 checking pieces.
            break;
        }
    }
    return null;
}

export default generateLinesOfAttack;