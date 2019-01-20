import { playerAt, displaceFrom, isOnBoard, otherPlayer, pieceAt, locatePiece, algebraicName }
    from 'position-utils/index';
import { blackAttackPatterns, whiteAttackPatterns} from 'constants/attackPatterns';


function linesOfAttack(board: Board, defender: string, defendedPosition: GridCoordinates)
    : Array<Array<GridCoordinates>> {

    const attacker = otherPlayer(defender);
    let attackPatterns = attacker === Player.Black ? blackAttackPatterns : whiteAttackPatterns;

    //Using a Set here only to ensure no duplicate entries,
    //because 1 vs > 1 is significant for checkmate detection algorithm:
    const attackLines = new Map<string, Array<GridCoordinates>>();

    for (let i = 0; i < attackPatterns.length; i++) {

        const attackPattern = attackPatterns[i]
        const canMoveLikeThis: Set<string> = attackPattern.canMoveLikeThis;

        attackPattern.vectors.forEach((vector) => {
            const attackLine = [];
            let examinedPosition = displaceFrom(defendedPosition, vector);

            while (isOnBoard(examinedPosition)) {
                attackLine.push(examinedPosition);

                const pieceThere = pieceAt(board, examinedPosition);
                if (pieceThere) {
                    if (playerAt(board, examinedPosition) === attacker && canMoveLikeThis.has(pieceThere))
                        attackLines.set(algebraicName(examinedPosition), attackLine);
                    return;//found a piece, done with vector
                }
                else if (attackPattern.onlyOnce) {
                    return;//attack patten only goes one out (knight, pawn, or king). done with vector.
                }
                examinedPosition = displaceFrom(examinedPosition, vector);
                
            }
            return;
        });
    }
    return Array.from(attackLines).map(([key, value]) => value);
}

export default linesOfAttack;