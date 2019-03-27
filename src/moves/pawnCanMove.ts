import { 
    rank, 
    file, 
    playerAt, 
    isOccupied, 
    isUnOccupied, 
    isOccupiedByPlayer, 
    areSamePositions } from 'positions/index';
import movesIntoCheck from 'check/movesIntoCheck';

function pawnCanMove (
        board: Board, 
        fromPosition: GridCoordinates, 
        toPosition: GridCoordinates, 
        boardAnnotations:KingAnnotations & EnPassantAnnotations)
    :boolean {

    const { passedPosition } = boardAnnotations;
    
    const player = playerAt(board, fromPosition);
    const forwardDirection = player === Player.White ? 1 : -1;
    const stepsForward = (rank(toPosition) - rank(fromPosition)) * forwardDirection;
    const stepsSideways = file(toPosition) - file(fromPosition);
      
    if(stepsForward < 1 || stepsForward > 2 || Math.abs(stepsSideways) > 1){
        return false;
    }

    //forward, can't capture or be blocked:
    if(stepsSideways === 0){
        if(isOccupied(board, toPosition)){
            return false;
        }
        if(stepsForward === 2){
            if(player === Player.Black && rank(fromPosition) !== 6){
                return false;
            }
            if(player === Player.White && rank(fromPosition) !== 2){
                return false;
            }
            //cannot jump over any piece
            if(isOccupied(board, [file(fromPosition), rank(fromPosition) + forwardDirection])){
                return false;
            }
        }
    }
    //diagonal, must capture:
    else{
        if(stepsForward !== 1){
            return false;
        }
        if(isUnOccupied(board, toPosition) && (!passedPosition || !areSamePositions(toPosition, passedPosition))){
            return false;
        }
        if(isOccupiedByPlayer(board, toPosition, player)){
            return false;
        }
    }

    if(movesIntoCheck(board, fromPosition, toPosition, boardAnnotations)){
        return false;
    }

    return true;
}

export default pawnCanMove;