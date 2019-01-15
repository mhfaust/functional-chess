import { playerAt, displaceFrom, isOnBoard, otherPlayer, pieceAt, locatePiece } 
    from 'position-utils/index';
import { Piece, Player } from 'constants/pieces'
import { kingVectors, knightVectors, rookVectors, bishopVectors, pawnBlackAttackVectors, pawnWhiteAttackVectors } from 'constants/move-vectors'

const { BK,BQ,BR,BN,BB,BP,WK,WQ,WR,WN,WB,WP } = Piece;

const whiteAttackPatterns = [            
    {name: WP, vectors: pawnWhiteAttackVectors, canMoveLikeThis: new Set([WP, WQ, WB, WK]), onlyOnce: true},
    {name: WK, vectors: kingVectors, canMoveLikeThis: new Set([WK, WQ]), onlyOnce: true},
    {name: WN, vectors: knightVectors, canMoveLikeThis: new Set([WN]), onlyOnce: true},
    {name: WB, vectors: bishopVectors, canMoveLikeThis: new Set([WB, WQ]), onlyOnce: false},
    {name: WR, vectors: rookVectors, canMoveLikeThis: new Set([WR, WQ]), onlyOnce: false},
];

const blackAttackPatterns = [            
    {name: BP, vectors: pawnBlackAttackVectors, canMoveLikeThis: new Set([BP, BQ, BB, BK]), onlyOnce: true},
    {name: BK, vectors: kingVectors, canMoveLikeThis: new Set([BK, BQ]), onlyOnce: true},
    {name: BN, vectors: knightVectors, canMoveLikeThis: new Set([BN]), onlyOnce: true},
    {name: BB, vectors: bishopVectors, canMoveLikeThis: new Set([BB, BQ]), onlyOnce: false},
    {name: BR, vectors: rookVectors, canMoveLikeThis: new Set([BR, BQ]), onlyOnce: false},
];

function checkingPieces(board: Board, player: string, nullableKingPosition: GridCoordinates){
    
    const kingPosition = nullableKingPosition 
        ? nullableKingPosition 
        : locatePiece(board, player === Player.Black ? BK : WK);

    const opponent = otherPlayer(player);
    let attackPatterns = opponent === Player.Black ? blackAttackPatterns : whiteAttackPatterns;

    const info = [];
    function addInfo(piece: Piece, position: GridCoordinates){
        info.push({piece, position});
    }

    for(let i = 0; i < attackPatterns.length; i++){

        const attackPattern = attackPatterns[i]
        const canMoveLikeThis: Set<string> = attackPattern.canMoveLikeThis;

        attackPattern.vectors.forEach((vector) => {
            
            let examinedPosition = displaceFrom(kingPosition, vector);
            while(isOnBoard(examinedPosition)){

                const pieceThere = pieceAt(board, examinedPosition);
                if(pieceThere){
                    // if(playerAt(board, examinedPosition) === opponent && canMoveLikeThis.has(pieceThere))
                    //     addInfo(pieceThere, examinedPosition);
                    // return;
                } 
                else if(attackPattern.onlyOnce){
                    return false;
                }
                examinedPosition = displaceFrom(examinedPosition, vector);
            }
            return false;
        });
        //if(thisAttackPatternSucceeds)
            return true;
    }
    return false;
}

export default checkingPieces;