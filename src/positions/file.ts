import COORDS from "./coordinates";
import { PositionName } from "./positionName";

function file (position: PositionName): number {
    if(!COORDS[position]){
        console.log(`No coordinates because position is: ${position}`)
    }
    return COORDS[position][0];
};

export default file;