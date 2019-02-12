import { rank, file, playerAt, areSamePositions } from 'position-utils/index';
import movesIntoCheck from 'check/movesIntoCheck';
import { Position } from 'constants/position';

const isOkCastle = (board:Board,
    kingFrom:GridCoordinates,
    kingTo:GridCoordinates,
    boardAnnotations:HasCastlingInfo & HasKingPositions) => {

        const player = playerAt(board, kingFrom);

        if(player === Player.White){
            if(!boardAnnotations.whiteKingSideCastlingPrecluded 
                    && areSamePositions(kingTo, Position.G1)
                    && !movesIntoCheck(board, Position.E1, Position.F1, boardAnnotations)
                ){
            }
            if(!boardAnnotations.whiteQueenSideCastlingPrecluded 
                    && areSamePositions(kingTo, Position.C1)
                    && !movesIntoCheck(board, Position.E1, Position.D1, boardAnnotations)
                ){
            }
        }
        else if(player === Player.Black){
            if(!boardAnnotations.blackKingSideCastlingPrecluded 
                    && areSamePositions(kingTo, Position.G8)
                    && !movesIntoCheck(board, Position.E8, Position.F8, boardAnnotations)
                ){
            }
            if(!boardAnnotations.blackQueenSideCastlingPrecluded 
                    && areSamePositions(kingTo, Position.C8)
                    && !movesIntoCheck(board, Position.E8, Position.D8, boardAnnotations)
                ){
            }
        }
    }


function canKingMove (board: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates, boardAnnotations:HasKingPositions & HasCastlingInfo) 
    : boolean {

    const player = playerAt(board, fromPosition);

    if(
        Math.abs(rank(toPosition) - rank(fromPosition)) > 1
        || Math.abs(file(toPosition) - rank(fromPosition)) > 1
        || player === playerAt(board, toPosition)
        || movesIntoCheck(board, fromPosition, toPosition, boardAnnotations)
    ){
        return false;
    }

    return true;
}

export default canKingMove;