import COORDS from 'positions/coordinates'
import { Board } from "types/Board";

function parseSimplePawnForward(
    notation: string, 
    board: Board)
    : [GridCoordinates, GridCoordinates]{



    return [COORDS.E1, COORDS.E1];
}

export default parseSimplePawnForward;