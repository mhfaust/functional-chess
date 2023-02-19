 import { 
    playerAt, 
    displaceTo, 
    isOnBoard, 
    isUnOccupied, 
    isOccupiedByPlayer, 
    otherPlayer, 
    positionName, 
    rank, 
    areSamePositions } from 'positions';
import { isInCheck } from 'check';
import { move } from 'board';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { EnPassantAnnotations } from 'interfaces/EnPassantAnnotations';
import { PositionName } from 'enums/positionName';

function pawn(
    board: Board, 
    moveFrom: GridCoordinates, 
    annotations: KingAnnotations & EnPassantAnnotations)
    : Set<PositionName> {
    
    const player = playerAt(board, moveFrom);
    const legalMoves: Set<PositionName> = new Set();
    const forwardDirection = player === Player.White ? 1 : -1;
    const initialRank = rank(moveFrom);
    const forward1 = displaceTo(moveFrom, [0, forwardDirection]);
    const { passedPosition } = annotations;

    const moveNotInCheck = (moveTo:GridCoordinates):boolean => !isInCheck(move(board, moveFrom, moveTo), player, annotations)
     
    //advance moves
    if(isOnBoard(forward1) && isUnOccupied(board, forward1) && moveNotInCheck(forward1)){
        legalMoves.add(positionName(forward1));
        
        //can only advance if the pawn has never moved.
        //Also note, we only test if we already know the first space is clear
        const pawnHasNotMoved = (player === Player.White && initialRank === 1) || (player === Player.Black && initialRank === 6)
        if(pawnHasNotMoved){
            const forward2 = displaceTo(moveFrom, [0, 2 * forwardDirection]);
            if(isOnBoard(forward1) && isUnOccupied(board, forward2) && moveNotInCheck(forward2)){
                legalMoves.add(positionName(forward2));
            }
        }
    }
    const moveVectors: Array<MoveVector> = [ [-1,forwardDirection], [1,forwardDirection] ];
    const other = otherPlayer(player)

    //attack moves
    moveVectors.forEach(vector => {
        const attackedPosition = displaceTo(moveFrom, vector);

        if((isOnBoard(attackedPosition) && isOccupiedByPlayer(board, attackedPosition, other))
            || (passedPosition && areSamePositions(attackedPosition, passedPosition))){
                if(moveNotInCheck(attackedPosition)){
                    legalMoves.add(positionName(attackedPosition));
                }
        }
    });

    return legalMoves;
}

export default pawn;