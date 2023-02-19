import { file, rank, pieceAt } from 'positions';
import { emptyBoard } from 'board';
import { Board } from 'types/Board';

function move(
    previousBoard: Board, 
    fromPosition: GridCoordinates, 
    toPosition: GridCoordinates) 
    : Board  {

    const newBoard : Board = emptyBoard();
    
    for(let file = 0; file < 8; file++){
        for(let rank = 0; rank < 8; rank++){
            newBoard[file][rank] = pieceAt(previousBoard, [file,rank]);
        }
    }

    newBoard[file(fromPosition)][rank(fromPosition)] = null;
    newBoard[file(toPosition)][rank(toPosition)] = pieceAt(previousBoard, fromPosition)
    
    return newBoard;
}

export default move;