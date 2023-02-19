import { emptyBoard } from 'board'
import { Board } from 'types/Board';

function rotateCounterClockwise(board: Board){

    const rotated: Board = emptyBoard();
    board.forEach((arr, i) => arr.forEach((piece, j) => rotated[7-j][i] = piece))
    return rotated;
}

export default rotateCounterClockwise;