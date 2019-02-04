/*
caller is responsible for checking if the new 
position is on the board
*/

import { rank, file } from 'position-utils/index';
    
function displaceTo  (currentPosition: GridCoordinates, vector: MoveVector)
    : GridCoordinates {

    return [
        file(currentPosition) + file(vector),
        rank(currentPosition) + rank(vector)
    ];
};

export default displaceTo;