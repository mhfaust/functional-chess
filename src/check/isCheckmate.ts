import { Player, Piece } from 'constants/pieces';
import { nextBoard } from 'moves/index';
import { generateLinesOfAttack } from 'check/index'
import { displaceTo, otherPlayer, playerAt, isOnBoard, algebraicName, pieceAt } from 'position-utils/index';
import { kingVectors } from 'constants/move-vectors';
import { textRender } from 'board-utils/index'
import isInCheck from 'check/isInCheck';

function isCheckmate(board: Board, defender: Player, kingPosition: GridCoordinates){

    //is there any way to get out of check by moving the king?
    for(let i = 0; i < kingVectors.length; i++){
        const vector: MoveVector = kingVectors[i];
        const kingMovesTo = displaceTo(kingPosition, vector);

        if(isOnBoard(kingMovesTo) && playerAt(board, kingMovesTo) !== defender){
            
            const boardAfterMove  = nextBoard(board, kingPosition, kingMovesTo);
            if( !isInCheck(boardAfterMove, defender, kingMovesTo) ){
                return false;
            } 
        }   
    }

    const attackLines = generateLinesOfAttack(board, defender, kingPosition);
    const checkLine = attackLines.next();
    if(checkLine.value === null){
        return false;
    }
    
    //There's no way to remove check from 2 pieces w/o moving the king
    const secondLine = attackLines.next();
    if(secondLine.value){
        return true
    }

    const attacker = otherPlayer(defender);
    const kingPiece = defender === Player.Black ? Piece.BlackKing : Piece.WhiteKing

    for(let positionOnCheckLine of checkLine.value){
        const defensiveMoves = generateLinesOfAttack(board, attacker, positionOnCheckLine);
        //find any defensive moves onto this particular intervening grid-square,
        //this could either capture the checking piece or block it:
        let defensiveMoveInfo: IteratorResult<Array<GridCoordinates>> = defensiveMoves.next();
        while(!defensiveMoveInfo.done){
            //This will be a line of grid-coordinates, starting
            //one step away from the position on the check-line and 
            //ending at a defender's piece:
            const defensiveMove: Array<GridCoordinates> = defensiveMoveInfo.value;
            const defendingPieceMovesFrom: GridCoordinates = defensiveMove[defensiveMove.length -1];
            //we need to exclude moving the king piece  --
            //we already ruled out that it can move, and considering it
            //would complicate examining the resulting board for check:          
            if(pieceAt(board, defendingPieceMovesFrom) !== kingPiece){
                const boardAfterDefensiveMove = nextBoard(board, defendingPieceMovesFrom, positionOnCheckLine);
                if(!isInCheck(boardAfterDefensiveMove, defender, kingPosition)){
                    return false;
                }
            }
            defensiveMoveInfo = defensiveMoves.next();
        }
    }
    return true;
}

export default isCheckmate;

//ALGORITHM

// Assumes in check

// get all defended king's moves
//    if any --> not in check --> FALSE

//Find all checking pieces, with array of spaces from attacker to king 
//    if > 1 --> TRUE   (can't block 2 checking pieces with one move, 
//       since king can't move, it's checkmate )
//    
//    get array of spaces (attack-line) from attacker to king 
//        for each, get all pieces attacking each space
//        do any moves blocking or taking the piece take king out of check 
//                 (do isInCheck on resulting board)s
//            yes --> FALSE
//            no --> TRUE