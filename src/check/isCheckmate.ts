import { generateLinesOfAttack, movesIntoCheck } from 'check/index';
import { displaceTo, otherPlayer, playerAt, isOnBoard } from 'positions/index';
import { kingVectors } from 'constants/move-vectors';

function isCheckmate(board: Board, defender: Player, boardAnnotations: KingAnnotations){
    
    const  kingPosition = defender === Player.Black 
        ? boardAnnotations.blackKingPosition 
        : boardAnnotations.whiteKingPosition;

    //is there any way to get out of check by moving the king?
    for(let i = 0; i < kingVectors.length; i++){
        const vector: MoveVector = kingVectors[i];
        const kingMovesTo = displaceTo(kingPosition, vector);

        if(isOnBoard(kingMovesTo) && playerAt(board, kingMovesTo) !== defender){
            if( !movesIntoCheck(board, kingPosition, kingMovesTo, boardAnnotations) ){
                return false;
            } 
        }   
    }

    const attackLines = generateLinesOfAttack(board, defender, kingPosition);
    const checkLine = attackLines.next();
    if(checkLine.value === null){
        return false;
    }
    
    //There's no way to remove check from 2 pieces w/o moving the king,
    //which we just tried.
    const secondLine = attackLines.next();
    if(secondLine.value){
        return true
    }

    const attacker = otherPlayer(defender);

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
            
            if(!movesIntoCheck(board, defendingPieceMovesFrom, positionOnCheckLine, boardAnnotations)){
                return false;
            }
            
            defensiveMoveInfo = defensiveMoves.next();
        }
    }
    return true;
}

export default isCheckmate;
