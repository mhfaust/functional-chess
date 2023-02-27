/*
caller is responsible for checking if the new 
position is on the board
*/

import { rank, file } from 'positions';
import positionName, { PositionName } from './positionName';
    
function displaceTo  (
    currentPosition: PositionName, 
    vector: MoveVector)
    : PositionName {

    return positionName([
        file(currentPosition) + vector[0],
        rank(currentPosition) + vector[1]
    ]);
};

export default displaceTo;