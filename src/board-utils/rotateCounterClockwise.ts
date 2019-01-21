import { empty } from 'board-utils/index'

function rotateCounterClockwise(board: Board){

    const rotated: Board = empty();
    board.forEach((arr, i) => arr.forEach((piece, j) => rotated[7-j][i] = piece))
    return rotated;
}

export default rotateCounterClockwise;