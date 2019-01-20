/*
caller is responsible for checking if the new 
position is on the board
*/

import { rank, file } from 'position-utils/index';
    
function displaceTo  (currentPosition: GridCoordinates, vector: MoveVector)
    : GridCoordinates {
    const newFileIndex = file(currentPosition) + file(vector);
    const newRankIndex = rank(currentPosition) + rank(vector)

    return [
        newFileIndex,
        newRankIndex
    ];
};

export default displaceTo;