import { rank, file } from 'position-utils'

const isOnBoard = (position) => 
    file(position) > -1 &&
    file(position) < 8 &&
    rank(position) > -1 &&
    rank(position) < 8;

export default isOnBoard;