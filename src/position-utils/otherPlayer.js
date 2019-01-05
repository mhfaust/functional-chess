import { BLACK, WHITE } from '../constants/pieces'

const otherPlayer = (player) => player === WHITE 
    ? BLACK
    : player === BLACK 
        ? WHITE
        : undefined;

export default otherPlayer;