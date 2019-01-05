import { rank, file, playerAt } from 'position-utils';

function kingCanMove (board, fromPosition, toPosition) {

    const player = playerAt(board, fromPosition);

    if(
        Math.abs(rank(toPosition) - rank(fromPosition)) > 1
        || Math.abs(file(toPosition) - rank(fromPosition)) > 1
        || player === playerAt(board, toPosition)
    ){
        return false;
     }

    return true;
}

export default kingCanMove;