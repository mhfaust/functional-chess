import positionName from "./positionName";

function areSamePositions  (
    posA: GridCoordinates, 
    posB: GridCoordinates)
    : boolean {
        return positionName(posA) === positionName(posB)
    } 

export default areSamePositions;