import COORDS from "./coordinates";
import { PositionName } from "./positionName";

function rank (position: PositionName): number {
    
    return COORDS[position][1];
}

export default rank;