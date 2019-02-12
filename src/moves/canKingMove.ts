import { rank, file, playerAt, areSamePositions } from 'position-utils/index';
import movesIntoCheck from 'check/movesIntoCheck';
import { Position } from 'constants/position';

const isOkCastle = (board:Board,
    kingFrom:GridCoordinates,
    kingTo:GridCoordinates,
    boardAnnotations:HasCastlingInfo & HasKingPositions) => {

        const { whiteQueenSideCastlingPrecluded, 
            whiteKingSideCastlingPrecluded,
            blackQueenSideCastlingPrecluded,
            blackKingSideCastlingPrecluded,
        } = boardAnnotations;

        const player = playerAt(board, kingFrom);

        if(player === Player.White){
            if(!whiteKingSideCastlingPrecluded && areSamePositions(kingTo, Position.G1)){
                
            }
            if(!whiteQueenSideCastlingPrecluded && areSamePositions(kingTo, Position.C1)){
                
            }
        }
        else if(player === Player.Black){
            if(!blackKingSideCastlingPrecluded && areSamePositions(kingTo, Position.G8)){
                
            }
            if(!blackQueenSideCastlingPrecluded && areSamePositions(kingTo, Position.C8)){
                
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