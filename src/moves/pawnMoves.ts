 import { 
    playerAt, 
    displaceTo, 
    isOnBoard, 
    isUnOccupied, 
    isOccupiedByPlayer, 
    otherPlayer, 
    rank
} from 'positions';
import { isInCheck } from 'check';
import { move } from 'board';
import { PositionName } from 'positions/positionName';
import { Board } from 'types/Board';

function pawn(
    board: Board, 
    moveFrom: PositionName, 
    enPassantSquare: PositionName)
    : Set<PositionName> {
    const player = playerAt(board, moveFrom);
    const legalMoves: Set<PositionName> = new Set();
    const forwardDirection = player === 'White' ? 1 : -1;
    const initialRank = rank(moveFrom);
    const forward1 = displaceTo(moveFrom, [0, forwardDirection]);

    const moveNotInCheck = (moveTo: PositionName): boolean => !isInCheck(move(board, moveFrom, moveTo), player)
     
    //advance moves
    if(isOnBoard(forward1) && isUnOccupied(board, forward1) && moveNotInCheck(forward1)){
        legalMoves.add(forward1);
        
        //can only advance if the pawn has never moved.
        //Also note, we only test if we already know the first space is clear
        const pawnHasNotMoved = (player === 'White' && initialRank === 1) || (player === 'Black' && initialRank === 6)
        if(pawnHasNotMoved){
            const forward2 = displaceTo(moveFrom, [0, 2 * forwardDirection]);
            if(isOnBoard(forward1) && isUnOccupied(board, forward2) && moveNotInCheck(forward2)){
                legalMoves.add(forward2);
            }
        }
    }
    const moveVectors: Array<MoveVector> = [ [-1,forwardDirection], [1,forwardDirection] ];
    const opponent = otherPlayer(player)

    //attack moves
    moveVectors.forEach(vector => {
        const attackedPosition = displaceTo(moveFrom, vector);
        if(!isOnBoard(attackedPosition)){
            return;
        }
        if(
            isOccupiedByPlayer(board, attackedPosition, opponent)
            || (attackedPosition === enPassantSquare)
        ){
                if(moveNotInCheck(attackedPosition)){
                    legalMoves.add(attackedPosition);
                }
        }
    });

    return legalMoves;
}

export default pawn;