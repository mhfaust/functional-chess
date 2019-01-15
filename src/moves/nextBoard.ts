import { file, rank, areSamePositions, pieceAt } from 'position-utils/index';
import { Piece } from 'constants/pieces'
import { empty } from 'boards/index';

function nextBoard(previousBoard: Board, fromPosition: GridCoordinates, toPosition: GridCoordinates) 
    : Board  {

    const newBoard : Board = empty();
    
    for(let file = 0; file < 8; file++){
        for(let rank = 0; rank < 8; rank++){
            newBoard[file][rank] = pieceAt(previousBoard, [file,rank]);
        }
    }

    newBoard[file(fromPosition)][rank(fromPosition)] = Piece.Empty;
    newBoard[file(toPosition)][rank(toPosition)] = pieceAt(previousBoard, fromPosition)
    
    return newBoard;
}

export default nextBoard;