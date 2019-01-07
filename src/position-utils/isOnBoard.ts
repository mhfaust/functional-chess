import { rank, file } from 'position-utils/index'

const isOnBoard = (position: GridCoordinates) => 
    file(position) > -1 &&
    file(position) < 8 &&
    rank(position) > -1 &&
    rank(position) < 8;

export default isOnBoard;