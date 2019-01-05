function rotateCounterClockwise(board){
    const rotated = [[],[],[],[],[],[],[],[]];
    board.forEach((arr, i) => arr.forEach((piece, j) => rotated[7-j][i] = piece))
    return rotated;
}

export default rotateCounterClockwise;