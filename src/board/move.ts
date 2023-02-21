import { file, rank, pieceAt } from 'positions';
import { emptyBoard } from 'board';
import { Board } from 'types/Board';

function move (
    previousBoard: Board, 
    from: GridCoordinates, 
    to: GridCoordinates
) : Board {

    const newBoard : Board = [
        [...previousBoard[0]],
        [...previousBoard[1]],
        [...previousBoard[2]],
        [...previousBoard[3]],
        [...previousBoard[4]],
        [...previousBoard[5]],
        [...previousBoard[6]],
        [...previousBoard[7]],
    ];

    newBoard[file(from)][rank(from)] = null;
    newBoard[file(to)][rank(to)] = pieceAt(previousBoard, from)
    
    return newBoard;
}

export default move;