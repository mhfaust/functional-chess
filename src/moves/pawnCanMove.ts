import { 
    rank, 
    file, 
    playerAt, 
    isOccupied, 
    isUnOccupied, 
    isOccupiedByPlayer, 
        positionName} from 'positions';
import movesIntoCheck from 'check/movesIntoCheck';
import { KingAnnotations } from 'interfaces/KingAnnotations';
import { EnPassantAnnotations } from 'interfaces/EnPassantAnnotations';
import { Board } from 'types/Board';

function pawnCanMove (
        board: Board, 
        from: GridCoordinates, 
        to: GridCoordinates, 
        annotations: KingAnnotations & EnPassantAnnotations)
    : boolean {

    const { passedPosition } = annotations;
    
    const player = playerAt(board, from);
    const forwardDirection = player === 'White' ? 1 : -1;
    const stepsForward = (rank(to) - rank(from)) * forwardDirection;
    const stepsSideways = file(to) - file(from);
      
    if(stepsForward < 1 || stepsForward > 2 || Math.abs(stepsSideways) > 1){
        return false;
    }
    //forward, can't capture or be blocked:
    if( stepsSideways === 0){
        
        if(isOccupied(board, to)){
            return false;
        }
        if(stepsForward === 2){
            if(player === 'Black' && rank(from) !== 6){
                return false;
            }
            if(player === 'White' && rank(from) !== 1){
                return false;
            }
            //cannot jump over any piece
            if(isOccupied(board, [file(from), rank(from) + forwardDirection])){
                return false;
            }
        }
    }
    
    //diagonal, must capture:
    else {
        if(stepsForward !== 1){
            return false;
        }
        if(isUnOccupied(board, to) && (!passedPosition || passedPosition !== positionName(to))){
            return false;
        }
        if(isOccupiedByPlayer(board, to, player)){
            return false;
        }
    }
    
    if (movesIntoCheck(board, from, to, annotations)) {
        return false;
    }

    return true;
}

export default pawnCanMove;